import React from 'react';
import * as constantfunction from '../constant/constant'
import Container from 'react-bootstrap/Container';
import TopNavigation from '../TopNavigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ScrollAnimation from 'react-animate-on-scroll';
import Card from 'react-bootstrap/Card';
import useCOntext from '../Context'
import { useContext } from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { containerClasses } from '@mui/system';

const WorkExperience = (props) => {
  const auth = useContext(useCOntext);
  console.log(auth.home);
  return (
    // <Container className="mainContainer">
    // <TopNavigation></TopNavigation>
    <div>
      <BrowserView>
        <div className='workexpdiv'>
          <ScrollAnimation animateIn='animate__bounceInRight'><Row className="pageheader"><span className="pageheaderspan">WORK EXPERIENCE</span><div className='seperator'></div></Row></ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeIn" >
            <Container>
              {props.data.info.map((exp, index) => {
                return (
                  <Row className="workRow">
                    <Col xs={3} className="txtCmpheader">
                      <div className="workHeader"><img className="imgCmp" src={constantfunction.getimagesoure(exp.companyname)} /><div></div></div>
                    </Col>
                    <Col lg={true} className="detailCol">
                      <Row className='expDetails'>
                        <Row className="expHeader"><span className="role">Designation : {exp.designation} {exp.Period}</span></Row>
                        <Row><span className="subtile">Team Size : {exp.team}</span></Row>
                        <Row><span className="subtile">Technology Used: <div>
                          {exp.skillset.map((skill, index) => {
                            return (<div className='techdiv'>{skill}</div>
                            )
                          })}
                        </div></span></Row>
                        <Row className="mainDescRow"><Col xs={3}><span className='mainDesc'>Responsibility</span></Col>
                          <Col lg={true}>
                            <ul>
                              {exp.responsibility.map((response, index) => {
                                return (<li className='descriptionpoint'>{response}</li>)
                              })}
                            </ul>
                          </Col></Row>
                      </Row>
                    </Col>
                  </Row>

                )

              })}
            </Container>

          </ScrollAnimation>
        </div></BrowserView>
      <MobileView>  <div className='workexpdivMobile'>
        <ScrollAnimation animateIn='animate__bounceInRight'><Row className="pageheader"><span className="pageheaderspan">WORK EXPERIENCE</span><div className='seperator'></div></Row></ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" >
          <Container>
            {props.data.info.map((exp, index) => {
              return (
                <Row className="workRow">
                  <Col lg={true} className="txtCmpheader">
                    <div className="workHeader"><img className="imgCmp" src={constantfunction.getimagesoure(exp.companyname)} /><div></div></div>
                  </Col>
                  <Col lg={true} className="detailCol">
                    <Row className='expDetails'>
                      <Row className="expHeader"><span className="role">Designation : {exp.designation} {exp.Period}</span></Row>
                      <Row><span className="subtile">Team Size : {exp.team}</span></Row>
                      <Row><span className="subtile">Technology Used: <div>
                        {exp.skillset.map((skill, index) => {
                          return (
                            <div className='techdiv'>{skill}</div>)
                        })}
                      </div></span></Row>
                      <Row className="mainDescRow"><Col lsm={3}><span className='mainDesc'>Responsibility</span></Col>
                        <Col lg={true}>
                          <ul>
                            {exp.responsibility.map((response, index) => {
                              return (
                                <li className='descriptionpoint'>{response}</li>
                              )
                            })}
                          </ul>
                        </Col></Row>
                    </Row>
                  </Col>
                </Row>
              )
            })}
          </Container>

        </ScrollAnimation>
      </div></MobileView></div>


    // </Container>
  )
}

export default WorkExperience
