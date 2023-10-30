import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './header.module.scss';
import images from '~/assets/images/images';
import { Wrapper as PopperWrapper } from '~/components/Popper/popper';
import AccountItem from '~/components/AccountItem/accountItem';
import MyButton from '~/components/Button/button';
import Menu from '~/components/Popper/Menu/menu';

const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    title: 'Language',
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
        {
          code: 'ja',
          title: 'Japanese',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    title: 'Keyboard Shortcuts',
    icon: <FontAwesomeIcon icon={faKeyboard} />,
  },
];
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
          placement="bottom-end"
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
          <MyButton text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </MyButton>
          <MyButton primary onClick={() => alert('Dang nhap thanh cong')}>
            Log In
          </MyButton>

          <Menu items={MENU_ITEM}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
