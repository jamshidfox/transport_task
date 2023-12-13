/** @format */

// pages/Homepage/index.js

import BlogContainer from "./containers/BlogContainer.vue";
import BaseLayout from "@/components/Layout";
import * as ROUTES from "@/constants/routes";

export default () => [
  {
    path: ROUTES.BLOGS,
    component: (
      <BaseLayout>
        <BlogContainer />
      </BaseLayout>
    ),
    name: "Blogs",
  },
];
