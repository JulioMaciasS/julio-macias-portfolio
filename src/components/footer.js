import React from 'react';
import './Footer.css';
import SkillsCard from './SkillsCard';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-column'>
        <div className='footer-row'>
          <div className='footer-column'>
            <h1>Social media</h1>
            <div className='icons-wrapper'>
              <a href="https://www.instagram.com/julio.m.g_/" target='_blank' rel="noopener noreferrer" className='icon'>
                <i className="fab fa-instagram"></i>
              </a>

              <a href="https://www.linkedin.com/in/julio-macias-gonzalez-199266282/" target='_blank' rel="noopener noreferrer" className='icon'>
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="https://github.com/JulioMaciasS" target='_blank' rel="noopener noreferrer" className='icon'>
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className='footer-column'>
            <SkillsCard />
          </div>
        </div>
        <p className='website-rights'>JulioTech 2023©</p>
      </div>
    </div>
  );
}

export default Footer;
