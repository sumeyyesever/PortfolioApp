import { GitHub, LinkedIn, Send } from "@mui/icons-material";
import "./app.scss";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
function App() {

  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ohl3aro', 'template_mmos6c8', formRef.current, 'WGWOlDaJFGOSLl9sw')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }



  return (
    <div className="container">
    <div className="wrapper">
      <div className="top">
        <h1>Hi I'm Sümeyye</h1>
        <p>I'm computer engineering student in Turkey. I want to improve myself on full-stack web development. 
        I'm currently working on back-ends of the projects below.</p>
        <div className="social-container">
          <LinkedIn className="icon" onClick={() =>  window.open('https://www.linkedin.com/in/sumeyyesever/', "_blank")}/>
          <GitHub className="icon" onClick={() =>  window.open('https://github.com/sumeyyesever', "_blank")}/>
        </div>
      </div>
      <hr />
      <div className="center">
        <h3>front-end projects</h3>
        <div className="projects">
        <div className="project-container">
        <div className="image">
        <img alt="" src="/images/social-app-img.png" />
        </div> 
          <div className="info">
            <h4>social media application</h4>
            <span>▪️ react</span>
            <span>▪️ styled-components</span>
            <div className="links">
            <a target="_blank" rel="noreferrer" href="https://github.com/sumeyyesever/Social-App">📍<u>code</u></a>
            <a target="_blank" rel="noreferrer" href="https://smysocial.netlify.app">📍<u>demo page</u></a>
            </div>    
          </div>
        </div>
        <div className="project-container">
        <div className="image">
        <img alt="" src="/images/ecommerce-app-img.png" />
        </div> 
          <div className="info">
            <h4>e-commerce application</h4>
            <span>▪️ react</span>
            <span>▪️ sass</span>
            <div className="links">
            <a target="_blank" rel="noreferrer" href="https://github.com/sumeyyesever/EcommerceApp">📍<u>code</u></a>
            <a target="_blank" rel="noreferrer" href="https://smymarket.netlify.app/">📍<u>demo page</u></a>
            </div>    
          </div>
        </div>
        <div className="project-container">
        <div className="image">
        <img alt="" src="/images/booking-app-img.png" />
        </div> 
          <div className="info">
            <h4>booking application</h4>
            <span>▪️ react</span>
            <span>▪️ sass</span>
            <div className="links">
            <a target="_blank" rel="noreferrer" href="https://github.com/sumeyyesever/BookingApp">📍<u>code</u></a>
            <a target="_blank" rel="noreferrer" href="https://smybooking.netlify.app/">📍<u>demo page</u></a>
            </div>    
          </div>
        </div>
        </div>
      </div>
      <hr/>
      <div className="bottom">
      <h3>contact me</h3>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="name" name="user_name" />
          <input type="text" placeholder="e-mail" name="user_email" />
          <input type="text" placeholder="subject" name="user_subject" />
          <textarea rows={5} placeholder="message" name="message"/>
          <button><Send /></button>
          {done && <span style={{marginTop:"5px", fontSize:"13px"}}>your message has been sent!</span>}
        </form>
      </div>
      <hr/>
      <div className="footer">
        <div className="location">
          <span>Currently in</span>
          <span>Kayseri, Turkey</span>
        </div>
        <div className="contact">
          <span>© 2023 Sümeyye Sever</span>
          <span><a style={{textDecoration:"none", color:"black"}} href="mailto:sumeysever@gmail.com">sumeysever@gmail.com</a></span>
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default App;
