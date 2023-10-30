import MyButton from '~/components/Button/button';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data ,onClick}) {
  return (
    <MyButton className={cx('more-item')} leftIcon={data.icon} onClick={onClick}>
      {data.title}
    </MyButton>
  );
}

export default MenuItem;
