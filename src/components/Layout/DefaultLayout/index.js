import classNames from 'classnames/bind';
import styles from './defaultLaout.module.scss'

import Header from '~/components/Layout/components/Header/header.js';
import Sidebar from './Sidebar/Sidebar';

const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header></Header>
      <div className={cx("container")}>
        <Sidebar></Sidebar>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
