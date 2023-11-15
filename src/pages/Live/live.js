import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

import classNames from 'classnames/bind';
import styles from './live.module.scss';

const cx = classNames.bind(styles);
function App() {
    const [isRecording, setIsRecording] = useState(false);
    const webcamRef = useRef(null);

    const startRecording = () => {
        // Thực hiện logic bắt đầu quay video
        console.log('Bắt đầu quay video');
        setIsRecording(true);
    };

    const stopRecording = () => {
        // Thực hiện logic dừng quay video
        console.log('Dừng quay video');
        setIsRecording(false);
    };

    return (
        <div className={cx('App')}>
            <div className={cx('title')}>
                <button>Dancing</button>
                <button>Sport</button>
                <button>Comedy</button>
                <button>Shows</button>
                <button>Games</button>
                <button>ThanhPhuong</button>
                <button>Arsenal</button>
            </div>
            <div className={cx('webcam-container')}>
                <Webcam
                    audio={false}
                    mirrored={true}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className={cx('webcam')}
                />
            </div>
            <div className={cx('controls')}>
                <button onClick={isRecording ? stopRecording : startRecording}>{isRecording ? 'Dừng' : 'Quay'}</button>
            </div>
        </div>
    );
}

export default App;
