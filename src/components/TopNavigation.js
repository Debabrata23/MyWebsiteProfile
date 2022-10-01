import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './Home/Home';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'
const TopNavigation = () => {
   const locationVal=useLocation();
  return (

    <Row className='navRow'>
      <Col xs={3} className="navAnimate">
        <span className='homeName'></span>
      </Col>
      <Col xs={9} className="navAnimate">
        <div className="headerDiv">
          <Button className={locationVal.pathname=='/MyWebsiteProfile'? 'activeDiv':'lnkheaderNav'}  href="/MyWebsiteProfile">Home</Button>
          <Button className={locationVal.pathname=='/MyWebsiteProfile/Certifications'? 'activeDiv':'lnkheaderNav'} href="/MyWebsiteProfile/Certifications">Certifications & Skills</Button>
          <Button className={locationVal.pathname=='//MyWebsiteProfile/WorkExperience'? 'activeDiv':'lnkheaderNav'} href="/MyWebsiteProfile/WorkExperience">Work Experience</Button>
     
         
        </div>
      </Col>
    </Row>


  )
}

export default TopNavigation
