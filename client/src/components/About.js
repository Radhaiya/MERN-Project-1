import React from 'react';

export default function About() {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src='' alt='pic' />
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>Radhe</h5>
                <h6>Web Dev</h6>
                <p className='profile mt-3 mb-5'>Ranking 1/10</p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className='nav-item'>
                    <a className='nav-link active' id='home-tab' data-toggle="tab" href='#home' role="tab">About</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link active' id='profile-tab' data-toggle="tab" href='#profile' role="tab">Timeline</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input type="submit" className='profile-edit-btn' name='btnADDmore' value="Edit Profile" />
            </div>

          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Link</p>
                <a href="https://www.youtube.com/">Youtube</a>
              </div>



            </div>
            <div className="col-md-8">
              <div className="tab-content profile tab" id='myTab'>
                <div className="tab-pane fade show active" role='tablepanel' id='profile'>
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>123456789</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Radhaiya</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Radhaiya</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Radhaiya</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Radhaiya</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </>
  )
}
