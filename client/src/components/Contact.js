import React from 'react';

export default function Contact() {
  return <>
    <div className="contact_info">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="contact_info_item d-flex justify-content-start">
              <div className="contact_info_content">
                <div className="contact_info_title">
                  Phone
                </div>
                <div className="contact_info_title">
                  123456789+
                </div>



              </div>
            </div>

            <div className="contact_info_item d-flex justify-content-start">
              <div className="contact_info_content">
                <div className="contact_info_title">
                  Email
                </div>
                <div className="contact_info_title">
                  Kulkarnir27999@gmail.com
                </div>



              </div>
            </div>

            <div className="contact_info_item d-flex justify-content-start">
              <div className="contact_info_content">
                <div className="contact_info_title">
                  Address
                </div>
                <div className="contact_info_title">
                  1abcabcabc
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/*Form */}

    <div className="contact_form">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="contact_form_container py-5">
              <div className="contact_form_title">
                Get in Touch
              </div>

              <form id="contact_form">
                <div className="contact_form_name d-flex">
                  <input type="text" name="" id="contact_form_name" className='contact_form_name' placeholder='Your Name' required="true" />
                </div>
              </form>

              <form id="contact_form">
                <div className="contact_form_name d-flex">
                  <input type="email" name="" id="contact_form_email" className='contact_form_name' placeholder='Your Email' required="true" />
                </div>
              </form>

              <form id="contact_form">
                <div className="contact_form_name d-flex">
                  <input type="number" name="" id="contact_form_number" className='contact_form_name' placeholder='Your Number' required="true" />
                </div>
              </form>

            </div>

            <div className="contact_form_text">
              <textarea className='textfield' cols="30" rows="10"
                placeholder='Message' value="message"> </textarea>
            </div>

            <div className="contact_form_button">
              <button type='submit' className='button contact'>Send Message</button>
            </div>

          </div>
        </div>
      </div>
    </div>

  </>
}
