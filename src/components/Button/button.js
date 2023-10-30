import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function MyButton({
  to,
  href,
  children,
  onClick,
  disabled = false,
  primary = false,
  text = false,
  rounded = false,
  outline = false,
  small = false,
  lagre = false,
  leftIcon,
  rightIcon,
  className,
  ...passpros
}) {
  let Comp = 'button';

  const pros = {
    onClick,
    ...passpros,
  };

  if (disabled) {
    Object.keys(pros).forEach((prokey) => {
      if (prokey.startsWith('on') && typeof pros[prokey] === 'function') {
        delete pros[prokey];
      }
    });
  }
  if (to) {
    pros.to = to;
    Comp = Link;
  } else if (href) {
    pros.href = href;
    Comp = 'a';
  }
  
  const wrapper = cx('wrapper', {
    [className] :className,
    primary,
    outline,
    small,
    lagre,
    text,
    disabled,
    rounded,
  });
  return (
    <Comp className={wrapper} {...pros}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default MyButton;
