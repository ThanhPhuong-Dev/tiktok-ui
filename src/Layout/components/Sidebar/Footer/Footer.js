import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import MyButton from '~/components/Button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function FooterSideBar() {
    return (
        <div className={cx('wrapper')}>
            <MyButton
                href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v2&utm_source=tiktok_webapp_main"
                className={cx('btn')}
            >
                <FontAwesomeIcon icon={faIgloo} className={cx('icon')}/>
                <span>Create Effects</span>
            </MyButton>
            <ul className={cx('info')}>
                <li className={cx('info-item')}>About</li>
                <li className={cx('info-item')}>Newsroom</li>
                <li className={cx('info-item')}>Contact</li>
                <li className={cx('info-item')}>Careers</li>
            </ul>
            <ul className={cx('info')}>
                <li className={cx('info-item')}>TikTok for Good</li>
                <li className={cx('info-item')}>Advertise</li>
                <li className={cx('info-item')}>Developers</li>
                <li className={cx('info-item')}>Transparency</li>
                <li className={cx('info-item')}> TikTok Embeds</li>
            </ul>
            <ul className={cx('info')}>
                <li className={cx('info-item')}>Help</li>
                <li className={cx('info-item')}>Safety</li>
                <li className={cx('info-item')}>Terms</li>
                <li className={cx('info-item')}>Privacy</li>
                <li className={cx('info-item')}> Safety Embeds</li>
            </ul>
            <span className={cx('title')}>© 2023 TikTok</span>
        </div>
    );
}

export default FooterSideBar;
