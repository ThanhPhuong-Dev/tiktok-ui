import classNames from 'classnames/bind';
import styles from './explore.module.scss';
// import ListVdieo from './ListVideo/ListVideo';
import WrapperListVideo from './WrapperListVideo/WrapperListVdieo';
import { useEffect, useRef, useState } from 'react';
import * as VideoService from '~/Services/VideoServices';

const cx = classNames.bind(styles);

function Explore() {
    const INT_VIDEOS = Math.floor(Math.random() * 38);
    const [videos, setVideos] = useState([]);
    const [loadingPage, setLoadingPage] = useState(INT_VIDEOS);
    const [heightScroll, setHeightScroll] = useState(0);
    const containerRef = useRef();
    // console.log(containerRef)
    const eleScroll = window.scrollY

    const handleScroll = () => {
        console.log('1')
        
        // setLoadingPage((prev) => prev + 1);
    };

    useEffect(() => {
        VideoService.videoAPI({ type: 'for-you', page: loadingPage })
            .then((data) => setVideos((prev) => [...prev, ...data]))
            .catch((error) => console.log(error));
    }, [loadingPage]);
    return (
        <div className={cx('container')} ref={containerRef} onScroll={handleScroll}>
            <div className={cx('title')}>
                <button>Dancing</button>
                <button>Sport</button>
                <button>Comedy</button>
                <button>Shows</button>
                <button>Games</button>
                <button>ThanhPhuong</button>
                <button>Arsenal</button>
            </div>

            <div className={cx('content')}>
                <WrapperListVideo data={videos}></WrapperListVideo>
            </div>
        </div>
    );
}

export default Explore;
