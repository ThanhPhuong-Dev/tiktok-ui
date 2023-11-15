import classNames from 'classnames/bind';
import style from './WrapperListVideo.module.scss';
import ListVdieo from '../ListVideo/ListVideo';
import PropTypes from 'prop-types';
const cx = classNames.bind(style);
function WrapperListVideo({ data = [] }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((video) => (
                <ListVdieo key={video.id} data={video}></ListVdieo>
            ))}
        </div>
    );
}

WrapperListVideo.propTypes = {
    data: PropTypes.array,
};
export default WrapperListVideo;
