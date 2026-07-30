import React from 'react';
function Signup() {
    return ( 
        <div className='container '>
            <h3 className='text-center mt-5 fs-2'>Sign <b id='Up'>Up</b></h3>
            <div className='row mt-5   'style={{justifyContent:"center"}}>
                <div className='col-md-5 col-sm-10 col-lg-5 p-5 atsign'>
            <form> 

<div class="mb-3 fs-4">
    <label for="username" class="form-label">Username</label>
    <input type="text" class="form-control fs-5" id="username" aria-describedby="username"/>
  </div>

  <div class="mb-3 fs-4">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input required type="email" class="form-control fs-5" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text fs-5 text-muted">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3 fs-4">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input required type="password" class="form-control fs-5" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check fs-4">
    <input type="checkbox"  class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
        </div>
        </div>
     );
}

export default Signup;