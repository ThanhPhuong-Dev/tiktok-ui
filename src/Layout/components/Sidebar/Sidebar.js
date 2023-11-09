import { useEffect, useState, useMemo } from 'react';

import config from '~/routerConfig/config';
import Menu, { MenuItem } from './Menu';
import * as userService from '~/Services/userService';
// import * as followingService from '~/Services/followingService';
import {
    IconHome,
    IconActiveHome,
    IconFollowing,
    IconActiveFollowing,
    IconExpore,
    IconActiveExpore,
    IconLive,
    IconActiveLive,
    IconProfile,
    IconActiveProfile,
} from '~/components/Icon/icon';
import classNames from 'classnames/bind';
import styles from './sidebar.module.scss';
import SuggestedAcounts from '~/components/SuggestedAcounts';
import { getFollowingAPI } from '~/Services/followingService';
import FooterSideBar from './Footer/Footer';

const cx = classNames.bind(styles);
const INT_USER = Math.floor(Math.random() * 40);
const PER_PAGE = 5;

function Sidebar() {
    const [page, setPage] = useState(INT_USER);
    const [userSuggest, setUserSuggest] = useState([]);
    const [userFollow, setUserFollow] = useState([]);

    useEffect(() => {
        userService
            .getSuggestAPI({ page: page, perPage: PER_PAGE })
            .then((data) => {
                setUserSuggest((prev) => [...prev, ...data]);
                // setUserSuggest((prev) => (!prev ? [...prev, ...data] : [...data]));
            })
            .catch((error) => console.log(error));
    }, [page]);

    const handleSeeAll = () => setPage(page + 1);

    useEffect(() => {
        userService
            .getSuggestAPI({ page: 1, perPage: 10 })
            .then((data) => setUserFollow(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    icon={<IconHome></IconHome>}
                    activeIcon={<IconActiveHome></IconActiveHome>}
                    to={config.routes.home}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    icon={<IconFollowing></IconFollowing>}
                    activeIcon={<IconActiveFollowing></IconActiveFollowing>}
                    to={config.routes.following}
                ></MenuItem>
                <MenuItem
                    title="Explore"
                    icon={<IconExpore></IconExpore>}
                    activeIcon={<IconActiveExpore></IconActiveExpore>}
                    to={config.routes.explore}
                ></MenuItem>
                <MenuItem
                    title="Live"
                    icon={<IconLive></IconLive>}
                    activeIcon={<IconActiveLive></IconActiveLive>}
                    to={config.routes.live}
                ></MenuItem>
                <MenuItem
                    title="ProFile"
                    icon={<IconProfile></IconProfile>}
                    activeIcon={<IconActiveProfile></IconActiveProfile>}
                    to={config.routes.profile}
                ></MenuItem>
            </Menu>

            <SuggestedAcounts label="Suggested Acounts" data={userSuggest} onSeeAll={handleSeeAll}></SuggestedAcounts>
            <SuggestedAcounts label="Following Acounts" data={userFollow}></SuggestedAcounts>
            <FooterSideBar></FooterSideBar>
        </aside>
    );
}

export default Sidebar;
