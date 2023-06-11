import Leaflet from "leaflet";
import { Compass } from "lucide-react";
import { useEffect, useState } from "react";

import useMapContext from "@components/Map/useMapContext";

const LatLngLogo = () => {
  const { map } = useMapContext();
  const [location, setLocation] = useState<Leaflet.LatLng | undefined>();
  const lat = location?.lat.toFixed(4);
  const lng = location?.lng.toFixed(4);

  useEffect(() => {
    if (!map) return undefined;

    setLocation(map.getCenter());

    map?.on("move", () => {
      setLocation(map.getCenter());
    });

    return () => {
      map.off();
    };
  }, [map]);

  return (
    <div className="text-lg leading-none md:text-2xl md:leading-none font-black flex">
      <div className=" text-black">
        {lat}
        <br />
        {lng}
      </div>
    </div>
  );
};

export default LatLngLogo;
