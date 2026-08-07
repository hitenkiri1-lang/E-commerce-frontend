import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import validation from '../../Validation/validation';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class Contact extends Component {
    constructor()
    {
        super();
        this.state={
            name:"",
            email:"",
            message:""
        }
    }

    nameOnChange=(event)=>{
        let name=event.target.value;
        this.setState({name:name});
    }

    emailOnChange=(event)=>{
        let email=event.target.value;
        this.setState({email:email});
    }

    messageOnChange=(event)=>{
        let message=event.target.value;
        this.setState({message:message});
    }

    onFormSubmit=(event)=>{
        let name=this.state.name;
        let email=this.state.email;
        let message=this.state.message;
        let sendbtn=document.getElementById("sendbtn");
        let contactForm=document.getElementById("contactForm");


        if(message.length==0)
        {
            toast.error("Please Enter Your Message");
        }
        else if(name.length==0)
        {
            toast.error("Please Enter Your Name");
        }
        else if(email.length==0)
        {
            toast.error("Please Enter Your Email");
        }
        else if(!(validation.NameRegx.test(name)))
        {
            toast.error("Please Enter Valid Name");
        }
        else
        {
            sendbtn.innerHTML="Sending...";
            let MyFormData=new FormData();
            MyFormData.append("name",name);
            MyFormData.append("email",email);
            MyFormData.append("message",message);

            axios.post(AppURL.PostContact, MyFormData)
            .then(function(response)
            {
                if(response.status==200 && response.data==1)
                {
                    toast.success("Message Sent Successfully");
                    sendbtn.innerHTML="Send Message";
                    contactForm.reset();
                }
                else
                {
                    toast.error("error");
                    sendbtn.innerHTML="Send Message";
                }
            })
            .catch(function(error)
            {
                toast.error(error);
                sendbtn.innerHTML="Send Message";
            });
        }







        event.preventDefault();
    }



  render() {
    return (
        <Fragment>
            <Container>
                <Row className='p-2'>
                    <Col md={12} lg={12} sm={12} xs={12} className='mt-2 shadow-sm rounded-lg bg-white'>
                        <Row className='text-center'>
                            <Col md={6} lg={6} sm={12} xs={12} className='d-flex justify-content-center'>
                                <Form id='contactForm' onSubmit={this.onFormSubmit} className='onboardForm'>
                                    <h4 className='section-title-login'>Contact With Us</h4>
                                    <h6 className='section-sub-title'>Please Contact Us For Any Queries</h6>
                                    <input onChange={this.nameOnChange} className='form-control m-2' type='text' placeholder='Enter Your Name'></input>


                                    <input onChange={this.emailOnChange} className='form-control m-2' type='email' placeholder='Enter Your Email Address'></input>


                                    <textarea onChange={this.messageOnChange} className='form-control m-2' placeholder='Enter Your Message'></textarea>


                                    <Button id="sendbtn" type='submit' className='btn btn-block m-2 site-btn-login'>Send Message</Button>

                                </Form>

                            </Col>

                            <Col md={6} lg={6} sm={6} xs={6} className='p-0 Desktop m-0'>
                                <br></br><br></br>
                                <p className='section-title-contact'>   
                                    Kalvad road, Rajkot, Gujarat, India
                                </p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.82113803673!2d70.738723511998!3d22.273466080328312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1785649393784!5m2!1sen!2sin" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                            </Col> 
                        </Row>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </Fragment>
    )
  }
}

export default Contact
