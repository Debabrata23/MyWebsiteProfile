import React from 'react'
import * as constantfunction from '../constant/constant'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import pdf from '../../pdfs/Debabrata_Saha_Resume_2.pdf';
import { bounceInDown,fadeIn } from 'react-animations';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import Radium, {StyleRoot} from 'radium';
import TopNavigation from '../TopNavigation';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import { useEffect, useState } from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkExperience from '../WorkExperience/WorkExperience';
import Certifications from '../Certifications/Certifications';

import { useContext } from 'react';
import userCOntext from '../TopNavigation'

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import ScrollAnimation from 'react-animate-on-scroll';
import Hamburger from '../Hamburger';
const portfoliojson =require( '../../portfolio.json');




const Home = () => {

  const [offsetvalue, setOffsetCert] = useState();
  const redirectLink = () => {
    window.open('https://www.linkedin.com/in/debabrata-saha-9a6112a2')
  }
  const clickdownload = () => {
    fetch(pdf).then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Debabrata_Resume.pdf';
        alink.click();
      })
    })
  }
  const clickCert = (props) => {
    setOffsetCert(props)
  }
  const clickHome = (props) => {

  }
  const clickWork = (props) => {

  }
  const styles = {
    bounce: {
      animation: 'x 6s',
      animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    },
    fade:{
      animation:'x 6s',
      animationName:Radium.keyframes(fadeIn,'fadeIn')
    }
  }
  return (
    <Container className="mainContainer">
    <BrowserView><TopNavigation /></BrowserView>
      <MobileView><Hamburger /></MobileView>
      <BrowserView>
      <div className='navigateHome'>
        <Row className='maininfo'>
          <Col lg={true} className='imgprofile'>
          <StyleRoot><div class="myimage" style={styles.bounce}>
          <img src={constantfunction.getimagesoure(portfoliojson.basicInfo.profileimg)} alt="#" /></div></StyleRoot>
            
          </Col>
          <Col lg={true} className="descriptionHome">
          <div className='Infodiv'>
          <Row><StyleRoot><span className={`headerTxt`}>{portfoliojson.basicInfo.candidatename}</span></StyleRoot>
          </Row>
            <Row><strong><span className='abtmetxt'>{portfoliojson.basicInfo.titleprofile}</span></strong></Row>
            <Row><div className='descriptionHeader'>{portfoliojson.basicInfo.description}</div></Row>
            <Row><BrowserView><Button className="downResume" onClick={() => clickdownload()} variant="outline-info"><DownloadRoundedIcon />Download CV</Button></BrowserView></Row>
            <Row><Col lg={true}>
              <Row><strong><span className='abtmetxt'>{portfoliojson.basicInfo.titleContact}</span></strong></Row>
              <Row><span className='abtmeinfo'><PhoneInTalkRoundedIcon /> {portfoliojson.basicInfo.phone}</span></Row>
              <Row><span className='abtmeinfo'><MailOutlineRoundedIcon /><a href={`mailto:${portfoliojson.basicInfo.mail}`}> : {portfoliojson.basicInfo.mail}</a></span></Row>
              <Row><span className='abtmeinfo'><LinkedInIcon color='blue' onClick={() => redirectLink()} /> {portfoliojson.basicInfo.linkedin}</span></Row>

            </Col></Row>
            </div>
          </Col>

        </Row>

      </div>
    </BrowserView>
      <MobileView> 
      <div className='navigateHomeMobile'>
        <Row className='maininfo'>
          <Col lg={true} className='imgprofile'>

          <StyleRoot><div class="myimageMobile" style={styles.bounce}><img src={constantfunction.getimagesoure(portfoliojson.basicInfo.profileimg)} alt="#" /></div></StyleRoot>
          </Col>
        </Row>
        <Row className='maininfo'>
        <Col lg={true} className="descriptionHome">
        <div className='InfodivMob'>
        <StyleRoot><Row className="profilediv"> <span className='headerTxtMobile' style={styles.fade}>{portfoliojson.basicInfo.candidatename}</span></Row></StyleRoot>
          <Row className="profilediv"><strong><span className='abtmetxt'>{portfoliojson.basicInfo.titleprofile}</span></strong></Row>
          <Row className="profilediv"><div className='descriptionHeaderMobile'>{portfoliojson.basicInfo.description}</div></Row>
          <Row className="profilediv"><MobileView><Button className="downResumeMobile" onClick={() => clickdownload()} variant="outline-info"><DownloadRoundedIcon/>Download CV</Button></MobileView></Row>
          <Row className="profilediv"><Col lg={true}>
            <Row><strong><span className='abtmetxt'>{portfoliojson.basicInfo.titleContact}</span></strong></Row>
            <Row><span className='abtmeinfoMob'><PhoneInTalkRoundedIcon /> {portfoliojson.basicInfo.phone}</span></Row>
            <Row><span className='abtmeinfoMob'><MailOutlineRoundedIcon /><a href={`mailto:${portfoliojson.basicInfo.mail}`}> : {portfoliojson.basicInfo.mail}</a></span></Row>
            <Row><span className='abtmeinfoMob'><LinkedInIcon color='blue' onClick={() => redirectLink()} /> : {portfoliojson.basicInfo.linkedin}</span></Row>
           
          </Col></Row>
          </div>
        </Col></Row>

      </div>
      </MobileView>

      <Certifications data={portfoliojson} />
      <WorkExperience data={portfoliojson.experience}/>

    </Container>
  )
}

export default Home
