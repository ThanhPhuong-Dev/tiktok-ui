//HeaderOnly
import { Headeronly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home/home.js';
import Following from '~/pages/Following/following.js';
import ProFile from '~/pages/Profile/profile';
import Upload from '~/pages/Upload/upload';
import Search from '~/pages/Search/search';

const publicRouters = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/@:nickname', element: ProFile },
    { path: '/upload', element: Upload, layout: Headeronly },
    { path: '/search', element: Search, layout: null },
];

const privateRouters = [];

export { publicRouters, privateRouters };
