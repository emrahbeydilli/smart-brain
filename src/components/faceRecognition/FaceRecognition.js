import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='flex justify-center mt3'>
            <div className='absolute'>
                <img id='inputimage' src={imageUrl} alt="" width='500px' height='auto'/>
                <div className="bounding-box" style={{inset: `${box.topRow}% ${box.rightCol}% ${box.bottomRow}% ${box.leftCol}%`}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;