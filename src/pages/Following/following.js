import classNames from 'classnames/bind';
import styles from './following.module.scss';
import * as VideoServices from '~/Services/VideoServices';
import { useEffect, useState } from 'react';
import WrapperContainer from '~/components/DesginContainer/WrapperContainer';

const cx = classNames.bind(styles);

function Following() {
    const VIDEO_INT = Math.floor(Math.random() * 38);
    const [videoFollow, setVideoFollow] = useState([]);
    const [moreFollows, setmoreFollows] = useState(VIDEO_INT);
    console.log(moreFollows);
    const handleMoreFollows = () => setmoreFollows(moreFollows + 1);
    useEffect(() => {
        VideoServices.videoAPI({ type: 'for-you', page: moreFollows })
            .then((data) => setVideoFollow((prev) => [...prev, ...data]))
            .catch((error) => console.log(error));
    }, [moreFollows]);

    return <WrapperContainer data={videoFollow} onShowVideo={handleMoreFollows}></WrapperContainer>;
}

export default Following;
