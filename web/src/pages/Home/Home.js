import React, { Component } from "react";
import BlackLogo from "../../static/images/logos/kernelcon_black.png";
import PunkMale from "../../static/images/punk/punk_male.png";
import PunkFemale from "../../static/images/punk/punk_female.png";
import Skyline from "../../static/images/punk/skyline.png";
import Speaker from "../../static/images/icons/speaker.png";
import Training from "../../static/images/icons/training.png";
import Arm from "../../static/images/icons/arm.png";
import Brain from "../../static/images/icons/brain.png";
import Fun from "../../static/images/icons/fun.png";
import "./Home.scss";

export default class Home extends Component {
	static displayName = "Home";

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	constructor(props) {
		super(props);
		this.state = {
			mode: "",
			isOpen: false,
		};
	}

	render() {
		return (
			<div className="home-page">
				<div className="centered-top">
					<div className="font-punk">Kernelcon Punk</div>
					<img src={PunkFemale} class="punk-img"  alt="punk-female"/>
					<img src={PunkMale} class="punk-img" alt="punk-male"/>
				</div>

				<div className="col left">
					<div className="sizzle">
						<div className="sizzle-header">
							<div className="sizzle-text-title">
								Welcome to Kernelcon
							</div>
							<img src={Skyline} className="sizzle-image"  alt="skyline"/>
						</div>
						<div className="sizzle-text-section">
							<div className="sizzle-text">
								Join us on a trip to the cyber playground where you can let your punk flag fly whatever it is: biopunk, cyberpunk, steampunk, etc.
							</div>
              <div className="sizzle-bullets">
                <div className='sizzle-bullet-item'>
                  <div className='sizzle-icon'>
                    <img src={Speaker} alt="speaker-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Excellent Speakers
                    </div>
                    <div className='sizzle-bullet-desc'>
                      We are bringing in some of information security's top talents from the midwest and across the nation. Come learn from and network with our speakers!
                    </div>
                  </div>
                </div>
                <div className='sizzle-bullet-item'>
                  <div className='sizzle-icon'>
                    <img src={Training} alt="training-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Professional Training
                    </div>
                    <div className='sizzle-bullet-desc'>
                      Some of the industry's leading trainers descend on Omaha, Nebraska to lead two days of intensive coursework for attendees.
                    </div>
                  </div>
                </div>
                <div className='sizzle-bullet-item'>
                  <div className='sizzle-icon'>
                    <img src={Arm} alt="hands-on-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Hands-On Villages
                    </div>
                    <div className='sizzle-bullet-desc'>
                      We have huge plans for our village area - including classics like Lockpicking and Hardware Labs and new offerings like a Radio/IOT Village.
                    </div>
                  </div>
                </div>
                <div className='sizzle-bullet-item'>
                  <div className='sizzle-icon'>
                    <img src={Brain} alt="competitions-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Challenging Competitions
                    </div>
                    <div className='sizzle-bullet-desc'>
                      Our Capture-the-Flag event is always a big hit and this year promises to be tubular! Plus, other fun competitions like the WiFi Fox and Hound event will help keep you busy all con long!
                    </div>
                  </div>
                </div>
                <div className='sizzle-bullet-item'>
                  <div className='sizzle-icon'>
                    <img src={Fun} alt="activities-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Fun Activities
                    </div>
                    <div className='sizzle-bullet-desc'>
                      Join us at out raging party / social event Kernel Panic party.
                    </div>
                  </div>
                </div>
              </div>
						</div>
					</div>

				</div>
				<div className="col right">
					<center>
						<img
							class="img-responsive"
              alt="future-is-now"
							src="https://cdn0.vox-cdn.com/thumbor/O8IF6wSLdIz4JoG6abHHSn2qWhg=/cdn0.vox-cdn.com/uploads/chorus_asset/file/6274065/Apr_01__2016_09_25.0.gif"
						/>
						<p className="photo-credit">
							The Future Is Now by Josan Gonzalez
						</p>
					<div className='order-button'>
						<a
							class="cybr-btn btn-bottom"
							target="_blank"
							rel="noopener noreferrer"
							href="https://reg.kernelcon.org/">
							Register Now
							<span aria-hidden class="cybr-btn__glitch">
								Register Now
							</span>
						</a>
					</div>
					</center>

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
