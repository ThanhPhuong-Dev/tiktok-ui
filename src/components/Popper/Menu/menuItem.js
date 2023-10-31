import MyButton from '~/components/Button/button';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data ,onClick}) {
  const classNames = cx('more-item',{
    separate :data.separate,
  })

  return (
    <MyButton className={classNames} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </MyButton>
  );
}

export default MenuItem;
