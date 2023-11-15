import classNames from 'classnames/bind';
import styles from './profile.module.scss';
import Images from '~/components/Image/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faShareFromSquare, faLock } from '@fortawesome/free-solid-svg-icons';
import ProFileItem from './ProFileItem/ProFileItem';
import WrapperProFile from './ProFileItem/WrapperProFile';
const cx = classNames.bind(styles);

function ProFile() {
    return (
        <div className={cx('container')}>
            <div className={cx('user')}>
                <div className={cx('user-header')}>
                    <Images
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/aaaa94785c45378b1e376dbe4196c22b~c5_100x100.jpeg?x-expires=1700049600&x-signature=b7w3luSKUMXl68e3JtwX7Y7F5fc%3D"
                        alt=""
                    ></Images>

                    <div className={cx('info')}>
                        <h2 className={cx('name')}>Phuong</h2>
                        <p>thanhphuong</p>
                        <button className={cx('btn')}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                            <span>Edit proflie</span>
                        </button>
                    </div>

                    <div className={cx('share')}>
                        <FontAwesomeIcon icon={faShareFromSquare} />
                    </div>
                </div>

                <div className={cx('user-count')}>
                    <div className={cx('count')}>
                        <strong>107</strong>
                        <span>Following</span>
                    </div>
                    <div className={cx('count')}>
                        <strong>29</strong>
                        <span>Followers</span>
                    </div>
                    <div className={cx('count')}>
                        <strong>11</strong>
                        <span>like</span>
                    </div>
                </div>
                <p className={cx('title')}>tieu der nhung gif name</p>
            </div>
            <div className={cx('content')}>
                <WrapperProFile>
                    <ProFileItem title="Video"></ProFileItem>
                    <ProFileItem title="Favourites" icon={<FontAwesomeIcon icon={faLock} />}></ProFileItem>
                    <ProFileItem title="Liked" icon={<FontAwesomeIcon icon={faLock} />}></ProFileItem>
                </WrapperProFile>
            </div>
        </div>
    );
}

export default ProFile;
