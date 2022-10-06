import React from 'react'
import Container from 'react-bootstrap/Container';
import TopNavigation from '../TopNavigation';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import PL900 from '../../pdfs/PL900.pdf';
import PL400 from '../../pdfs/PL400.pdf'
import  ScrollAnimation  from 'react-animate-on-scroll';
const Certifications = (props) => {
  
  const clickDownloadCert=()=>
  {
   
      fetch(PL900).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'PL900.pdf';
            alink.click();
        })
    })
    
  }
  const clickDownloadCert400=()=>
  {
    
      fetch(PL400).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'PL400.pdf';
            alink.click();
        })
    })
    }
  
  return (
    // <Container className="mainContainer">
    // <TopNavigation></TopNavigation>
    <div className="navigatecertificate">
    <ScrollAnimation animateIn='animate__bounceInRight'><Row className="pageheader"><span className="pageheaderspan">CERTIFICATION & SKILLS</span></Row></ScrollAnimation>
   
    <Row className="certificatediv">
      <Col xs={7} className="maindivSkill">
      <ScrollAnimation animateIn='animate__bounceInRight'>
        <Row className="divSkill">
            <Row className="skillHeader">Skills</Row>
           <Row>
           <Col xs={6}><div className='imageskill'><img  className="imgdata" alt="#" src={require('../../images/ms-share-point.png')}/>  <ProgressBar now={80} variant="info" animated label={`${80}%`}/></div></Col>
           <Col xs={6}><div className='imageskill'><img  className="imgdata" alt="#" src={require('../../images/microsoft-sharepoint-2019.png')}/> <ProgressBar now={70} variant="info" animated label={`${70}%`}/></div></Col>
           </Row>
           <Row>
           <Col xs={6}><div className='imageskill'><img  className="imgdata" alt="#" src={require('../../images/JS.png')}/>  <ProgressBar now={80} variant="info" animated label={`${80}%`}/></div></Col>
           <Col xs={6}><div className='imageskill'><img  className="imgdata" alt="#" src={require('../../images/react-native.png')}/> <ProgressBar variant="info" animated now={80} label={`${80}%`}/></div></Col>
           </Row>
           <Row>
           <Col xs={6}><div className='imageskill'><img  className="imgdata" alt="#" src={require('../../images/redux.png')}/>  <ProgressBar variant="info" animated now={60} label={`${60}%`}/></div></Col>
           <Col xs={6}><div className='imageskill'><img  className="imgdata" alt="#" src={require('../../images/jquery.png')}/> <ProgressBar variant="info" animated now={70} label={`${70}%`}/></div></Col>
           </Row>
           <Row>
           <Col xs={6}><div className='imageskill'><img  className="imgdata" alt="#" src={require('../../images/microsoft-power-apps-2020.png')}/>  <ProgressBar variant="info" animated now={85} label={`${85}%`}/></div></Col>
           <Col xs={6}><div className='imageskill'><img  className="imgdata" alt="#" src={require('../../images/microsoft-power-automate-2020.png')}/> <ProgressBar variant="info" animated now={80} label={`${80}%`}/></div></Col>
           </Row>
           <Row>
           <Col xs={6}><div className='imageskill'><img  className="imgdata" alt="#" src={require('../../images/api-settings.png')}/>  <ProgressBar variant="info" animated now={75} label={`${75}%`}/></div></Col>
           <Col xs={6}><div className='imageskill'><img  className="imgdata" alt="#" src={require('../../images/typescript.png')}/> <ProgressBar variant="info" animated now={70} label={`${70}%`}/></div></Col>
           </Row>
        </Row>
        </ScrollAnimation>
      </Col>
      
      <Col xs={5} className="certificationCol">
      <ScrollAnimation animateIn='animate__fadeIn'>
        <Row>
           <div><img className="imgCert" src={require('../../images/CERT-Fundamentals-Power-Platform.png')}/><span className="certTiltle">Microsoft Certified Power Platform Fundamental</span></div>
           <Button className="certbutton" onClick={()=>clickDownloadCert()} variant="outline-info"><DownloadRoundedIcon/>PL 900</Button>
        </Row>
        <Row>
           <div><img className="imgCert" src={require('../../images/power-platform-developer-600x600.png')}/><span className="certTiltle">Microsoft Certified Power Platform Developer</span></div>
           <Button className="certbutton" onClick={()=>clickDownloadCert400()} variant="outline-info"><DownloadRoundedIcon/>PL 400</Button>
        </Row>
        </ScrollAnimation>
      </Col>
      
    </Row>
    
    </div>
    // </Container>
  )
}

export default Certifications
