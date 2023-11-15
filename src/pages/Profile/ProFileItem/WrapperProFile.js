import classNames from 'classnames/bind';
import styles from './ProFileItem.module.scss';

const cx = classNames.bind(styles);

function WrapperProFile({ children }) {
    return <nav className={cx('wrapper')}>{children}</nav>;
}

export default WrapperProFile;
