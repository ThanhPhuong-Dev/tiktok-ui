import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper/popper';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import MenuItem from './menuItem';
import Language from './Language/header';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        ></MenuItem>
      );
    });
  };
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      offset={[12,8]}
      render={(attrs) => (
        <div className={cx('more-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Language
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              ></Language>
            )}
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory(history.splice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
