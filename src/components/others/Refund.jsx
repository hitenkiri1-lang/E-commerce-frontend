import React, { Component, Fragment } from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
export class Refund extends Component {
  render() {
    return (
      <Fragment>
                  <Container>
                      <Row className='p-2'>
                          <Col md={12} lg={12} sm={12} xs={12} className='mt-2 shadow-sm rounded-lg bg-white'>
                              <h4 className='section-title-login'>Refund Policy</h4>
                              <p className='section-sub-title'>
                                  During my internship at IMBUESOFT LLP, I encountered several technical and practical challenges while working on the assigned projects. These challenges became valuable learning opportunities and helped me improve my analytical thinking, problem-solving abilities, and technical skills. With the guidance of my mentors and continuous self-learning, I successfully overcame these difficulties and completed both projects within the internship period.<br></br><br></br>
      One of the major challenges I faced was during the Product Hunt Data Scraping project. Since Product Hunt is a dynamic website, extracting accurate and structured information required understanding the webpage structure, handling dynamic content, and managing changes in HTML elements. Initially, I faced difficulties in identifying the correct selectors and extracting complete product information without errors. There were also challenges related to handling incomplete or inconsistent data obtained during the scraping process. To overcome these issues, I carefully analyzed the webpage structure, improved my scraping logic, implemented data validation techniques, and performed data cleaning to ensure the extracted information was accurate and well-structured.
                              </p>
                          </Col>
                      </Row>
                  </Container>
              </Fragment>
    )
  }
}

export default Refund
