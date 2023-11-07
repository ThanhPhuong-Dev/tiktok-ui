import config from '~/routerConfig/config';
import Menu, { MenuItem } from './Menu';
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

const cx = classNames.bind(styles);

function Sidebar() {
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

            <SuggestedAcounts label = 'Suggested Acounts'></SuggestedAcounts>
            <SuggestedAcounts label = 'Following Acounts'></SuggestedAcounts>
        </aside>
    );
}

export default Sidebar;
