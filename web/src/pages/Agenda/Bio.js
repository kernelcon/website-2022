import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Agenda.scss';

export default class Bio extends Component {
  static displayName = 'Bio';

  constructor(props) {
    super(props);
    this.state = {
    	name: null,
    	bio: null,
    	twitter: null,
      image: null
    };
  }

  componentDidMount() {
  	this.setState({
  		name: this.props.location.state.name,
  		bio: this.props.location.state.bio,
  		twitter: this.props.location.state.twitter,
      image: this.props.location.state.image
  	});
  }


  static propTypes = {
  	name: PropTypes.string,
  	bio: PropTypes.string,
  	twitter: PropTypes.string,
    image: PropTypes.string
  };

  static defaultProps = {};

  getImage(ele) {
    const imageName =  ele.image ? ele.image : 'man-silhoutte.png';
    const imgUrl = require(`../../static/images/trainers/${imageName}`);

    return imgUrl;
  }


  render() {
  	const twitter_mobile = this.state.twitter ? this.state.twitter.substr(1) : '';
    function createMarkup(ele) {
      return {__html: ele};
    }
    
    return (
      <div className='bio-section'>
      	<h1>{this.state.name}</h1>
      	<h4>
      		<a target="_blank"
      			className='text-highlight'
	      		rel="noopener noreferrer" 
	      		href={`https://twitter.com/${twitter_mobile}`}>
	      		{this.state.twitter}
      		</a>
      	</h4>
        <div className='training-text' dangerouslySetInnerHTML={createMarkup(this.state.bio)} />
      </div>
  	);
  }
}