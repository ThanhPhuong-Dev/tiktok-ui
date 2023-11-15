import ProTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './content.module.scss';

import Images from '~/components/Image/image';
import MyButton from '~/components/Button/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function ContentItem({ data }) {
    const [follow, setFollow] = useState(false);
    const [heart, setHeart] = useState(false);
    const [favorites, setFavorites] = useState(false);
    const hanleFollow = () => {
        setFollow(!follow);
    };

    const handleHeart = () => {
        setHeart(!heart);
    };

    const handleFavorites = () => {
        setFavorites(!favorites);
    };
    return (
        <div className={cx('content-item')}>
            <div>
                <Images src={data.user.avatar} alt={data.user.nickname} className={cx('avatar')}></Images>
            </div>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <Link to={`/@${data.user.nickname}`} className={cx('info')}>
                        <h3 className={cx('name')}>{data.user.nickname}</h3>
                        <span className={cx('user-name')}>{`${data.user.first_name} ${data.user.last_name}`}</span>
                    </Link>
                    <MyButton onClick={hanleFollow} className={cx('btn')} outline>
                        {!follow ? 'Follow' : 'UnFollow'}
                    </MyButton>
                </div>
                <h4 className={cx('title')}>{data.description}</h4>
                <div className={cx('videos')}>
                    <div className={cx('video-container')}>
                        <video loop src={data.file_url} controls></video>
                    </div>
                    <div className={cx('video-action')}>
                        <div className={cx('action-item')} onClick={handleHeart}>
                            {!heart ? (
                                <FontAwesomeIcon icon={faHeart} className={cx('action-icon')} />
                            ) : (
                                <FontAwesomeIcon
                                    style={{ color: 'red' }}
                                    icon={faHeart}
                                    className={cx('action-icon')}
                                />
                            )}
                        </div>
                        <strong className={cx('action-title')}>{data.id}M</strong>
                        <div className={cx('action-item')}>
                            <FontAwesomeIcon icon={faCommentDots} className={cx('action-icon')} />
                        </div>
                        <strong className={cx('action-title')}>{data.likes_count}K</strong>

                        <div className={cx('action-item')} onClick={handleFavorites}>
                            {!favorites ? (
                                <FontAwesomeIcon icon={faBookmark} className={cx('action-icon')} />
                            ) : (
                                <FontAwesomeIcon
                                    style={{ color: 'yellowgreen' }}
                                    icon={faBookmark}
                                    className={cx('action-icon')}
                                />
                            )}
                        </div>
                        <strong className={cx('action-title')}>{data.user_id}K</strong>
                        <div className={cx('action-item')}>
                            <FontAwesomeIcon icon={faShare} className={cx('action-icon')} />
                        </div>
                        <strong className={cx('action-title')}>{data.user.likes_count}K</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

ContentItem.propTypes = {
    data: ProTypes.object.isRequired,
};

export default ContentItem;
