import LatLngLogo from "@components/TopBar/LatLng";

const MapTopBar = () => (
  <div
    className="flex h-20 absolute left-20 top-0 p-3  "
    style={{ zIndex: 1000 }}
  >
    <div className="flex justify-between w-full">
      <LatLngLogo />
    </div>
  </div>
);

export default MapTopBar;
