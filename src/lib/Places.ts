import { LatLngExpression } from "leaflet";

import { Category } from "./MarkerCategories";

interface PlaceValues {
  position: LatLngExpression;
  category: Category;
  label?: string;
}
export type PlacesType = PlaceValues[];

export const Places: Array<PlacesType> = [
  [
    {
      position: [13.840391, 100.574932],
      category: Category.ROUTE1,
      label: "จุดจอดหน้าประตู 1",
    },
    {
      position: [13.842078, 100.576185],
      category: Category.ROUTE1,
      label: "จุดจอดหน้าประตู 2",
    },
    {
      position: [13.842438, 100.573095],
      category: Category.ROUTE1,
    },
    {
      position: [13.842681, 100.571814],
      category: Category.ROUTE1,
    },
    {
      position: [13.843156, 100.570584],
      category: Category.ROUTE1,
    },
    {
      position: [13.843489, 100.569984],
      category: Category.ROUTE1,
    },
    {
      position: [13.84509, 100.570451],
      category: Category.ROUTE1,
    },
    {
      position: [13.846599, 100.570632],
      category: Category.ROUTE1,
    },
    {
      position: [13.850391, 100.57243],
      category: Category.ROUTE1,
    },
    {
      position: [13.85037, 100.568418],
      category: Category.ROUTE1,
    },
    {
      position: [13.85036, 100.566694],
      category: Category.ROUTE1,
    },
    {
      position: [13.851777, 100.565403],
      category: Category.ROUTE1,
    },
    {
      position: [13.849442, 100.563944],
      category: Category.ROUTE1,
    },
    {
      position: [13.848545, 100.565405],
      category: Category.ROUTE1,
    },
    {
      position: [13.847128, 100.568146],
      category: Category.ROUTE1,
    },
    {
      position: [13.848545, 100.565405],
      category: Category.ROUTE1,
    },

    {
      position: [13.848545, 100.565405],
      category: Category.ROUTE1,
    },
    {
      position: [13.848545, 100.565405],
      category: Category.ROUTE1,
    },
  ],
  [
    {
      position: [13.840391, 100.574932],
      category: Category.ROUTE3,
      label: "จุดจอดหน้าประตู",
    },
    {
      position: [13.842078, 100.576185],
      category: Category.ROUTE3,
    },
    {
      position: [13.842438, 100.573095],
      category: Category.ROUTE3,
    },
    {
      position: [13.842681, 100.571814],
      category: Category.ROUTE3,
    },
    {
      position: [13.844348, 100.572512],
      category: Category.ROUTE3,
    },
    {
      position: [13.846169, 100.572613],
      category: Category.ROUTE3,
    },
    {
      position: [13.847991, 100.572182],
      category: Category.ROUTE3,
    },
    {
      position: [13.850404, 100.572563],
      category: Category.ROUTE3,
    },
    {
      position: [13.852545, 100.572537],
      category: Category.ROUTE3,
    },
    {
      position: [13.852644, 100.570483],
      category: Category.ROUTE3,
    },
    {
      position: [13.854761, 100.569799],
      category: Category.ROUTE3,
    },
    {
      position: [13.854687, 100.567491],
      category: Category.ROUTE3,
    },
    {
      position: [13.852915, 100.567035],
      category: Category.ROUTE3,
    },
    {
      position: [13.852078, 100.565818],
      category: Category.ROUTE3,
    },
    {
      position: [13.850576, 100.565615],
      category: Category.ROUTE3,
    },
    {
      position: [13.848533, 100.565412],
      category: Category.ROUTE3,
    },
    {
      position: [13.847031, 100.564753],
      category: Category.ROUTE3,
    },
    {
      position: [13.84484, 100.56772],
      category: Category.ROUTE3,
    },
    {
      position: [13.84356, 100.569951],
      category: Category.ROUTE3,
    },
    {
      position: [13.843141, 100.570762],
      category: Category.ROUTE3,
    },
  ],
];
