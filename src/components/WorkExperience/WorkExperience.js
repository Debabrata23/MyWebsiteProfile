import React from 'react'
import Container from 'react-bootstrap/Container';
import TopNavigation from '../TopNavigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ScrollAnimation from 'react-animate-on-scroll';
import Card from 'react-bootstrap/Card';
import useCOntext from '../Context'
import { useContext } from 'react';

const WorkExperience = () => {
  const auth = useContext(useCOntext);
  console.log(auth.home);
  return (
    // <Container className="mainContainer">
    // <TopNavigation></TopNavigation>
    <div className='workexpdiv'>
      <Row className="pageheader"><ScrollAnimation animateIn='animate__fadeIn'><span className="pageheaderspan">WORK EXPERIENCE</span></ScrollAnimation></Row>
      <ScrollAnimation animateIn="animate__fadeIn" >
        <Row className="workRow">
          <Col lg={true} className="txtCmpheader">
            <div className="workHeader"><img className="imgCmp" src={require('../../images/LTI_Lets_solve.png')} /><div></div></div>
          </Col>
          <Col lg={true} className="detailCol">
            <Row className='expDetails'>
              <Row className="expHeader"><span className="role">Designation : Specialist Software Engineer (Jan 2022 - Present)</span></Row>
              <Row><span className="subtile">Team Size : 5</span></Row>
              <Row><span className="subtile">Technology Used: <div><div className='techdiv'>SharePoint Online</div><div className='techdiv'>SQL</div><div className='techdiv'>PowerApps</div><div className='techdiv'>Power Automate</div><div className='techdiv'>Rest API</div></div></span></Row>
              <Row className="mainDescRow"><Col lg={true}><span className='mainDesc'>Responsibility</span></Col>
                <Col lg={true}>
                  <ul>
                    <li className='descriptionpoint'>Responsible in architechting the application backend in Azure SQL</li>
                    <li className='descriptionpoint'>Creating Views and Procedure in Azure SQL for screen in PowerApps</li>
                    <li className='descriptionpoint'>Automating the various approval process using MS flow</li>
                    <li className='descriptionpoint'>Designing of Canvas PowerApps using Gallery,Component,Combobox and O365 connector</li>
                    <li className='descriptionpoint'>Involved in performance tuning of the app and also requirement gathering from client</li>
                    <li className='descriptionpoint'>Involved in end to end development of the App</li>
                    <li className='descriptionpoint'>Deploying the app to production through CI/CD pipeline</li>
                  </ul>
                </Col></Row>
            </Row>
          </Col>
        </Row>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn" >
        <Row className="workRow">
          <Col lg={true} className="txtCmpheader">
            <div className="workHeader"><img className="imgCmp" src={require('../../images/EY.png')} /><div></div></div>
          </Col>
          <Col lg={true} className="detailCol">
            <Row className='expDetails'>
              <Row className="expHeader"><span className="role">Designation : Tax Senior (May 2021 - Jan 2022)</span></Row>
              <Row><span className="subtile">Team Size : 10</span></Row>
              <Row><span className="subtile">Technology Used: <div><div className='techdiv'>SharePoint Online</div><div className='techdiv'>SP PNP js</div><div className='techdiv'>SPFX</div><div className='techdiv'>React Js</div><div className='techdiv'>Javascript</div><div className='techdiv'>Power Automate</div><div className='techdiv'>Rest API</div><div className='techdiv'>CSOM</div></div></span></Row>
              <Row className="mainDescRow"><Col lg={true}><span className='mainDesc'>Responsibility</span></Col>
                <Col lg={true}>
                  <ul>
                    <li className='descriptionpoint'>Responsible in developing the Commercial application for internal client of EY using SPFX</li>
                    <li className='descriptionpoint'>Creating List View Extension for customization in default List of sharepoint</li>
                    <li className='descriptionpoint'>Worked with Content type and content type hub</li>
                    <li className='descriptionpoint'>Dynamic form creation and detailed list of React using configuration list</li>
                    <li className='descriptionpoint'>Involved in performance tuning of the application </li>
                    <li className='descriptionpoint'>Making use of PNP search to increase the performance </li>
                    <li className='descriptionpoint'>Deploying the solution to production through CI/CD pipeline</li>
                    <li className='descriptionpoint'>Making use of Redux for state management as well as middleware</li>
                    <li className='descriptionpoint'>PCF component creation for one of the client </li>
                  </ul>
                </Col></Row>
            </Row>
          </Col>
        </Row>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn">
        <Row className="workRow">
          <Col lg={true} className="txtCmpheader">
            <div className="workHeader"><img className="imgCmp" src={require('../../images/pwc.png')} /><div></div></div>
          </Col>
          <Col lg={true} className="detailCol">
            <Row className='expDetails'>
              <Row className="expHeader"><span className="role">Designation : Technology Consulting (Nov 2019 - Apr 2021)</span></Row>
              <Row><span className="subtile">Team Size : 3</span></Row>
              <Row><span className="subtile">Technology Used: <div><div className='techdiv'>SharePoint Online</div><div className='techdiv'>SP PNP js</div><div className='techdiv'>SPFX</div><div className='techdiv'>React Js</div><div className='techdiv'>Javascript</div><div className='techdiv'>Power Automate</div><div className='techdiv'>Rest API</div></div></span></Row>
              <Row className="mainDescRow"><Col lg={true}><span className='mainDesc'>Responsibility</span></Col>
                <Col lg={true}>
                  <ul>
                    <li className='descriptionpoint'>Responsible in development of Iportal Document management website from scratch</li>
                    <li className='descriptionpoint'>Make use of JQuery and Javascripty in SPFX for customization</li>
                    <li className='descriptionpoint'>Involved in UI design of the site using Fluent UI React</li>
                    <li className='descriptionpoint'>Designing of Canvas PowerApps for few outof box list forms</li>
                    <li className='descriptionpoint'>Involved in performance tuning of the site and also requirement gathering from client</li>
                    <li className='descriptionpoint'>Used CKeditor 5 for rich text and also panel and navbar and pnp search for development</li>
                    <li className='descriptionpoint'>Deploying the app to production through CI/CD pipeline</li>
                  </ul>
                </Col></Row>
            </Row>
          </Col>
        </Row>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn">
        <Row className="workRow">
          <Col lg={true} className="txtCmpheader">
            <div className="workHeader"><img className="imgCmp" src={require('../../images/mindtree.png')} /><div></div></div>
          </Col>
          <Col lg={true} className="detailCol">
            <Row className='expDetails'>
              <Row className="expHeader"><span className="role">Designation : Senior Software Engineer (Feb 2019 - Nov 2019)</span></Row>
              <Row><span className="subtile">Team Size : 10</span></Row>
              <Row><span className="subtile">Technology Used: <div><div className='techdiv'>SharePoint Online</div><div className='techdiv'>SP PNP js</div><div className='techdiv'>SPFX</div><div className='techdiv'>React Js</div><div className='techdiv'>Javascript</div><div className='techdiv'>Power Automate</div><div className='techdiv'>Rest API</div><div className='techdiv'>CSOM</div><div className='techdiv'>Angular JS</div></div></span></Row>
              <Row className="mainDescRow"><Col lg={true}><span className='mainDesc'>Responsibility</span></Col>
                <Col lg={true}>
                  <ul>
                    <li className='descriptionpoint'>Revamping of the People Hub portal for US based client using SPFX and React</li>
                    <li className='descriptionpoint'>Creating Application customizer for development of the site design</li>
                    <li className='descriptionpoint'>Automating the various approval process using MS flow</li>
                    <li className='descriptionpoint'>Using Dot Net and Jquery for the existing site support and new module development</li>
                    <li className='descriptionpoint'>Involved in performance tuning of the app and also requirement gathering from client</li>
                  </ul>
                </Col></Row>
            </Row>
          </Col>
        </Row>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn" >
        <Row className="workRow">
          <Col lg={true} className="txtCmpheader">
            <div className="workHeader"><img className="imgCmp" src={require('../../images/acuvate.png')} /><div></div></div>
          </Col>
          <Col lg={true} className="detailCol">
            <Row className='expDetails'>
              <Row className="expHeader"><span className="role">Designation : Software Engineer (Nov 2016 - Feb 2019)</span></Row>
              <Row><span className="subtile">Team Size : 3</span></Row>
              <Row><span className="subtile">Technology Used: <div><div className='techdiv'>SharePoint 2013</div><div className='techdiv'>Provider Hosted App</div><div className='techdiv'>JQuery</div><div className='techdiv'>Javascript</div><div className='techdiv'>Dot Net</div><div className='techdiv'>Visual Webpart</div><div className='techdiv'>Content Editor webpart</div><div className='techdiv'>Script Editor Webpart</div><div className='techdiv'>SSOM</div><div className='techdiv'>JSOM</div><div className='techdiv'>CSOM</div></div></span></Row>
              <Row className="mainDescRow"><Col lg={true}><span className='mainDesc'>Responsibility</span></Col>
                <Col lg={true}>
                  <ul>
                    <li className='descriptionpoint'>Responsible in creating a module using dot net and SSOM code</li>
                    <li className='descriptionpoint'>Worked in Custom Webpart using Visual Studio and deploying the WSP IN shharepoint 2013</li>
                    <li className='descriptionpoint'>Supporting the existing the solution </li>
                    <li className='descriptionpoint'>Hands on experience in CSOM and SSOM and also Content editor and Script editor webpart and RSS feed</li>
                    <li className='descriptionpoint'>Involved in creating end to end development using in Provider Hosted APP using JQUery and HTML5</li>
                    <li className='descriptionpoint'>Involved in pushing the code in TFS</li>
                  </ul>
                </Col></Row>
            </Row>
          </Col>
        </Row>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn" >
        <Row className="workRow">
          <Col lg={true} className="txtCmpheader">
            <div className="workHeader"><img className="imgCmp" src={require('../../images/tcs.png')} /><div></div></div>
          </Col>
          <Col lg={true} className="detailCol">
            <Row className='expDetails'>
              <Row className="expHeader"><span className="role">Designation : Contract Assignee (Apr 2016 - Oct 2016)</span></Row>

              <Row><span className="subtile">Team Size : 2</span></Row>
              <Row><span className="subtile">Technology Used: <div><div className='techdiv'>SQL</div></div></span></Row>
              <Row className="mainDescRow"><Col lg={true}><span className='mainDesc'>Responsibility</span></Col>
                <Col lg={true}>
                  <ul>
                    <li className='descriptionpoint'>Provide support for a client in SQL</li>
                    <li className='descriptionpoint'>Creating procedure and functions in SQL</li>
                  </ul>
                </Col></Row>
            </Row>
          </Col>
        </Row>
      </ScrollAnimation>
    </div>
    // </Container>
  )
}

export default WorkExperience
