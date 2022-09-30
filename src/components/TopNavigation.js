import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './Home/Home';
import { useLocation } from 'react-router-dom';
const TopNavigation = () => {
   const locationVal=useLocation();
  return (

    <Row className='navRow'>
      <Col xs={3} className="navAnimate">
        <span className='homeName'></span>
      </Col>
      <Col xs={9} className="navAnimate">
        <div className="headerDiv">
          <Button className={locationVal.pathname=='/my-profile'? 'activeDiv':'lnkheaderNav'}  href="/">Home</Button>
          <Button className={locationVal.pathname=='/Certifications'? 'activeDiv':'lnkheaderNav'} href="/Certifications">Certifications & Skills</Button>
          <Button className={locationVal.pathname=='/WorkExperience'? 'activeDiv':'lnkheaderNav'} href="/WorkExperience">Work Experience</Button>
     
         
        </div>
      </Col>
    </Row>


  )
}

export default TopNavigation
