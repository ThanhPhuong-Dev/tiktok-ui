import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudArrowUp,
  faGear,
  faCoins,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import HandlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './header.module.scss';
import images from '~/assets/images/images';
import { Wrapper as PopperWrapper } from '~/components/Popper/popper';
import AccountItem from '~/components/AccountItem/accountItem';
import MyButton from '~/components/Button/button';
import Menu from '~/components/Popper/Menu/menu';
import MenuItem from '~/components/Popper/Menu/menuItem';
import { InBox, Message } from '~/components/Icon/icon';
import Images from '~/components/Image/image';

const cx = classNames.bind(styles);

const currentUser = true;
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

const userMenu = [
  {
    title: 'View Profile',
    icon: <FontAwesomeIcon icon={faUser} />,
    to: '/@phuong',
  },
  {
    title: 'Get Coins',
    icon: <FontAwesomeIcon icon={faCoins} />,
    to: '/coin',
  },
  {
    title: 'Settings',
    icon: <FontAwesomeIcon icon={faGear} />,
    to: '/settings',
  },

  ...MENU_ITEM,

  {
    title: 'LogOut',
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
    to: '/logout',
    separate: true,
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

        <HandlessTippy
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
            <div className={cx('search__clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
            <FontAwesomeIcon icon={faSpinner} className={cx('search__loading')} />

            <button className={cx('search__btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HandlessTippy>

        <div className={cx('action')}>
          {currentUser ? (
            <>
              {/* <Tippy content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                </button>
              </Tippy> */}
              <MyButton text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </MyButton>

              <Tippy content="Message" placement="bottom">
                <a href="/message" className={cx('action-btn')}>
                  <Message></Message>
                </a>
              </Tippy>

              <Tippy content="InBox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InBox></InBox>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <MyButton text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </MyButton>
              <MyButton primary onClick={() => alert('Dang nhap thanh cong')}>
                Log In
              </MyButton>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEM}>
            {currentUser ? (
              <div className={cx('user-avatar')}>
                <Images
                  className={cx('avatar')}
                  src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/31064309_258390688037005_2079259999468519424_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_ohc=2em1TsbINSUAX_uqXDS&_nc_ht=scontent.fdad1-4.fna&_nc_e2o=s&oh=00_AfCII_xkGwo9uYlkNuLlugTmnWvO3AVgO-NluZ9Zrhwf7Q&oe=65596950"
                  alt="Ho Van Thanhj Phuong"
                  fallback="https://lh3.googleusercontent.com/a/ACg8ocLe4mP_-W2IUnPFQcmaCaCdzdjqg3p-vuqmutNQrPRc=s360-c-no"
                ></Images>
              </div>
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
