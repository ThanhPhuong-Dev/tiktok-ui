import proTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './popper.module.scss';
const cx = classNames.bind(styles);

function Wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

Wrapper.proTypes = {
    children: proTypes.node.isRequired,
};
export default Wrapper;
