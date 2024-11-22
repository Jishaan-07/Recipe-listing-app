import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{height: '300px', width: '100%'}} className='mt-5 bg-dark text-light'>
      <div className='d-flex justify-content-between px-5'>
        {/* intro */}
        <div style={{width: '400px'}}>
          <h5><i className="fa-solid fa-kitchen-set"></i> Recipe Listing App</h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className="d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} className=' text-light' style={{textDecoration: 'none',}}>Home</Link>
          <Link to={'/recipe/:id'}  className=' text-light' style={{textDecoration: 'none'}}>Recipe Details</Link>
        </div>
        {/* guides */}
        <div className="d-flex flex-column">
          <h5>Guides</h5>
          <a style={{textDecoration: 'none'}} href="https://react.dev/" target='_blank'>React</a>
          <a style={{textDecoration: 'none'}} href="https://reactrouter.com/en/main" target='_blank'>React Router</a>
          <a style={{textDecoration: 'none'}} href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
        </div>
        {/* contact */}
        <div className="d-flex flex-column">
          <h5>Contact</h5>
          <div className="d-flex">
            <input placeholder='Enter your Email here!!' type="text" className="form-control me-2"/>
            <button className='btn btn-info'>
              <i className="fa-solid fa-circle-arrow-right"></i>
            </button>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <a style={{textDecoration: 'none', color: 'white'}} target='_blank' href=""><i className="fa-brands fa-x-twitter"></i></a>
            <a style={{textDecoration: 'none', color: 'white'}} target='_blank' href="https://www.instagram.com/welcome.ai/?hl=en"><i className="fa-brands fa-instagram"></i></a>
            <a style={{textDecoration: 'none', color: 'white'}} target='_blank' href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
            <a style={{textDecoration: 'none', color: 'white'}} target='_blank' href="https://www.linkedin.com/mynetwork/grow/"><i className="fa-brands fa-linkedin"></i></a>
            <a style={{textDecoration: 'none', color: 'white'}} target='_blank' href="https://github.com/"><i className="fa-brands fa-github"></i></a>
            <a style={{textDecoration: 'none', color: 'white'}} target='_blank' href="https://github.com/"><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; July 2024 Batch, Media Player App. Built with React</p>
    </div>
  );
}

export default Footer;
