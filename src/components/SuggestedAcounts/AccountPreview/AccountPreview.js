import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Images from '~/components/Image/image';
import MyButton from '~/components/Button/button';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Images
                    className={cx('avatar')}
                    src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/31064309_258390688037005_2079259999468519424_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_ohc=2em1TsbINSUAX_uqXDS&_nc_ht=scontent.fdad1-4.fna&_nc_e2o=s&oh=00_AfCII_xkGwo9uYlkNuLlugTmnWvO3AVgO-NluZ9Zrhwf7Q&oe=65596950"
                    alt="phuoing"
                ></Images>
                <MyButton outline className={cx('btn')}>
                    Follow
                </MyButton>
            </header>
            <div className={cx('info')}>
                <Link className={cx('nickname')} to="/@thanhphuong">
                    Thanh phuong
                </Link>
                <Link className={cx('title')} to="/@thanhphuong">
                    T1 Faker
                </Link>
            </div>
            <div className={cx('follow')}>
                <strong className={cx('value')}>1.9M </strong>
                <span className={cx('label')}>Followers   </span>
                <strong className={cx('value')}>  113.7M </strong>
                <span className={cx('label')}>Likes</span>
            </div>
            <p className={cx('clause')}>❤️Follow me❤️</p>
        </div>
    );
}

export default AccountPreview;
