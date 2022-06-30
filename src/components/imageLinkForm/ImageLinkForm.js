import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return ( 
        <div>
            <p className='f3'>
                {'Copy and Paste URL of a picture that including a person and it will draw a face box. Give it a try!'}
            </p>
            <div className='w-70 center flex'>
                <input className='f4 pa2 w-70 center' type="text" onChange={onInputChange}/>
                <button className='w-30 f4 white bg-green pointer' onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
     );
}
 
export default ImageLinkForm;