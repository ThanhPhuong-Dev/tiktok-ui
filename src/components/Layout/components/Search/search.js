import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HandlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchService from '~/api-service/searchService';
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
        if (!debounce.trim()) {
            return setSearchResult([]);
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.searchAPi(debounce);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHide = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValuee = e.target.value;
        if (!searchValuee.startsWith(' ')) {
            setSearchValue(e.target.value);
        }

        // setShowResult(true);
    };

    return (
        <div>
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
                        onChange={handleChange}
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
        </div>
    );
}

export default Search;
