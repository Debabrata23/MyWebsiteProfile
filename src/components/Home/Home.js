import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import pdf from '../../pdfs/Debabrata_Saha_Resume_2.pdf';
import TopNavigation from '../TopNavigation';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import { useEffect,useState } from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkExperience from '../WorkExperience/WorkExperience';
import Certifications from '../Certifications/Certifications';
import { useContext } from 'react';
import userCOntext from '../TopNavigation'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import  ScrollAnimation  from 'react-animate-on-scroll';
import Hamburger from '../Hamburger';

const Home = () => {
  
  const[offsetvalue,setOffsetCert]=useState();
    const redirectLink=()=>
    {
      window.open('https://www.linkedin.com/in/debabrata-saha-9a6112a2')
    }
    const clickdownload=()=>
    {
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
    const clickCert=(props)=>
    {
      setOffsetCert(props)
    }
    const clickHome=(props)=>
    {

    }
    const clickWork=(props)=>
    {

    }
  return (
    <Container className="mainContainer">
    <BrowserView><TopNavigation/></BrowserView>
   <MobileView><Hamburger/></MobileView>
    
    <div className='navigateHome'>
   
    <Row className='maininfo'>
    <Col lg={true} className='imgprofile'>
      
    <div class="myimage"><img src={require('../../images/Deb.jpg')} alt="#"/></div>
 </Col>
      <Col lg={true} className="descriptionHome">
         <Row><span className='headerTxt'>Debabrata Saha</span></Row>
         <Row><strong><span className='abtmetxt'>About me</span></strong></Row>
         <Row><div className='descriptionHeader'>A Microsoft Professional with 6.4 years of experience in Microsoft Technology.Worked in SharePoint 2013 and SharePoint Online.Involved in end to end development of  portal using SPFX and React.</div></Row>
         <Row><BrowserView><Button className="downResume" onClick={()=>clickdownload()}variant="outline-info">Download CV</Button></BrowserView><MobileView><Button className="downResumeMobile" onClick={()=>clickdownload()}variant="outline-info">Download CV</Button></MobileView></Row>
         <Row><Col lg={true}>
         <Row><strong><span className='abtmetxt'>Contact me</span></strong></Row>
         <Row><span className='abtmeinfo'><PhoneInTalkRoundedIcon/> :9874345299</span></Row>
         <Row><span className='abtmeinfo'><MailOutlineRoundedIcon/><a href = "mailto: debabrata18992@gmail.com"> :debabrata18992@gmail.com</a></span></Row>
         <Row><span className='abtmeinfo'><LinkedInIcon color='blue' onClick={()=>redirectLink()}/> : LinkedIn</span></Row>
      
         </Col></Row>
      </Col>
    
      
      
     
    </Row>
   
    </div>
    <Certifications clickCert={clickCert}/>
    <WorkExperience/>
    
    </Container>
  )
}

export default Home
