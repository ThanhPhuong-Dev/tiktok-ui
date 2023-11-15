import ProTypes from 'prop-types';

import ContentItem from './ContentItem/contentItem';
import classNames from 'classnames/bind';
import styles from './WrapperContainer.module.scss';
const cx = classNames.bind(styles);
function WrapperContainer({ data = [], onShowVideo }) {
    return (
        <div className={cx('container')}>
            {data.map((user) =>
                <ContentItem key={user.id} data={user}></ContentItem>
            )}
            <p className={cx('title')} onClick={onShowVideo}>
                See More
            </p>
        </div>
    );
}

WrapperContainer.propTypes = {
    data: ProTypes.array,
    onShowVideo: ProTypes.func,
};

export default WrapperContainer;
