import React, { Component } from 'react';
import BlackLogo from '../../static/images/logos/kernelcon_black.png';

import './Home.scss';

export default class Home extends Component {
  static displayName = 'Home';

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      mode: '',
      isOpen: false
    }
  }


  render() {
    return (
      <div className='home-page'>
        <div className='centered-top'>
          <div className='font-punk'>Kernelcon Cyberpunk</div>
        </div>
       
        <div className='col-left'>
          <div>
            <a class="cybr-btn btn-bottom" target="_blank" rel="noopener noreferrer" href="https://kernelcon.square.site/">
              Order Now
              <span aria-hidden class="cybr-btn__glitch">Order Now</span>
            </a>
          </div>
        </div>
        <div className='col-right'>
          <div>
            Test
          </div>
        </div>

        {/* <a className='reg-button'
          href="https://reg.kernelcon.org"
          rel='noopener noreferrer'
          target='_blank'>
          Register Now
        </a>
        <a className='reg-button'
          onClick={this.toggleModal}
          href="#"
          rel='noopener noreferrer'>
          Sign up for updates
        </a>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}
          title='Subscribe for Updates'
          modalContentStyle={modalContentStyle}
          height='620'
          width='600'>
            <iframe src="https://mailchi.mp/4305c17b886e/kernelcon"
              title="sign-up-form"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className='mail-form'
              style={{'marginLeft': '0px', 'width': '580px', 'height': '720px'}}>
              Loading...
            </iframe>
        </Modal> */}


      </div>
    );
  }
}
