import React from 'react';
function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h1 className='fs-2 ' >
                    To create a ticket, select a relevant topic
                </h1>

                <div className='col-4 p-5 mt-5  mb-5'>
                    <h4 className='' >
                        <i className='fa fa-plus-circle' aria-hidden="true"></i> Account Opening
                    </h4>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Online Account  Opening</a> <br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>offline Account Opening</a><br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Company, Partnership and HUF Account</a> <br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Opening</a><br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>NRI Account Opening</a><br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Charges at Zerodha</a><br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Zerodha IDFC First Bank 3-in-1 Account</a><br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Getting Started</a><br></br>
                </div>

                <div className='col-4 p-5 mt-5  mb-5'>
                    <h4 className='' >
                        <i class="fa-regular fa-circle-user"></i> Your Zerodha Account
                    </h4>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Login Credentials</a> <br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Account Modification and Segment Addition</a><br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Your profile</a> <br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Tranfer and Conversion of shares</a><br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>DP ID and bank details</a><br></br>
                    
                </div>

                <div className='col-4 p-5 mt-5  mb-5'>
                    <h4 className='' >
                        <i class="fa-solid fa-arrow-trend-up"></i> Your Zerodha Account
                    </h4>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Margin/leverage , product and Order types</a> <br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite Web and Mobile</a><br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Trading FAQS</a> <br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Corporate Actions</a><br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Sentinel</a><br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite API</a><br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Pi and other platforms</a><br></br>
                    <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>GTT</a><br></br>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;