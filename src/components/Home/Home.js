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
const Home = () => {
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
  return (
    <Container className="mainContainer">
    <TopNavigation/>
    <Row className='maininfo'>
      <Col xs={6} >
         <Row><span className='headerTxt'>Debabrata Saha</span></Row>
         <Row><strong><span className='abtmetxt'>About me</span></strong></Row>
         <Row><div className='descriptionHeader'>A Microsoft Professional with 6.4 years of experience in Microsoft Technology.Worked in SharePoint 2013 and SharePoint Online.Involved in ened to end development of E-Commerce portal using SPFX and React.Also involved in client requirement gathering and managing a team.Developing websites using PowerApps and automate various process using MS Flows and other Dynamic365 technology.Have good knowledge of Azure DevOpps and Agile methodology and Git</div></Row>
         <Row><Button className="downResume" onClick={()=>clickdownload()}variant="outline-info">Download CV</Button></Row>
         <Row><Col></Col><Col>
         <Row><strong><span className='abtmetxt'>Contact me</span></strong></Row>
         <Row><span className='abtmeinfo'><PhoneInTalkRoundedIcon/> :9874345299</span></Row>
         <Row><span className='abtmeinfo'><MailOutlineRoundedIcon/><a href = "mailto: debabrata18992@gmail.com"> :debabrata18992@gmail.com</a></span></Row>
         <Row><span className='abtmeinfo'><LinkedInIcon color='blue' onClick={()=>redirectLink()}/> : LinkedIn</span></Row>

         </Col></Row>
      </Col>
      <Col xs={6}>
         <div class="myimage"><img src={require('../../images/Deb.jpg')} alt="#"/></div>
      </Col>
    </Row>
    </Container>
  )
}

export default Home
