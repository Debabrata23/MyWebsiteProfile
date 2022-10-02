import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './Home/Home';
import { useEffect,useState } from 'react';

const TopNavigation = () => {
  const[homeclick,setHome]=useState(true);
  const[workclick,setWork]=useState(false);
  const[certClick,setCert]=useState(false)
   useEffect(()=>
   {
    window.scrollTo(0, 0);
   // setHome(true);
    //setWork(false);
    //setCert(false);
   },[])
   const locationVal="";
   const clickCert=()=>
   {
    setHome(false);
    setWork(false);
    setCert(true);
    //let domcert = document.getElementsByClassName('navigatecertificate');
    //domcert[0].scrollIntoView(true);
    var element = document.getElementsByClassName('navigatecertificate');
    var headerOffset = 130;
    var elementPosition = element[0].getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    //const workdiv=document.getElementsByClassName('workexpdiv');
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
 });

   }
   const clickWork=()=>
   {
    setHome(false);
    setWork(true);
    setCert(false);
    var element = document.getElementsByClassName('workexpdiv');
    var headerOffset = 120;
    var elementPosition = element[0].getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    //const workdiv=document.getElementsByClassName('workexpdiv');
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
 });
    //workdiv[0].scrollIntoView(true);
   }
   const clickHome=()=>
   {
    setHome(true);
    setWork(false);
    setCert(false);
    var element = document.getElementsByClassName('navigateHome');
    var headerOffset = 100;
    var elementPosition = element[0].getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    //const workdiv=document.getElementsByClassName('workexpdiv');
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
 });
    //let homediv=document.getElementsByClassName('navigateHome');
    //homediv[0].scrollIntoView(true);
   }
  return (

    <Row className='navRow'>
      <Col xs={3} className="navAnimate">
        <span className='homeName'></span>
      </Col>
      <Col xs={9} className="navAnimate">
        <div className="headerDiv">
          <Button className={homeclick? 'activeDiv':'lnkheaderNav'} onClick={()=>clickHome()} >Home</Button>
          <Button className={certClick? 'activeDiv':'lnkheaderNav'} onClick={()=>clickCert()} >Certifications & Skills</Button>
          <Button className={workclick? 'activeDiv':'lnkheaderNav'} onClick={()=>clickWork()} >Work Experience</Button>
     
         
        </div>
      </Col>
    </Row>


  )
}

export default TopNavigation
