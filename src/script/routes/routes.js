import explore from '../views/pages/explore';
import ExploreCanggu from '../views/pages/explore-canggu';
import ExploreKintamani from '../views/pages/explore-kintamani';
import ExploreNusaDua from '../views/pages/explore-nusa-dua';
import ExploreSeminyak from '../views/pages/explore-seminyak';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/explore': explore,
  '/explore-canggu': ExploreCanggu,
  '/explore-nusadua': ExploreNusaDua,
  '/explore-seminyak': ExploreSeminyak,
  '/explore-kintamani': ExploreKintamani,
};

export default routes;
