//HeaderOnly
import { Headeronly } from '~/Layout';

import config from '~/routerConfig/config';
//Pages
import Home from '~/pages/Home/home.js';
import Following from '~/pages/Following/following.js';
import ProFile from '~/pages/Profile/profile';
import Upload from '~/pages/Upload/upload';
import Search from '~/pages/Search/search';
import Live from '~/pages/Live/live';
import Explore from '~/pages/Explore/explore';

const publicRouters = [
    { path: config.routes.home, element: Home },
    { path: config.routes.following, element: Following },
    { path: config.routes.exploree, element: Explore },
    { path: config.routes.live, element: Live },
    { path: config.routes.profile, element: ProFile },
    { path: config.routes.upload, element: Upload, layout: Headeronly },
    { path: config.routes.search, element: Search, layout: null },
];

const privateRouters = [];

export { publicRouters, privateRouters };
