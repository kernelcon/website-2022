import React, { Component } from "react";
import ContrastDarkMode from "../../static/images/sponsors/contrast-light-logo.png";
import ContrastLightMode from "../../static/images/sponsors/contrast-dark-logo.png";
import NoStarchPress from "../../static/images/sponsors/no-starch-logo.png";
import ToooLDarkMode from "../../static/images/sponsors/toool-light-logo.png";
import TooolLightMode from "../../static/images/sponsors/toool-dark-logo.svg";
import Fnbo from "../../static/images/sponsors/fnbo.png";
import CheckPoint from "../../static/images/sponsors/checkpoint-dark-logo.png";
import AppGateDark from "../../static/images/sponsors/appgate-dark-logo.png";
import AppGateLight from "../../static/images/sponsors/appgate-light-logo.png";
import RedCanary from "../../static/images/sponsors/red_canary.png";
import AWSDark from "../../static/images/sponsors/AWS_black.png";
import AWSLight from "../../static/images/sponsors/AWS-color.png";
import Netsecuris from '../../static/images/sponsors/Netsecuris.jpg';
import ConAgraLight from "../../static/images/sponsors/conagra-light-logo.webp";
import Protiviti from "../../static/images/sponsors/protiviti.png";
import ZScaler from "../../static/images/sponsors/zscaler.png";
import BairdHolm from "../../static/images/sponsors/bairdholm.png";
import GuidepointDark from "../../static/images/sponsors/guidepoint_black.png";
import Tanium from "../../static/images/sponsors/Tanium.png";
import Axonius from "../../static/images/sponsors/Axonius.png";
import Wiz from "../../static/images/sponsors/wiz.png";
import Code42 from "../../static/images/sponsors/code42.png";
import "./Sponsors.scss";

export default class Sponsors extends Component {
	static displayName = "Sponsors";

