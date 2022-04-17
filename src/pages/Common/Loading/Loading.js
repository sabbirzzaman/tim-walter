import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading-container'>
            <InfinitySpin color="#cba557" />
        </div>
    );
};

export default Loading;