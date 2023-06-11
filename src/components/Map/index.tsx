import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import MapTopBar from "@components/TopBar";

import { AppConfig } from "@lib/AppConfig";
import MarkerCategories, { Category } from "@lib/MarkerCategories";
import { Places, PlacesType } from "@lib/Places";

import MapContextProvider from "./MapContextProvider";
import useLeafletWindow from "./useLeafletWindow";
import useMapContext from "./useMapContext";
import useMarker from "./useMarker";
import { LocateFixed } from "lucide-react";
import cluster from "cluster";

const CenterToMarkerButton = dynamic(
  async () => (await import("./Button/CenterButton")).CenterButton,
  {
    ssr: false,
  }
);
const CustomMarker = dynamic(
  async () => (await import("./Marker")).CustomMarker,
  {
    ssr: false,
  }
);
const LocateButton = dynamic(
  async () => (await import("./Button/LocateButton")).LocateButton,
  {
    ssr: false,
  }
);
const LeafletMap = dynamic(
  async () => (await import("./LeafletMap")).LeafletMap,
  {
    ssr: false,
  }
);

const MapInner = () => {
  const { map } = useMapContext();
  const leafletWindow = useLeafletWindow();
  const [selectBusRoute, setSelectBusRoute] = useState<PlacesType>(Places[0]);
  const {
    width: viewportWidth,
    height: viewportHeight,
    ref: viewportRef,
  } = useResizeDetector({
    refreshMode: "debounce",
    refreshRate: 200,
  });

  const { clustersByCategory, allMarkersBoundCenter } = useMarker({
    locations: selectBusRoute,
    map,
    viewportWidth,
    viewportHeight,
  });

  const isLoading = !map || !leafletWindow || !viewportWidth || !viewportHeight;

  useEffect(() => {
    if (!allMarkersBoundCenter || !map) return;

    const moveEnd = () => {
      map.setMinZoom(allMarkersBoundCenter.minZoom - 1);
      map.off("moveend", moveEnd);
    };

    map.setMinZoom(0);
    map.flyTo(allMarkersBoundCenter.centerPos, allMarkersBoundCenter.minZoom, {
      animate: false,
    });
    map.once("moveend", moveEnd);
  }, [allMarkersBoundCenter]);

  return (
    <div className="h-full w-full absolute overflow-hidden" ref={viewportRef}>
      <div
        className={`absolute w-full left-0 transition-opacity ${
          isLoading ? "opacity-0" : "opacity-1 "
        }`}
        style={{
          top: AppConfig.ui.topBarHeight,
          width: viewportWidth ?? "100%",
          height: viewportHeight
            ? viewportHeight - AppConfig.ui.topBarHeight
            : "100%",
        }}
      >
        <LeafletMap
          key={"12312312"}
          center={AppConfig.baseCenter}
          zoom={0}
          maxZoom={18}
          minZoom={AppConfig.minZoom}
        >
          {!isLoading ? (
            <>
              <LocateButton />
              {Object.values(clustersByCategory).map((item) =>
                item.markers.map((marker) => (
                  <CustomMarker
                    icon={MarkerCategories[marker.category].icon}
                    color={MarkerCategories[marker.category].color}
                    key={(marker.position as number[]).join("")}
                    position={marker.position}
                    label={marker.label ?? ""}
                  />
                ))
              )}
              <div
                className="absolute flex flex-row right-10 bottom-5  space-x-5 bg-white px-5 py-5 rounded-lg"
                style={{ zIndex: 1000 }}
              >
                {Object.values(Places).map((RouteButton, index) => (
                  <button
                    type="button"
                    style={{ zIndex: 400 }}
                    className={`button rounded p-2 shadow-md text-dark bg-green-800`}
                    onClick={() => {
                      setSelectBusRoute(Places[index]);
                    }}
                  >
                    สาย {RouteButton[index].category}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </LeafletMap>
      </div>
    </div>
  );
};

const Map = () => (
  <MapContextProvider>
    <MapInner />
  </MapContextProvider>
);

export default Map;
