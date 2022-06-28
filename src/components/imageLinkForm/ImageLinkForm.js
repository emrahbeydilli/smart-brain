import React from 'react';

const ImageLinkForm = () => {
    return ( 
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='w-70 center flex'>
                <input className='f4 pa2 w-70 center' type="text" />
                <button className='w-30 f4 white bg-green pointer'>Detect</button>
            </div>
        </div>
     );
}
 
export default ImageLinkForm;