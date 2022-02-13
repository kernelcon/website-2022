import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';

// import TalksSchedule from './TalksSchedule';
// import ConSchedule from './ConSchedule';
// import TrainingSubmissions from './TrainingSubmission';
// import Workshops from './Workshops';

import CallOuts from '../../components/CallOuts/CallOuts';
import kingpin from "../../static/images/trainers/kingpin.png";


import villageConfig from 'villageConfig';
import competitionConfig from 'competitionConfig';

import './Agenda.scss';

export default class Agenda extends Component {
  static displayName = 'Agenda';

  constructor(props) {
    super(props);
    this.state = {
      defaultTab: '',
      goToClass: ''
    }
  }

  componentWillMount() {
    //const trainingClasses = ['aai', 'atomicpurple', 'bhgo', 'csanalysis', 'elk', 'webhacking', 'ghidra', 'k8s', 'linfn6', 'netanalysis', 'binaryninja'];
    //const workshops = ['iotlights', 'iotplugs', 'lightexfil', 'rtlsdr', 'sensing'];
    let defaultTab = window.location.href.split('#')[1];
    // const goToClass = defaultTab;
    let className = '';

    // if (trainingClasses.includes(goToClass)) {
    //   defaultTab = 'training';
    //   className = goToClass;
    // } else if (workshops.includes(goToClass)) {
    //   defaultTab = 'workshops';
    //   className = goToClass;
    // }

    this.setState({
      defaultTab: defaultTab,
      goToClass: className
    });
  }

  componentDidMount() {
    console.log('this.state', this.state);
    this.setState({...this.state});
    // const goToClass = this.state.goToClass;

    // if (goToClass !== '') {
    //   const yOffset = -100;
    //   const element = document.getElementsByName(goToClass)[0];
    //   const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    //   window.scrollTo({top: y, behavior: 'smooth'});
    // }
  }

  changeTab(tabId) {
    // window.history.pushState(this.props.location.pathname, '', `#${tabId}`);
  }

