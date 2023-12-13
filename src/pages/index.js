/** @format */

import homepage from "./Homepage";
import shop from "./Shop";
import plantCares from "./PlantCares";
import blogs from "./Blogs";

const tester = () => [...homepage(), ...shop(), ...plantCares(), ...blogs()];

const Routes = () => [...tester()];

export default Routes;
