import ProTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Images from '../Image/image';

const cx = classNames.bind(styles);
function AccountItem({ user }) {
    return (
        <Link to={`/@${user.nickname}`} className={cx('wrapper')}>
            <Images className={cx('avatar')} src={user.avatar} alt={user.last_name}></Images>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{user.full_name}</span>
                    {!!user.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck} />}
                </p>
                <p className={cx('username')}>{user.nickname}</p>
            </div>
        </Link>
    );
}

AccountItem.proTypes = {
    user: ProTypes.object.isRequired,
};

export default AccountItem;
