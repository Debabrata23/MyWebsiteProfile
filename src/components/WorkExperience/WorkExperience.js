import React from 'react'
import Container from 'react-bootstrap/Container';
import TopNavigation from '../TopNavigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Card from 'react-bootstrap/Card';
const WorkExperience = () => {
  return (
    <Container className="mainContainer">
    <TopNavigation></TopNavigation>
    <Row className="workRow">
      <Col xs={4} className="txtCmpheader">
      <DoubleArrowIcon/><span className="workHeader">L&T Infotech: (01/2022 to present)</span>
      </Col>
      <Col xs={8} className="detailCol">
        <Row className='expDetails'>
           <Row className="expHeader"><span className="role">Designation : Specialist Software Engineer</span></Row>
           <Row><span className="subtile">Team Size : 5</span></Row>
           <Row><span className="subtile">Technology Used: SharePoint Online,SQL,PowerApps,Power Automate,Rest API</span></Row>
           <Row className="mainDescRow"><Col xs={3}><span className='mainDesc'>Responsibility</span></Col>
           <Col xs={9}>
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
    <Row className="workRow">
      <Col xs={4} className="txtCmpheader">
      <DoubleArrowIcon/><span className="workHeader">EY GDS: (05/2021 to 01/2022)</span>
      </Col>
      <Col xs={8} className="detailCol">
        <Row className='expDetails'>
           <Row className="expHeader"><span className="role">Designation : Tax Senior</span></Row>
           <Row><span className="subtile">Team Size : 10</span></Row>
           <Row><span className="subtile">Technology Used: <b>SharePoint Online,SP PNP js,SPFX,React Js,Javascript,Redux,Power Automate,Rest API,CSOM</b></span></Row>
           <Row className="mainDescRow"><Col xs={3}><span className='mainDesc'>Responsibility</span></Col>
           <Col xs={9}>
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
    <Row className="workRow">
      <Col xs={4} className="txtCmpheader">
      <DoubleArrowIcon/><span className="workHeader">PwC India: (10/2019 to 04/2021)</span>
      </Col>
      <Col xs={8} className="detailCol">
        <Row className='expDetails'>
           <Row className="expHeader"><span className="role">Designation : Technology Consulting</span></Row>
           <Row><span className="subtile">Team Size : 3</span></Row>
           <Row><span className="subtile">Technology Used: <b>SharePoint Online,SP PNP js,SPFX,React Js,Javascript,Power Automate,Rest API,CSOM</b></span></Row>
           <Row className="mainDescRow"><Col xs={3}><span className='mainDesc'>Responsibility</span></Col>
           <Col xs={9}>
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
    
    <Row className="workRow">
      <Col xs={4} className="txtCmpheader">
      <DoubleArrowIcon/><span className="workHeader">Mindtree Ltd: (02/2019 to 10/2019)</span>
      </Col>
      <Col xs={8} className="detailCol">
        <Row className='expDetails'>
           <Row className="expHeader"><span className="role">Designation : Specialist Software Engineer</span></Row>
           <Row><span className="subtile">Team Size : 10</span></Row>
           <Row><span className="subtile">Technology Used: <b>SharePoint Online,SP PNP js,SPFX,React Js,Javascript,Power Automate,Rest API,CSOM,Angular JS</b></span></Row>
           <Row className="mainDescRow"><Col xs={3}><span className='mainDesc'>Responsibility</span></Col>
           <Col xs={9}>
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
    <Row className="workRow">
      <Col xs={4} className="txtCmpheader">
      <DoubleArrowIcon/><span className="workHeader">Acuvate Software: (10/2016 to 02/2019)</span>
      </Col>
      <Col xs={8} className="detailCol">
        <Row className='expDetails'>
           <Row className="expHeader"><span className="role">Designation : Software Engineer</span></Row>
           <Row><span className="subtile">Team Size : 3</span></Row>
           <Row><span className="subtile">Technology Used: SharePoint 2013,Provider Hosted App,JQuery,Javascript,Dot Net,Visual Webpart,Content Editor webpart,Script Editor Webpart,SSOM,JSOM,CSOM</span></Row>
           <Row className="mainDescRow"><Col xs={3}><span className='mainDesc'>Responsibility</span></Col>
           <Col xs={9}>
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
    <Row className="workRow">
      <Col xs={4} className="txtCmpheader">
      <DoubleArrowIcon/><span className="workHeader">CMC LTD (04/2016 to 10/2016)</span>
      </Col>
      <Col xs={8} className="detailCol">
        <Row className='expDetails'>
           <Row className="expHeader"><span className="role">Designation : Contract Assignee</span></Row>
           <Row><span className="subtile">Team Size : 2</span></Row>
           <Row><span className="subtile">Technology Used: SQL</span></Row>
           <Row className="mainDescRow"><Col xs={3}><span className='mainDesc'>Responsibility</span></Col>
           <Col xs={9}>
           <ul> 
               <li className='descriptionpoint'>Provide support for a client in SQL</li>
               <li className='descriptionpoint'>Creating procedure and functions in SQL</li>
               </ul>
           </Col></Row>
        </Row>
    </Col>
    </Row>
    </Container>
  )
}

export default WorkExperience
