import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id="supportWrapper">
                <h4>Support Portal </h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className=' row p-5 mb-4'>
                <div className=' col-6 col-sm-12  p-5 textwrite'>
                    <h1  className='fs-3 '>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O'/><br></br>
                     <a href="">Track account opening</a>
                     <a href="">Track segment activation</a>
                     <a href="">Intraday margins</a>
                     <a href="">Kite user manual</a>
                </div>
                <div className=' col-6 p-5 col-sm-12 featuredtype'>
                <h3  className='fs-2'>Featured</h3>
                <ul className='fs-4'>
                    <li>
                <a href="">Current Takeovers and Delisting - January 2024</a>

                    </li>
                    <li>
                <a href="">Latest Intraday leverages - MIS & CO</a>

                    </li>
                </ul>
                </div>
            </div>
        </section>
     );
}

export default Hero;