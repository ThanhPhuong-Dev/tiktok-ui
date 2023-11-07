import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './SuggestedAcounts.module.scss';
import AccountItem from './AcountItem/AcountItem';

const cx = classNames.bind(styles);
function SuggestedAcounts({ label }) {
    
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <p className={cx('see-more')}>See More</p>
        </div>
    );
}

SuggestedAcounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAcounts;
