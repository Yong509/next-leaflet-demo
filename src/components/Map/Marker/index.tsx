import { Marker, Popup } from "react-leaflet";
import ThemeConfig from "tailwindcss/defaultTheme";

import { AppConfig } from "@lib/AppConfig";

import useLeafletDivIcon from "../useLeafletDivIcon";
import useMapContext from "../useMapContext";
import MarkerIconWrapper, { CustomMarkerProps } from "./MarkerIconWrapper";
import { useState } from "react";

export const CustomMarker: React.FC<{
  position: CustomMarkerProps["position"];
  icon: CustomMarkerProps["icon"];
  color: CustomMarkerProps["color"];
  label: CustomMarkerProps["label"];
}> = ({ position, icon, color, label }: CustomMarkerProps) => {
  const { map } = useMapContext();
  const { divIcon } = useLeafletDivIcon();
  const [popupOnClick, setPopupOnClick] = useState<boolean>(false);

  const handleMarkerClick = () => {
    map?.panTo(position);
    setPopupOnClick(true);
  };

  return (
    <Marker
      position={position}
      icon={divIcon({
        source: <MarkerIconWrapper color={color} icon={icon} />,
        anchor: [
          (AppConfig.ui.markerIconSize + 16) / 2,
          (AppConfig.ui.markerIconSize + 16) / 2,
        ],
      })}
      eventHandlers={{ click: handleMarkerClick }}
    >
      <Popup>{label}</Popup>
    </Marker>
  );
};
