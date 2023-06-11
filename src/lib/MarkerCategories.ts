import {
  Bus,
  BusIcon,
  Leaf,
  LocateFixed,
  LucideProps,
  PersonStanding,
} from "lucide-react";
import { FunctionComponent } from "react";
import colors from "tailwindcss/colors";

export enum Category {
  LOCATE = 0,
  ROUTE1 = 1,
  ROUTE3 = 3,
}

export interface MarkerCategoriesValues {
  name: string;
  icon: FunctionComponent<LucideProps>;
  color: string;
}

type MarkerCategorieType = {
  [key in Category]: MarkerCategoriesValues;
};

const MarkerCategories: MarkerCategorieType = {
  [Category.LOCATE]: {
    name: "User Location",
    icon: LocateFixed,
    color: colors.green[400],
  },
  [Category.ROUTE1]: {
    name: "Bus",
    icon: BusIcon,
    color: colors.green[600],
  },
  [Category.ROUTE3]: {
    name: "Bus",
    icon: BusIcon,
    color: colors.blue[600],
  },
};

export default MarkerCategories;
