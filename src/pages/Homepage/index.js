/** @format */

// pages/Homepage/index.js

import LandingPage from "./containers/LandingContainer.vue";
import BaseLayout from "@/components/Layout";
import * as ROUTES from "@/constants/routes";

// Import additional components you want to render in MainContent
import UserAccount from "./containers/MyAccountContainer.vue";
import UserAddress from "./containers/UserAddressContainer.vue";
import OrdersContainer from "./containers/OrdersContainer.vue";
import WishListContainer from "./containers/WishListContainer.vue";
import ReportsContainer from "./containers/ReportsContainer.vue";
import DownloadsContainer from "./containers/DownloadsContainer.vue";
import SupportContainer from "./containers/SupportContainer.vue";

export default () => [
  {
    path: ROUTES.LANDING,
    component: (
      <BaseLayout>
        <LandingPage />
      </BaseLayout>
    ),
    name: "LandingPage",
  },
  {
    path: ROUTES.USER_ACCOUNT,
    component: <UserAccount />,
    name: "UserAccount",
  },
  {
    path: ROUTES.USER_ADDRESS,
    component: <UserAddress />,
    name: "UserAddress",
  },
  {
    path: ROUTES.ORDERS,
    component: <OrdersContainer />,
    name: "Orders",
  },
  {
    path: ROUTES.WHISH_LIST,
    component: <WishListContainer />,
    name: "WishList",
  },
  {
    path: ROUTES.REPORTS,
    component: <ReportsContainer />,
    name: "Reports",
  },
  {
    path: ROUTES.DOWNLOADS,
    component: <DownloadsContainer />,
    name: "Downloads",
  },
  {
    path: ROUTES.SUPPORT,
    component: <SupportContainer />,
    name: "Support",
  },
];
