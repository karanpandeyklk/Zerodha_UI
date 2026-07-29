import React from 'react';
function RightSection(
    {
        imageURL,productName,productDescription
    }
) {
    return ( 
        <div className='container mt-4'style={{marginRight:"100px"}}>
            <div className='row '>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <diV>
                    <a href="#" >Learn More</a>
                    </diV>
                    
                </div>
                <div className='col-6'>
                    <img src={imageURL} style={{height:"551px",width:"421px"}}/>
                </div>
            </div>
         </div>
     );
}

export default RightSection;