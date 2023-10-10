import classNames from "classnames/bind";
import styles from './sidebar.module.scss'

const cx =classNames.bind(styles)

function Sidebar() {
  return <h2 className={cx("wrapper")}>Sidebar Page</h2>;
}

export default Sidebar;
