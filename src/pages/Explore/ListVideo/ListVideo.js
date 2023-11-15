import classNames from 'classnames/bind';
import styles from './ListVideo.module.scss';
import Images from '~/components/Image/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function ListVdieo({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('videos')}>
                <video preload="auto" controls src={data.file_url}></video>
            </div>
            <p className={cx('title')}>{data.description}</p>

            <div className={cx('user')}>
                <div className={cx('info')}>
                    <Images src={data.user.avatar} alt="" className={cx('avatar')}></Images>
                    <span className={cx('name')}>{data.user.nickname}</span>
                </div>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faHeart} />
                    <strong>{data.user.id}</strong>
                </div>
            </div>
        </div>
    );
}

ListVdieo.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ListVdieo;
