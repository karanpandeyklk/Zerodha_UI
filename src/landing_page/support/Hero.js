import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
          
            <div className=' row p-4 mb-4'>
                <div className='col-lg-2 col-md-2'></div>
                <div className=' col-lg-4 col-md-4 col-sm-12 p-3 textwrite'>
                    <h4 className='text-center mb-5'>Support Portal </h4>
                    <h5  className='fs-3 '>Search for an answer or browse help topics to create a ticket</h5>
                    <input placeholder='Eg. how do I activate F&O' style={{width:"100%"}}/><br></br>
                     <a href="">Track account opening</a>
                     <a href="">Track segment activation</a>
                     <a href="">Intraday margins</a>
                     <a href="">Kite user manual</a>
                </div>
                <div className=' col-lg-6 col-md-6 col-sm-12 p-3  '>
                    <h4 className='mb-5 text-center '><a href='' >Track Tickets</a></h4>
                <h3  className='fs-2 text-center'>Featured</h3>
                <ul className='fs-4 text-center mb-3 mt-5'>
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