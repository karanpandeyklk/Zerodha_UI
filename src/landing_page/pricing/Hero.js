import React from 'react';
function Hero() {
    return (
        <div className='container'>

            <div className='row p-5 mt-4  text-center ' >
                <h3>Charges</h3>
                <h3 className='text-muted fs-5'>List of all charges and taxes</h3>
            </div>
            <div className='row p-5  text-center' >
                <div className='col-md-4 col-sm-12 p-5'>
                    <img src='media/images/pricingEquity.svg'/>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investements(NSE,BSE), <br></br>
                    are absolutely free - &#8377; 0 brokerage.
                    </p>
                </div>
                 <div className='col-md-4 col-sm-12 p-5'>
                    <img src='media/images/intradayTrades.svg'/>
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'>
                        Flat Rs.20 or 0.03% (Whichever is lower) <br>
                        </br> per executed order on intraday trades <br></br>
                        across equity, currency, and comodity trades.
                    </p>
                </div> 
                <div className='col-md-4 col-sm-12 p-5'>
                    <img src='media/images/pricingEquity.svg'/>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;