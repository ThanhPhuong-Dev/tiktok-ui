import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.scss';
import images from '~/assets/images/images';
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('header__logo')}>
          <img src={images.logo} alt="Tiktok"></img>
        </div>
        <div className={cx('header__search')}>
          <input placeholder="Search account and videos" spellCheck={false}></input>
          <button className={cx('search__clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon icon={faSpinner} className={cx('search__loading')} />
          <button className={cx('search__btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('header__action')}>
          <h2>Action</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
