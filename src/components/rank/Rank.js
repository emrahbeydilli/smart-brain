import React, { Children } from 'react';

const Rank = ({name,entries}) => {
    // console.log(name,entries);
    return ( 
        <div>
            <div className='f3'>
            {`${name}, your face detecetion count:`} <strong className='f2'>{`${entries}`}</strong>
            </div>
        </div>
     );
}
 
export default Rank;