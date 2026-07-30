import React from 'react';
function Brokerage() {
    return (
        <div className='container'>

            <div className='row p-5  text-center border-top' >
                <div className='col-lg-8 col-sm-12 col-md-8'>
                    <a href="" style={{ textDecoration: "none" }}><h3 className='fs-5'>Brokerage Calculator</h3></a>

                    <ul style={{textAlign:"left",lineHeight:"2.3",fontSize:"14px"}} className='text-muted'>
                        <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>

                        <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                        <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>

                        <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.
                        Options - ₹0.01 per crore + GST traded value (premium value).
                        Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <a href="" style={{ textDecoration: "none" }}><h3 className='fs-5'>List of Charges</h3></a>
                </div>

            </div>
        </div>
    );
}

export default Brokerage;