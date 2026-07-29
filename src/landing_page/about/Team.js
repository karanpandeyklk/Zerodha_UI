import React from 'react';
function Team() {
    return (
        <div className='container'>
            <div className='row p-5  border-top'>
                <h1 className=' text-center' >
                    People
                </h1>
            </div>
            <div className='row p-5  fs-6' style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
                <div className='col-lg-6 col-md-6 col-sm-12 p-5 text-center '>
                    <img src="/media/images/Karanpic2.jpeg" 
     style={{ borderRadius:"100%", height:"300px", width:"300px" }} 
/>
                    <h4 className='mt-4'>Karan pandey</h4>
                    <h6>MERN Developer & Project Creator</h6>
                </div>
                <div className='col-md-6 col-sm-12 p-5'>
                    
                        <p>Karan is a Computer Science student and aspiring Full-Stack Developer with an interest in building modern, user-friendly web applications. He created this Zerodha-inspired platform as a learning project to gain practical experience in React, Node.js, Express.js, MongoDB, and responsive web design.</p>

                        <p>Through this project, he explored how an online stock trading platform works and implemented features such as a responsive user interface, product pages, dashboards, and trading-related components.</p>

                        <p>He enjoys solving coding problems, building real-world projects, and continuously learning new technologies.</p>

                        Connect on <a href='https://github.com/karanpandeyklk' style={{textDecoration:"none"}}>GitHub </a>/ <a href='https://www.linkedin.com/in/karanpandey2777/' style={{textDecoration:"none"}}>Linkedin </a>

                </div>
            </div>
        </div>
    );
}

export default Team;