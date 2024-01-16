import React from 'react'
import Cards from '../cards/cards ';
import Form from '../form/form';
import styles from '../../styles/dashboard.module.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
function dashboard() {

  const textItems = ['Most EASY PREMIUM WEB DESIGN PROCESS', 'RESEARCH & DEVELOPMENT BEFORE STARTING', 'MAKING A QUALITY DESIGN IDEAS', 'MAKING A QUALITY DESIGN IDEAS', 'MAKING A QUALITY DESIGN IDEAS'];

  return (
    <div style={{ backgroundColor: "#0a0a0a" }}>
      <div style={{ marginTop: '60px', color: 'white' }}>
        <div>
          {/* ////////////////////second////// */}
          <div style={{ display: 'flex' }}>
            <div>
              <h1 style={{ marginTop: '60px',fontWeight:'bold' }}>Transforming Ideas
                <br />
                Into
                <span style={{ color: 'yellow' }}> Powerful Solutions</span></h1>
              <p>FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC
                <br />
                DIGITAL MARKETING STRATEGIES.  PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.</p>
                <Box sx={{ display: 'flex' }}>
        <PhoneIcon sx={{ backgroundColor: '#ff6f00', height: '40px', width: '40px', borderRadius: '5px', marginTop: '20px' }} />
        <Typography size="small" sx={{ border: '2px', backgroundColor: '#212121', borderRadius: '5px', borderColor: 'white', marginTop: '20px', height: '40px', width: '200px', paddingTop: '5px', paddingLeft: '5px' }}>
          Get a Free Consultation
        </Typography>
      </Box>
              {/* <div class="col-4">
              <label for="inputuid" class="form-label ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Call</label>
                <input type="text" class="form-control" id="inputuid" placeholder='Get a Free Consultation' autoComplete='off' />
              </div> */}
            </div>
            <div>
              <img
                className={styles.carouselimage}
                src="/seo.png"
                alt=""
              />
            </div>
          </div>
          <hr />
          {/* ////////////////////second////// */}
          <div>
            <div style={{ display: 'flex' }}>
              <div>
                <h1>We provide the best web services</h1>
                <p>LOREM</p>
                <div>
                  <ul>
                    {textItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <img
                  className={styles.carouselimage}
                  src="/second.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <hr />
          {/* ////////////////////third////// */}
          <div>
            <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>Services We're Offering</h1>
            <div ><Cards /></div>
          </div>
          {/* ////////////////////last////// */}
          <div >
            <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '130px' }}>Contact Us</h1>
            <div style={{ display: 'flex', marginTop:'100px' }}>
              <div>
                <img
                  className={styles.fimage}
                  src="/formimage.png"
                  alt=""
                />
              </div>
              <div>
                <Form /> 
              </div>
            </div>
            <h6  style={{ textAlign: 'center' }}>Copyright 2021 Micro Technologies All Right Reserved</h6>
          </div>


        </div>
      </div>
    </div>
  )
}

export default dashboard