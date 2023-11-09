import classNames from 'classnames/bind';
import styles from './home.module.scss';
import * as VideoServices from '~/Services/VideoServices';
import { useEffect, useState } from 'react';
import WrapperHome from './DesginHome/Wrapperhome';

const cx = classNames.bind(styles);

const INT_PAGE = Math.floor(Math.random() * 38);

function Home() {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(INT_PAGE);

    useEffect(() => {
        VideoServices.videoAPI({ type: 'for-you', page: INT_PAGE })
            .then((data) => setVideos((prev) => [...prev, ...data]))
            .catch((error) => console.log(error));
    }, [page]);

    const handleShowVideo = () => {
        if (page < 38) {
            setPage(page + 1);
        }
    };
    return (
        <div className={cx('container')}>
            <WrapperHome data={videos} onShowVideo={handleShowVideo}></WrapperHome>
        </div>
    );
}

export default Home;
