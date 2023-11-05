//HeaderOnly
import { Headeronly } from '~/components/Layout';

import { RouterConfig } from '~/routerConfig/config';
//Pages
import Home from '~/pages/Home/home.js';
import Following from '~/pages/Following/following.js';
import ProFile from '~/pages/Profile/profile';
import Upload from '~/pages/Upload/upload';
import Search from '~/pages/Search/search';

const publicRouters = [
    { path: RouterConfig.home, element: Home },
    { path: RouterConfig.following, element: Following },
    { path: RouterConfig.profile, element: ProFile },
    { path: RouterConfig.upload, element: Upload, layout: Headeronly },
    { path: RouterConfig.search, element: Search, layout: null },
];

const privateRouters = [];

export { publicRouters, privateRouters };
