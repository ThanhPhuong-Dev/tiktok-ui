import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './header.module.scss';
import images from '~/assets/images/images';
import { Wrapper as PopperWrapper } from '~/components/Popper/popper';
import AccountItem from '~/components/AccountItem/accountItem';
import Button from '~/components/Button/button';

const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('header__logo')}>
          <img src={images.logo} alt="Tiktok"></img>
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>

        <div className={cx('action')}>
          <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button primary>Log In</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
