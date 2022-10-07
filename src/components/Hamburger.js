import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
const Hamburger = () => {
    const[homeclick,setHome]=useState(true);
    const[workclick,setWork]=useState(false);
    const[certClick,setCert]=useState(false);
    const[homeclickpos,setHomepos]=useState(0);
    const[workclickpos,setWorkpos]=useState(0);
    const[certClickpos,setCertpos]=useState(0)
    const[openHam,setOpenHam]=useState(false);
   
    const handleclick=()=>
    {
        setOpenHam(!openHam)
    }
    const clickCert=()=>
    {
     setHome(false);
     setWork(false);
     setCert(true);
     //let domcert = document.getElementsByClassName('navigatecertificate');
     //domcert[0].scrollIntoView(true);
     var element = document.getElementsByClassName('navigatecertificateMobile');
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
     var element = document.getElementsByClassName('workexpdivMobile');
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
     var element = document.getElementsByClassName('navigateHomeMobile');
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
    <div>
    <img className="imgmobile" src={require('../images/hamburger.png')} onClick={()=>handleclick()}/>
    {openHam?
        <div className="headerDivMobile">
        <Button className={homeclick? 'activeDiv':'lnkheaderNav'} onClick={()=>clickHome()} >Home</Button>
        <Button className={certClick? 'activeDiv':'lnkheaderNav'} onClick={()=>clickCert()} >Certifications & Skills</Button>
        <Button className={workclick? 'activeDiv':'lnkheaderNav'} onClick={()=>clickWork()} >Work Experience</Button>
   
       
      </div>:null}
    </div>
   
  )
}

export default Hamburger
