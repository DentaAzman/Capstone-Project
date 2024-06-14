import explore from '../views/pages/explore';
import ExploreCanggu from '../views/pages/explore-canggu';
import ExploreKintamani from '../views/pages/explore-kintamani';
import ExploreNusaDua from '../views/pages/explore-nusa-dua';
import ExploreSeminyak from '../views/pages/explore-seminyak';
import ExploreKuta from '../views/pages/explore-kuta';
import ExploreUbud from '../views/pages/explore-ubud';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/explore': explore,
  '/explore-canggu': ExploreCanggu,
  '/explore-nusadua': ExploreNusaDua,
  '/explore-seminyak': ExploreSeminyak,
  '/explore-kintamani': ExploreKintamani,
  '/explore-kuta': ExploreKuta,
  '/explore-ubud': ExploreUbud,
};

export default routes;
