import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper/popper';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import Images from '~/components/Image/image';
import AccountPreview from '../AccountPreview';

const cx = classNames.bind(styles);

function AcountItem() {
    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview></AccountPreview>
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <HeadlessTippy offset={[-30,10]} interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('wrapper')}>
                    <Images
                        className={cx('avatar')}
                        src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/31064309_258390688037005_2079259999468519424_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_ohc=2em1TsbINSUAX_uqXDS&_nc_ht=scontent.fdad1-4.fna&_nc_e2o=s&oh=00_AfCII_xkGwo9uYlkNuLlugTmnWvO3AVgO-NluZ9Zrhwf7Q&oe=65596950"
                        alt="phuong"
                    ></Images>
                    <div className={cx('info')}>
                        <p className={cx('name')}>
                            <span>Thanh Phương</span>
                            {/* <span className={cx('icon-check')}>{<IconCheck></IconCheck>}</span> */}
                            <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck} />
                        </p>
                        <p className={cx('user-name')}>Hồ Văn Thanh Phương</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default AcountItem;
