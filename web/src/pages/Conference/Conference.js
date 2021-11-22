import React, { Component } from "react";
import "./Conference.scss";

export default class Conference extends Component {
	static displayName = "Conference";

	render() {
		return (
			<div className="con-page">
				<div className="text-area">
					<h3 className="title">Conference</h3>
					<p className="tab-paragraph">
						If you're ready to pull the trigger, below is the
						registration page for Kernelcon 2022!
					</p>
{/* 
					<a
						className="reg-button"
						href="https://reg.kernelcon.org"
						rel="noopener noreferrer"
						target="_blank">
						Register Now
					</a> */}

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

					{/* <p className="tab-paragraph">
						Also, check out our open calls if you'd like to
						contribute! Our hotel rate is available on our Venue
						page!
					</p> */}
          <br />
					<p className="tab-paragraph">
						Please check back again soon! As the conference gets
						more and more ready, this page will be updated with all
						the great stuff we plan to offer. Hope to see you in
						Omaha in 2022!
					</p>
				</div>
        <div className="tab-title">Stay Tuned!</div>
        <p className="tab-paragraph">We have a TON more to announce as the event begins to take shape including in-depth professional training, hands-on villages, competitions, and more surprises. Follow along on twitter or right here for updates!</p>

					<div className="tab-title">Volunteers</div>
					<p className="tab-paragraph">
						Thanks to all those who helped make the first three
						Kernelcons a success! We will be reaching out to our
						original volunteers to see if they are interested in
						volunteering for Kernelcon 2022. For those of you who
						are new and would like to volunteer, keep an eye out for
						an update here and{" "}
						<a
							href="https://twitter.com/_kernelcon_"
							className="text-highlight"
							rel="noopener noreferrer"
							target="_blank">
							@_kernelcon_
						</a>{" "}
						on twitter.
					</p>

			</div>
		);
	}
}
