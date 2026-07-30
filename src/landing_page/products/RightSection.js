import React from 'react';
function RightSection(
    {
        imageURL,productName,productDescription
    }
) {
    return ( 
        <div className='container mt-4'>
            <div className='row '>
                <div className='col-lg-6 col-sm-12 col-md-6 p-4 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <diV>
                    <a href="#" >Learn More</a>
                    </diV>
                    
                </div>
                <div className='col-lg-6 col-sm-12 col-md-6'>
                    <img src={imageURL} style={{height:"551px",width:"421px",maxWidth:"100%"}}/>
                </div>
            </div>
         </div>
     );
}

export default RightSection;