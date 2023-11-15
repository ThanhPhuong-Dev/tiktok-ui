import classNames from 'classnames/bind';
import styles from './ProFileItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProFileItem({ title, onClick, icon }) {
    return (
        <Link className={cx('profile-item')} onClick={onClick}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </Link>
    );
}

export default ProFileItem;
