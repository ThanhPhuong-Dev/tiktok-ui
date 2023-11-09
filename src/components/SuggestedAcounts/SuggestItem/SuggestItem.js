import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper/popper';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SuggestItem.module.scss';
import Images from '~/components/Image/image';
import AccountPreview from '../AccountPreview';

const cx = classNames.bind(styles);

function SuggestItem({ data }) {
    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview data={data}></AccountPreview>
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <HeadlessTippy offset={[-30, 10]} interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('wrapper')}>
                    <Images className={cx('avatar')} src={data.avatar} alt={data.first_name}></Images>
                    <div className={cx('info')}>
                        <p className={cx('name')}>
                            <span>{data.nickname}</span>
                            {/* <span className={cx('icon-check')}>{<IconCheck></IconCheck>}</span> */}
                            {!!data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck} />}
                        </p>
                        <p className={cx('user-name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default SuggestItem;