  getTabs(vert) {
    return (
      <Tabs defaultTab={this.state.defaultTab}
        onChange={(tabId) => { this.changeTab(tabId) }}
        vertical={vert}>
        <TabList>
          {/* <Tab tabFor="schedule">Schedule</Tab> */}
          <Tab tabFor="keynotes">Keynote</Tab>
          {/* <Tab tabFor="training">Training</Tab>
          <Tab tabFor="workshops">Workshops</Tab> */}
          <Tab tabFor="villages">Villages</Tab>
          <Tab tabFor="competitions">Competitions</Tab>
          {/* <Tab tabFor="careers">Careers</Tab> */}
        </TabList>
        {/* <TabPanel tabId="schedule">
          <div className='text-area'>
          	<TalksSchedule />
            <h3>Coming Soon...</h3>
          </div>
        </TabPanel> */}
        <TabPanel tabId="keynotes">
          <div className='text-area'>
            <h3 className='title'>Keynote</h3>
            <div className='keynote-section'>
              <div className='keynote-left'>
                <h4 className='keynote-name'>Joe Grand</h4>
                <div className='keynote-subtitle'>
                  <div className='keynote-company'>
                    <a href='http://www.grandideastudio.com/' target="_blank" rel="noopener noreferrer">
                      Grand Idea Studio
                    </a>
                  </div>
                  <div className='keynote-div'>|</div>
                  <div className='keynote-handle'>
                    <a href='https://twitter.com/joegrand' target="_blank" rel="noopener noreferrer">
                      @joegrand
                    </a>
                  </div>
                </div>

                <div className='keynote-bio'>
                <p className='keynote-bio-subtitle'>We all loved watching him <a className="text-highlight" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=AQpv_6Se6VM&list=PL9RA5HoG1guy7oz3m4Y0aHqsNumai2o8v&index=6">reverse engineer hardware components in Hack Live</a>. And now he's back as our 2022 Keynote Speaker... please welcome, Joe Grand!</p>
                  <p className='keynote-para'>Joe Grand, also known as Kingpin, is a computer engineer,
                  hardware hacker, teacher, advisor, daddy, honorary doctor, and
                  proprietor of Grand Idea Studio. He was formerly a technological juvenile delinquent, member of
                  legendary hacker group L0pht Heavy Industries, co-host of
                  Discovery Channel's Prototype This, and DEFCON's original
                  electronic badge designer. He has been creating, exploring, and
                  manipulating electronic systems since the 1980s.</p>
                </div>

                {/* <div className='keynote-talk'>
                  <div className='keynote-topic'>Now, For Something Completely Different</div>
                  <div className='keynote-abstract'>
                    <p className='tab-paragraph'>Over the past two years we have see a perceptible shift in security issues.  Traditional architectures like AD and DMZs are falling away and are being replaced with Cloud and IoT.  So, how do we approach this new world?</p>
                    <p className='tab-paragraph'>In this talk, John will cover some core tools and techniques we use at BHIS every day to attack organizations.  We will also use these tools and techniques to help frame attendees in their approach and mindset to testing these technologies.</p>
                  </div>
                </div> */}
               </div>
               <div className='keynote-right'>
                <img src={kingpin}
                  alt='Joe Grand'
                  className='keynote-image'/>
               </div>
            </div>
            {/* <div className='keynote-section'>
              <div className='keynote-left'>
                <h4 className='keynote-name'>Sophia d'Antoine</h4>
                <div className='keynote-subtitle'>
                  <div className='keynote-company'>
                    <a href='https://www.sophia.re' target="_blank" rel="noopener noreferrer">
                      Hacker in Residence at NYU
                    </a>
                  </div>
                  <div className='keynote-div'>|</div>
                  <div className='keynote-handle'>
                    <a href='https://twitter.com/Calaquendi44' target="_blank" rel="noopener noreferrer">
                      @Calaquendi44
                    </a>
                  </div>
                </div>

                <div className='keynote-bio'>
                  <p className='tab-paragraph'>Sophia is the founder of Margin Research, based in New York City, and the Hacker in Residence at NYU. Previously she has served at the NSA as well as a commercial security company. She is an alumnus of RPI where she taught Modern Binary Exploitation and helped run RPISEC, the university CTF team.</p> 
                  <p className='tab-paragraph'>Sophia has spoken at over a dozen conferences worldwide on topics ranging from automated exploitation to information operations. Her current work focuses on finding novel solutions to unique security problems, software vulnerabilities, and information operations.</p>
                  <p className='tab-paragraph'>She has co-authored policy papers on topics in offensive cyber including an <a href='https://www.lawfareblog.com/risks-huawei-risk-mitigation' className='text-highlight' target="_blank" rel="noopener noreferrer">Executive Order and a Lawfare article</a> on the risks associated with Huawei 5G. <a className='text-highlight' href='https://www.sophia.re/#pcs' target="_blank" rel="noopener noreferrer">A mostly complete listing of conference talks and publications.</a></p>
                </div>

                <div className='keynote-talk'>
                  <div className='keynote-topic'>In Search of Lost Bytes: Hardware Implants and the Trouble with Supply Chains</div>
                  <div className='keynote-abstract'>
                    <p className='tab-paragraph'>Digital markets have quickly grown to international proportions, complexities in materials, development, and distribution have developed accordingly, resulting in market efficiency and, often overlooked, incalculable risks.</p>
                    <p className='tab-paragraph'>There is a fine line between acceptable and irreconcilable risk, while some risks are mitigatable, others are not, and ignoring the facts has disproportionate consequences. This presentation will explore modern supply chain security risks through a technical deep dive of 5G infrastructure and the political battles surrounding it.</p>
                    <p className='tab-paragraph'>However, a wider acknowledgment of the supply chain problem doesn’t make it go away. We need to understand the inherent hardware vulnerabilities exposed. Currently, confidence in hardware security relies too much implicit trust — overlooking serious threats. Assurance in this area is hard won, manual, and costly.</p>
                    <p className='tab-paragraph'>To highlight this, several hardware implant techniques will be discussed, showcasing various attack methods as well as the point at which they are most likely to be exploited in a standard supply chain.</p>
                  </div>
                </div>


              </div>
              <div className='keynote-right'>
                <img src={sophia}
                  alt="Sophia d'Antoine"
                  className='keynote-image'/>
              </div>
            </div> */}
          </div>
        </TabPanel>
        {/* <TabPanel tabId="training" className="training">
          <div className='text-area'>
            <h3 className='title'>Training -<div className='sold-out'>SOLD OUT - we'll bring back more next year!</div></h3>
            <div className='training-call-out'><b className='note'>Note:</b><em>Conference admission included with every training class!  If you've already registered and want to add a training class, please contact registration@kernelcon.org.</em></div>
            <TrainingSubmissions />
          </div>
        </TabPanel> */}


        <TabPanel tabId="villages">
          <div className='text-area'>
            
            <CallOuts title='Villages' config={villageConfig} />

          </div>
        </TabPanel>

        <TabPanel tabId="competitions">
          <div className='text-area'>

            <CallOuts title='Competitions' config={competitionConfig} />

          </div>
        </TabPanel>


        {/* <TabPanel tabId="careers">
          <div className='text-area'>
            <h3 className='title'>Careers</h3>            
            <div className='competition-area'>
              <div className='competition-section'>
                <div className='competition-name-logo'>
                  <div className='competition-name'>Resume Review</div>
                  <div className='competition-logo'>
                    <img src={resume} alt='Resume Review'/>
                  </div>
                </div>
                <div className='competition-description'>
                  Did you know your should update your resume every six months, even if you’re not looking for a new job?  Have a recruiting expert take a look at your resume and assist with advice on making it the best it can be.
                  <p style={{marginTop: '18px'}}>Sam Harvey, Warren Fish and Sydney Hardin of TEKsystems are volunteering on Friday, March 27th at the Kernelcon Resume Review table to provide professional resume review assistance. Attendees are welcome to walk up to the table at any point throughout the day and should expect to spend 15-20 minutes discussing resume updates. A printer will be located at the table for all attendees to print and then partner with the available team member on resume recommendations.</p>
                </div>
              </div>

              <div className='competition-section'>
                <div className='competition-name-logo'>
                  <div className='competition-name'>Hiring or Looking?</div>
                  <div className='competition-logo'>
                    <img src={hiringlooking} alt='Hiring Or Looking?' />
                  </div>
                </div>
                <div className='competition-description'>
                  Pick up a Hiring or Looking bracelet at the Kernelcon Resume Review table and wear it around the con to spark a conversation.  Who knows, you might just find your dream job or your next superstar employee right at Kernelcon! 
                </div>
              </div>


            </div>
          </div>
        </TabPanel> */}
      </Tabs>
    );
  }

  render() {
    return (
      <div className='container'>
			<div className="con-page">
				<div className="text-area">
          <h3 className='title'>Agenda</h3>
            <MediaQuery minDeviceWidth={1000}>
              {this.getTabs(true)}
            </MediaQuery>
            <MediaQuery maxDeviceWidth={999}>
              {this.getTabs(false)}
            </MediaQuery>
        </div>
        </div>
      </div>
    );
  }
}