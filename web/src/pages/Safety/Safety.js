import React, { Component } from 'react';
import './Safety.scss';

class Safety extends Component {
  static displayName = 'Safety';

  render() {
    return (
			<div className="con-page">
				<div className="text-area">
					<h3 className="title">Safety</h3>
          <p className="tab-paragraph">The Kernelcon Crew takes public health and safety extremely seriously. We plan to follow all local guidelines for our in-person conference. Any updates will be communicated to registered attendees and posted here.</p>

          <div className="tab-title">Travel</div>
					<p className="tab-paragraph">
          Please check travel protocols and guidance before traveling. We are committed to providing you a safe and relaxing hotel stay: for information about our initiatives related to COVID, please visit {" "}
						<a
							href="https://covid.hilton.com"
							className="text-highlight"
							rel="noopener noreferrer"
							target="_blank">
							covid.hilton.com
						</a>{""}. For more information about the evolving local health and safety requirements, please check local governments' current guidance.
					</p>
          <p className="tab-paragraph">More information on {" "}
						<a
							href="https://www.hilton.com/en/p/what-to-expect/"
							className="text-highlight"
							rel="noopener noreferrer"
							target="_blank">
							Hilton Travel and Flexibility and Safety Standards
						</a>{""}.
          </p>

          <div className="tab-title">Face Coverings</div>
          <p className="tab-paragraph">We ask that you follow all local guidelines and laws with respect to practicing social distancing and wearing a mask in public areas. Please check with local public health and government authorities regarding guidelines or requirements that may be in place for the location of your stay.</p>
				
				</div>
			</div>
    );
  }
}

export default Safety;


