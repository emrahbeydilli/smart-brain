import React, { Children } from 'react';

const Rank = ({name,entries}) => {
    // console.log(name,entries);
    return ( 
        <div>
            <div className='f3'>
            {`${name}, your current rank is ${entries}`}
            </div>
        </div>
     );
}
 
export default Rank;