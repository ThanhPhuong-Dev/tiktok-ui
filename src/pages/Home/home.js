import classNames from 'classnames/bind';
import styles from './home.module.scss';
import * as VideoServices from '~/Services/VideoServices';
import { useEffect, useState } from 'react';
import WrapperContainer from '../../components/DesginContainer/WrapperContainer';

const cx = classNames.bind(styles);

function Home() {
    const INT_PAGE = Math.floor(Math.random() * 38);
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(INT_PAGE);

    useEffect(() => {
        VideoServices.videoAPI({ type: 'for-you', page: page })
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
            <WrapperContainer data={videos} onShowVideo={handleShowVideo}></WrapperContainer>
        </div>
    );
}

export default Home;
