import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Language({ title, onBack }) {
  return (
    <header className={cx('header')}>
      <FontAwesomeIcon icon={faChevronLeft} className={cx('arrow')} onClick={onBack} />
      <h4 className={cx('title')}>{title}</h4>
    </header>
  );
}

export default Language;
