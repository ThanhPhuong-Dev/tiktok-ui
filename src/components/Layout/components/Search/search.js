import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HandlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper/popper';
import AccountItem from '~/components/AccountItem/accountItem';
import { SearchIcon } from '~/components/Icon/icon';
import { UseDebounce } from '~/hooks';
import styles from './search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounce = UseDebounce(searchValue, 500);

    useEffect(() => {
        if (!searchValue.trim()) {
            return setSearchResult([]);
        }
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(setLoading(true));
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHide = () => {
        setShowResult(false);
    };
    console.log(searchValue);
    return (
        <HandlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            placement="bottom-end"
            onClickOutside={handleHide}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((data) => (
                            <AccountItem key={data.id} user={data}></AccountItem>
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('header__search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search account and videos"
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        // setShowResult(true);
                    }}
                    onFocus={() => setShowResult(true)}
                ></input>
                {!!searchValue && !loading && (
                    <button className={cx('search__clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {!!loading && <FontAwesomeIcon icon={faSpinner} className={cx('search__loading')} />}

                <button className={cx('search__btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    {/* <SearchIcon></SearchIcon> */}
                </button>
            </div>
        </HandlessTippy>
    );
}

export default Search;
