import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Images from '~/components/Image/image';
import MyButton from '~/components/Button/button';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    const [follow, setFollow] = useState(false);
    const handleFollow = () => {
        setFollow((prevFollow) => !prevFollow);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Images className={cx('avatar')} src={data.avatar} alt="phuoing"></Images>
                <MyButton outline className={cx('btn')} onClick={handleFollow}>
                    {!follow ? 'Follow' : 'UnFollow'}
                </MyButton>
            </header>
            <div className={cx('info')}>
                <Link className={cx('nickname')} to={`/@${data.nickname}`}>
                    {data.nickname}
                </Link>
                <Link className={cx('title')} to={`/@${data.nickname}`}>
                    {data.popular_video.description}
                </Link>
            </div>
            <div className={cx('follow')}>
                <strong className={cx('value')}>{data.followers_count} </strong>
                <span className={cx('label')}>Followers </span>
                <strong className={cx('value')}> {data.likes_count} </strong>
                <span className={cx('label')}>Likes</span>
            </div>
            <p className={cx('clause')}>❤️Follow me❤️</p>
        </div>
    );
}

export default AccountPreview;