	render() {
		return (
			<div className="sponsors">
				<div>
					<h3>Sponsorship</h3>
					<div className="text-block">
						<p>
							We understand your products and services play an
							important part in our security and we can’t put on
							this conference without your help. The Omaha
							metropolitan area is home to 45,000 businesses,
							including Fortune 500 companies, large financial
							companies, global technology service providers, the
							University of Nebraska system, and important U.S.
							Armed forces operations. If you’re not already doing
							business in Omaha, you should be.
						</p>
						<p>
							Get your name and product in front of hundreds of
							security professionals and key decision makers with
							a Kernelcon sponsorship. We will be happy to work
							with you on details of your sponsorship, options
							available and sponsorship fees.
						</p>
						<p>
							While we do appreciate our sponsors, please
							understand that Kernelcon is first and foremost for
							our attendees so we can only accept sponsors who
							have their best interests in mind.
						</p>
						<div className="tab-title">
							Sponsorships are now available. Please contact{" "}
							<a
								href="mailto:sponsor@kernelcon.org?Subject=Sponorship"
								style={{ textDecoration: "underline" }}
								target="_top">
								sponsor@kernelcon.org
							</a>
							.
						</div>
					</div>
				</div>
				<div>
					<h3 className="title">Sponsor a Student</h3>
					<div className="text-block">
						<h4>
							Interested in sponsoring a student for this year's
							Kernelcon?
						</h4>
						<p>
							With your assistance, Kernelcon hopes to sponsor up
							to 50 students this year. In addition to entry for
							you, your money will help pay for a student’s
							admission, hotel room (for traveling students), and
							this year’s “hacker education kit”.
						</p>
						<div className="tab-title">
							Would you like to hear more? Please contact{" "}
							<a
								href="mailto:sponsor@kernelcon.org?Subject=Sponorship"
								style={{ textDecoration: "underline" }}
								target="_top">
								sponsor@kernelcon.org
							</a>
							.
						</div>
					</div>
				</div>
				<div className="spons-page">
					<h1 className="title">Our Sponsors</h1>
					<div className="text-block">
						<p>
							We would like to thank all of our sponsors who make
							Kernelcon the best it can be. Without our sponsors,
							our conference wouldn't happen.
						</p>
					</div>

					<div className="text-block spons-groups">
						{/*              <div className='spons-block'>
                <h2 className='gold spons-title'>Platinum</h2>
                <a href="https://www.netscout.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={netscout}
                    className='spons-img plat-spons'
                    alt="NETSCOUT"/>
                </a>
                <a href="https://www.endgame.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={endgamelogo}
                    className='spons-img plat-spons'
                    alt="ENDGAME"/>
                </a>
              </div>
              */}

              <div className='spons-block'>
                <h2 className='gold spons-title'>Gold</h2>
                <a href="https://aws.amazon.com/"
                  target="_blank"
                  className='light-mode-logo'
                  rel='noopener noreferrer'>
                  <img src={AWSLight}
                    className='spons-img other-spons'
                    alt="AWS"/>
                </a>
                <a href="https://aws.amazon.com/"
                  target="_blank"
                  className='dark-mode-logo'
                  rel='noopener noreferrer'>
                  <img src={AWSDark}
                    className='spons-img other-spons'
                    alt="AWS"/>
                </a>
                <a href="https://www.conagrabrands.com/"
                  target="_blank"
                  className='dark-mode-logo'
                  rel='noopener noreferrer'>
                  <img src={ConAgraLight}
                    className='spons-img other-spons'
                    alt="Conagra"/>
                </a>
                <a href="https://www.conagrabrands.com/"
                  target="_blank"
                  className='all-dark light-mode-logo'
                  rel='noopener noreferrer'>
                  <img src={ConAgraLight}
                    className='spons-img other-spons'
                    alt="Conagra"/>
                </a>
              </div>

              <div className='spons-block'>
                <h3 className='silver spons-title'>Silver</h3>
                <a href="https://www.contrastsecurity.com/"
                  target="_blank"
                  className='dark-mode-logo'
                  rel='noopener noreferrer'>
                  <img src={ContrastLightMode}
                    className='spons-img other-spons'
                    alt="Contrast Security"/>
                </a>
                <a href="https://www.contrastsecurity.com/"
                  target="_blank"
                  className='light-mode-logo'
                  rel='noopener noreferrer'>
                  <img src={ContrastDarkMode}
                    className='spons-img other-spons'
                    alt="Contrast Security"/>
                </a>
                <a href="https://fnbo.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={Fnbo}
                    className='spons-img other-spons'
                    alt="First National Bank of Omaha"/>
                </a>
                <a href="https://redcanary.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={RedCanary}
                    className='spons-img other-spons'
                    alt="Red Canary"/>
                </a>
              </div>

              <div className='spons-block'>
                <h4 className='bronze spons-title'>Bronze</h4>
                <a href="https://www.appgate.com/"
                      target="_blank"
                      rel='noopener noreferrer'
                      className='light-mode-logo'>
                      <img src={AppGateDark}
                        className='spons-img other-spons'
                        alt="AppGate"/>
                    </a>
                    <a href="https://www.appgate.com/"
                      target="_blank"
                      rel='noopener noreferrer'
                      className='dark-mode-logo'>
                      <img src={AppGateLight}
                        className='spons-img other-spons'
                        alt="AppGate"/>
                    </a>
              </div>

              <div className='spons-block'>
                <h5 className='tin spons-title'>Tin</h5>
                <a href="https://www.bairdholm.com/"
                      target="_blank"
                      rel='noopener noreferrer'
                      className=''>
                      <img src={BairdHolm}
                        className='spons-img other-spons'
                        alt="Biard Holm"/>
                    </a>
              </div>


            
              <div className='spons-block'>
                <h4 className='ctf-spons spons-title'>Party Sponsors</h4>
                <div className='gp-logo'>
                <a href="https://www.guidepointsecurity.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='all-bright dark-mode-logo'>
                  <img src={GuidepointDark}
                    className='spons-img other-spons'
                    alt="Guidepoint Security"/>
                </a>
                <a href="https://www.guidepointsecurity.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='light-mode-logo'>
                  <img src={GuidepointDark}
                    className='spons-img other-spons'
                    alt="Guidepoint Security"/>
                </a>
                </div>
                <div className='sub-party-logos'>
                <span className='sub-party-logos'>
                <a href="https://www.axonius.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='all-bright dark-mode-logo'>
                  <img src={Axonius}
                    className='spons-img sub-party-spons'
                    alt="Axonius"/>
                </a>
                <a href="https://www.axonius.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='light-mode-logo'>
                  <img src={Axonius}
                    className='spons-img sub-party-spons'
                    alt="Axonius"/>
                </a>

                <a href="https://www.code42.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='all-bright dark-mode-logo'>
                  <img src={Code42}
                    className='spons-img sub-party-spons'
                    alt="Code42"/>
                </a>
                <a href="https://www.code42.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='light-mode-logo'>
                  <img src={Code42}
                    className='spons-img sub-party-spons'
                    alt="Code42"/>
                </a>
</span>
<span className='sub-party-logos'>
                <a href="https://www.tanium.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='all-bright dark-mode-logo'>
                  <img src={Tanium}
                    className='spons-img sub-party-spons'
                    alt="Tanium"/>
                </a>
                <a href="https://www.tanium.com/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='light-mode-logo'>
                  <img src={Tanium}
                    className='spons-img sub-party-spons'
                    alt="Tanium"/>
                </a>

                <a href="https://www.wiz.io/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='all-bright dark-mode-logo'>
                  <img src={Wiz}
                    className='spons-img sub-party-spons'
                    alt="Wiz"/>
                </a>
                <a href="https://www.wiz.io/"
                  target="_blank"
                  rel='noopener noreferrer'
                  className='light-mode-logo'>
                  <img src={Wiz}
                    className='spons-img sub-party-spons'
                    alt="Wiz"/>
                </a>
</span>
                </div>
              </div>


              


              <div className='spons-block'>
                <h4 className='ctf-spons spons-title'>CTF Sponsors</h4>
                <a href="https://www.checkpoint.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={CheckPoint}
                    className='spons-img other-spons'
                    alt="Check Point"/>
                </a>
                <a href="https://www.protiviti.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={Protiviti}
                    className='all-bright dark-mode-logo spons-img other-spons'
                    alt="Protiviti"/>
                </a>
                <a href="https://www.protiviti.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={Protiviti}
                    className='light-mode-logo spons-img other-spons'
                    alt="Protiviti"/>
                </a>
              </div>

              <div className='spons-block'>
                <h4 className='gold spons-title'>Other Sponsors</h4>
                <a href="https://toool.us/"
                  target="_blank"
                  className='dark-mode-logo toool-logo'
                  rel='noopener noreferrer'>
                  <img src={ToooLDarkMode}
                    className='spons-img other-spons'
                    alt="TOOOL"/>
                </a>
                <a href="https://toool.us/"
                  target="_blank"
                  className='light-mode-logo toool-logo'
                  rel='noopener noreferrer'>
                  <img src={TooolLightMode}
                    className='spons-img other-spons'
                    alt="TOOOL"/>
                </a>
                <a href="https://nostarch.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={NoStarchPress}
                    className='spons-img other-spons'
                    alt="NoStarchPress"/>
                </a>
                <br />
              </div>


						<div className='spons-block'>
                <div className='foodbev-spons'>
                
                  <div className='single-foodbev-spons'>
                    <h6 className='text-highlight spons-title'>Coffee</h6>
                    <a href="https://www.appgate.com/"
                      target="_blank"
                      rel='noopener noreferrer'
                      className='light-mode-logo'>
                      <img src={AppGateDark}
                        className='spons-img fdbev-spons'
                        alt="AppGate"/>
                    </a>
                    <a href="https://www.appgate.com/"
                      target="_blank"
                      rel='noopener noreferrer'
                      className='dark-mode-logo'>
                      <img src={AppGateLight}
                        className='spons-img fdbev-spons'
                        alt="AppGate"/>
                    </a>
                    <a href="https://www.zscaler.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={ZScaler}
                        className='spons-img fdbev-spons'
                        alt="zscaler"/>
                    </a>
                  </div>

                  <div className='single-foodbev-spons'>
                    <h6 className='text-highlight spons-title'>Popcorn</h6>
                    <a href="https://www.checkpoint.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={CheckPoint}
                        className='spons-img fdbev-spons'
                        alt="Check Point"/>
                    </a>
                    <a href="https://redcanary.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={RedCanary}
                        className='spons-img fdbev-spons'
                        alt="Red Canary"/>
                    </a>
                    <a href="https://www.netsecuris.com/"
                      target="_blank"
                      rel='noopener noreferrer'>
                      <img src={Netsecuris}
                        className='spons-img fdbev-spons'
                        alt="Netsecuris"/>
                    </a>
                  </div>

                </div>
              </div>
					</div>
				</div>
			</div>
		);
	}
}
