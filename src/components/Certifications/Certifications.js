import React from 'react'
import * as constantfunction from '../constant/constant'
import Container from 'react-bootstrap/Container';
import TopNavigation from '../TopNavigation';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import PL900 from '../../pdfs/PL900.pdf';
import PL400 from '../../pdfs/PL400.pdf'
import ScrollAnimation from 'react-animate-on-scroll';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Certifications = (props) => {
  const vd = props;
  const clickDownloadCert = () => {

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
  const clickDownloadCert400 = () => {

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
    <div>
      <BrowserView><div className="navigatecertificate">
        <ScrollAnimation animateIn='animate__bounceInRight'><Row className="pageheader"><span className="pageheaderspan">CERTIFICATION & SKILLS</span><div className='seperator'></div></Row></ScrollAnimation>

        <Row className="certificatediv">
          <Col lg={true} className="maindivSkill">
            <ScrollAnimation animateIn='animate__fadeIn'>
              <Row className="divSkill">
                <Row className="skillHeader"><Col lg={true}><div className='seperatorSub'></div></Col><Col lg={true}><div>Skills</div></Col></Row>
                <Container className='skillcontainer'>
                  {props.data.skills.info.map((value, index) => {
                    return (<Row> <Col lg={true}><div className='imageskill'><img className="imgdata" alt="#" src={constantfunction.getimagesoure(value.img)} />  <ProgressBar now={value.label} variant={value.variant} animated label={`${value.label}%`} /></div></Col>
                    </Row>)

                  })}
                </Container>

              </Row>
            </ScrollAnimation>
          </Col>

          <Col lg={true} className="certificationCol">
            <ScrollAnimation animateIn='animate__fadeIn'>
              <Row className="skillHeader"><Col lg={true}><div className='seperatorSub'></div></Col><Col lg={true}><div>Certification</div></Col></Row>
              <Container>
                {props.data.ceritificate.info.map((cert, index) => {
                  return (<Row>
                    <div><img className="imgCert" src={constantfunction.getimagesoure(cert.certificateimg)} /><span className="certTiltle">{cert.certificatetitlename}</span></div>
                    <Button className="certbutton" onClick={() => clickDownloadCert()} variant="outline-info"><DownloadRoundedIcon />{cert.certificatetitle}</Button>
                  </Row>)
                })}
              </Container>
            </ScrollAnimation>
          </Col>
        </Row>

      </div></BrowserView>
      <MobileView><div className="navigatecertificateMobile">
        <ScrollAnimation animateIn='animate__bounceInRight'><Row className="pageheader"><span className="pageheaderspan">CERTIFICATION & SKILLS</span><div className='seperator'></div></Row></ScrollAnimation>
        <Row className="certificatediv">
          <Col lg={true} className="maindivSkillMob">
            <ScrollAnimation animateIn='animate__fadeIn'>
              <Row className="divSkillMobile">
                <Row className="skillHeader"><Col lg={true} className='seperatorSubMob'><div>Skills</div></Col></Row>
                <Container>
                  {props.data.skills.info.map((value, index) => {
                    return (<Row> <Col lg={true}><div className='imageskill'><img className="imgdata" alt="#" src={constantfunction.getimagesoure(value.img)} />  <ProgressBar now={value.label} variant={value.variant} animated label={`${value.label}%`} /></div></Col>
                    </Row>)
                  })}
                </Container>
              </Row>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__fadeIn'>
              <Row className="divSkillMobile">
                <Col lg={true} className="certificationCol">
                  <ScrollAnimation animateIn='animate__fadeIn'>
                    <Row className="skillHeader"><Col lg={true} className='seperatorSubMob'><div>Certification</div></Col></Row>
                    <Container>
                      {props.data.ceritificate.info.map((cert, index) => {
                        return (<Row>
                          <div><img className="imgCertMob" src={constantfunction.getimagesoure(cert.certificateimg)} /><span className="certTiltle">{cert.certificatetitlename}</span></div>
                          <Button className="certbuttonMob" onClick={() => clickDownloadCert()} variant="outline-info"><DownloadRoundedIcon />{cert.certificatetitle}</Button>
                        </Row>)
                      })}
                    </Container>
                  </ScrollAnimation>
                </Col>
              </Row>
            </ScrollAnimation>
          </Col>


        </Row>

      </div></MobileView>
    </div>

    // </Container>
  )
}

export default Certifications
