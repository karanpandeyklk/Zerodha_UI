import React from 'react';
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
         <div className='container mt-5'>
            <div className='row '>
                <div className='col-md-6 col-sm-12 '>
                    <img src={imageURL} style={{height:"551px",width:"421px"}}/>
                </div>
                <div className='col-md-6 p-5 mt-5 col-sm-12'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <diV>
                        <a href={tryDemo}>Try Demo</a>
                    <a href={learnMore} >Learn More</a>
                    </diV>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src="/media/images/googlePlayBadge.svg"/></a>
                    <a href={appStore}><img src="/media/images/appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
                    </div>
                    
                </div>
            </div>
         </div>
     );
}

export default LeftSection;