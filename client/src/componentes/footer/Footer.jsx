import React, {useEffect, useState} from 'react'
import { Button } from '../several/Button'
import { Link } from 'react-router-dom'
import './Footer.css'
import api from '../../api/api'

function Footer() {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    api.get('email').then(response => {
      setEmails(response.data)
    })
  }, [])

  function handleAddEmails(){
    api.post('email/add', {
      email: "nuno@gmail.com"
    })
  }

  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Junta-se a nos e receba sempre as nossas subscricoes
        </p>
        <p className="footer-subscription-text">
          Podes subscrever a qualquer hora e momento.
        </p>
        <div className="input-areas">
          <form action="">
            <input type="email" name="email" placeholder="Insira o seu E-mail" className="footer-input"/>
            <Button buttonStyle='btn--outline' onClick={handleAddEmails}>Subescreva</Button>
          </form>
        </div>
      </section>
      <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <div to='/' className='social-logo'>CM</div>
            </div>
            <small className="website-rights">Curiosidade Mundo @ 2021</small>
            <div className="social-icons">
              <Link 
                className="social-icon-link facebook"
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
              <i className="fab fa-facebook-f"></i>
              </Link>
              <Link 
                className="social-icon-link instagram"
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
              <i className="fab fa-instagram"></i>
              </Link>
              <Link 
                className="social-icon-link twitter"
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
              <i className="fab fa-twitter"></i>
              </Link>
              <Link 
                className="social-icon-link linkedin"
                to='/'
                target='_blank'
                aria-label='Linkedin'
              >
              <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Footer 