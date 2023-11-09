import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './SuggestedAcounts.module.scss';
import SuggestItem from './SuggestItem/SuggestItem';

const cx = classNames.bind(styles);
function SuggestedAcounts({ label, data = [], onSeeAll }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account) => (
                <SuggestItem key={account.id} data={account}></SuggestItem>
            ))}
            <p className={cx('see-more')} onClick={onSeeAll}>
                See More
            </p>
        </div>
    );
}

SuggestedAcounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAcounts;
