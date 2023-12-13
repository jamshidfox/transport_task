/** @format */

// pages/Homepage/index.js

import ShopContainer from "./containers/ShopContainer.vue";
import BaseLayout from "@/components/Layout";
import * as ROUTES from "@/constants/routes";

export default () => [
  {
    path: ROUTES.SHOP,
    component: (
      <BaseLayout>
        <ShopContainer />
      </BaseLayout>
    ),
    name: "Shop",
  },
];
