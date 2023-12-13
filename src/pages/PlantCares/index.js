/** @format */

// pages/Homepage/index.js

import PlantCaresContainer from "./containers/PlantCaresContainer.vue";
import BaseLayout from "@/components/Layout";
import * as ROUTES from "@/constants/routes";

export default () => [
  {
    path: ROUTES.PLANT_CARES,
    component: (
      <BaseLayout>
        <PlantCaresContainer />
      </BaseLayout>
    ),
    name: "Plant Cares",
  },
];
