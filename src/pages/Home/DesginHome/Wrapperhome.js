import ProTypes from 'prop-types';

import HomeItem from './HomeItem/homeItem';
import classNames from 'classnames/bind';
import styles from './WrapperItem.module.scss';
const cx = classNames.bind(styles);
function WrapperHome({ data = [], onShowVideo }) {
    return (
        <div className={cx('container')}>
            {data.map((user) => (
                <HomeItem key={user.id} data={user}></HomeItem>
            ))}
            <p className={cx('title')} onClick={onShowVideo}>
                See More
            </p>
        </div>
    );
}

WrapperHome.propTypes = {
    data: ProTypes.array,
    onShowVideo: ProTypes.func,
};

export default WrapperHome;
