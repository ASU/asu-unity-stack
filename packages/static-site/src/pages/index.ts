import Home from "~/pages/Home";
import HeaderGuide from "~/pages/HeaderGuide";
import DataLayerGuide from "~/pages/DataLayerGuide";
import { PageName } from "~/routes/config";

const Pages = {
  [PageName.HOME]: Home,
  [PageName.HEADERGUIDE]: HeaderGuide,
  [PageName.DATALAYERGUIDE]: DataLayerGuide,
} as const;

export type AppPagesType = typeof Pages;

export default Pages;
