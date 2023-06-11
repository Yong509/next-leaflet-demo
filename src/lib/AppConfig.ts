import { LatLngExpression } from "leaflet";

export const AppConfig = {
  minZoom: 1,
  maxZoom: 18,
  ui: {
    topBarHeight: 0,
    mapIconSize: 32,
    markerIconSize: 27,
    menuIconSize: 16,
    topBarIconSize: 24,
  },
  baseCenter: [13.848183, 100.569578] as LatLngExpression,
};
