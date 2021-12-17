import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Training.scss';

import config from 'trainingConfig';

class Training extends Component {
  static displayName = 'Training';

  render() {
    // constants, can change from year to year.  Along with config update, should generate new training content.
    const baseUrl = 'training';
    const dayOneTraining = 'Wednesday, March 30';
    const dayTwoTraining = 'Thursday, March 31';
    const trainingYear = '2022';

    // course descriptions may require their own html (i.e. when instructors put bullets or multiple paragraphs)
    function createMarkup(ele) {
      return {__html: ele};
    }

    const filteredTraining = config.filter(ele => !ele.hide);
    const sortedAndFilteredTraining = filteredTraining.sort((a, b) => {
      return a.course.title.localeCompare(b.course.title);
    });

    const training = sortedAndFilteredTraining.map((ele, idx) => {
      const instructors = ele.instructors.map((el, idx) => {
        return (
          <div className='training-instructor text-highlight' key={idx}>
            <Link to={{ 
              pathname: '/bio/',
              state: {
                name: el.name,
                bio: el.bio,
                twitter: el.twitter_handle,
                image: el.image_name
              }
            }}>
              {el.name}
            </Link>
          </div>
        );
      });

      return (
        <div className='training-card'
          key={`${ele}-${idx}`}
          name={ele.id}
          id={ele.id}>
          <a href={`/${baseUrl}#${ele.id}`}>
            <div className='training-title'>
              <span>{ele.course.title}</span>
              <span>{ele.course.days > 1 ? '$1,000' : '$500'}</span>
            </div>
          </a>
          <div className='training-instructors'>
            <div className='training-heading'>{ele.instructors.length > 1 ? 'Instructors' : 'Instructor'}:</div>
            <div className='training-instructor-names'>{instructors}</div>
          </div>
          <div className='training-format'>
            <div className='training-heading'>Format:</div>
            <div>{ele.course.days} {ele.course.days > 1 ? 'days training' : 'day training'}</div>
          </div>
          <div className='training-format'>
            <div className='training-heading'>{ele.course.days > 1 ? 'Dates:' : 'Date:'}</div>
            <div>{ele.course.days > 1 ? `${dayOneTraining} and ${dayTwoTraining}, ${trainingYear}` : ele.day > 1 ? `${dayTwoTraining}, ${trainingYear}`: `${dayOneTraining}, ${trainingYear}`}</div>
          </div>
          <div className='training-format'>
            <div className='training-heading'>{ele.course.days > 1 ? 'Times:' : 'Time:'}</div>
            <div>{ele.course.days > 1 ? `${ele.course.time} each day` : ele.course.time}</div>
          </div>
          <div className='training-desc' dangerouslySetInnerHTML={createMarkup(ele.course.description.short_form)} />
  				{ele.course.prerequisites && <div className='training-prereqs'>
  					<div className='training-heading'>Prerequisites:</div>
  					<div className='training-text' dangerouslySetInnerHTML={createMarkup(ele.course.prerequisites)} />
  				</div>}
  				{ele.course.equipment && <div className='training-equipment'>
  					<div className='training-heading'>Required Equipment:</div>
  					<div className='training-text' dangerouslySetInnerHTML={createMarkup(ele.course.equipment)} />
  				</div>}
        </div>
      );
    });

    return (
      <div className='training'>
        <h3>Training</h3>
        <div className='text-highlight'>More Training Courses Coming Soon!</div>
        {training}
      </div>
    );
  }
}

export default Training;

