import React, { Component } from 'react';
import Modal from '../../../components/Modal/Modal';
import Donut from '../../../components/Charts/Donut';
import './TalksSchedule.scss';

import config from 'agendaConfig';

export default class TalksSchedule extends Component {
  static displayName = 'TalksSchedule';

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dayIndex: 0,
      showTabNum: 0,
      modal: {
        title: '',
        description: '',
        techLevel: '',
        authors: [],
        time: ''
      }
    };
  }

  toggleScheduleDate = (index) => {
    this.setState({
      dayIndex: index,
      showTabNum: index
    });
  };

  popModal = (title, description, techLevel, authors, time) => e => {
    this.setState({
      modal:{
        title: title,
        description: description,
        techLevel: techLevel,
        authors: authors,
        time: time
      }
    }, () => {
      this.toggleModal();
    });
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const currentDay = config[this.state.dayIndex];
    const dayOfWeek = currentDay.dayOfWeek;

    const scheduleTabs = config.map((ele, index) => {
      return (
        <li key={index}>
          <input type='radio'
            onChange={() => {this.toggleScheduleDate(index)}}
            name='schedule-tabs'
            id={`tab${index}`}
            checked={index === this.state.showTabNum ? true : false} />
            <label htmlFor={`tab${index}`}>{ele.dayOfWeek}<span>{ele.date}</span></label>
        </li>
      );
    });

    const tabsHeader = (
      <>
        <ul className='tabs'>
          {scheduleTabs}
        </ul>
        <div className='schedule-heading'>{`Tentative ${dayOfWeek} Speaking Schedule`}</div>
        <div className='tz-note'>Note: All times listed are in Central Time.</div>
      </>
    );


    const trackHeaders = currentDay.roomsInfo.map((ele, index) => {
      return (
        <div key={index} className='track' style={{gridColumn: index+1, gridRow: 1}}>{ele.roomName}</div>
      );
    });

    let rows = 2;
    const totalCols = currentDay.roomsInfo.length;
    const talksGrid = currentDay.talks.map((ele, index) => {
      const gridColumnStart = ele.roomIndex[0] + 1;
      const gridColumnEnd = ele.roomIndex[ele.roomIndex.length - 1] + 2;
      const gridColumn = `${gridColumnStart} / ${gridColumnEnd}`;

      const gridRow = ele.minutes >= 42 ? `${rows} / ${rows + 2}` : `${rows}`; 

      if (gridColumnEnd - 1 >= totalCols && ele.minutes < 42) {
        rows++;
      } else if (gridColumnEnd - 1 >= totalCols && ele.minutes >= 42) {
        rows+= 2;
      }
      
      const authors = ele.authors.map((author, index) => {
        const hyphen = index === 0 && author.name ? ' - ' : '';
        return (
          `${hyphen}${author.name}`
        )
      });

      return (
        <a style={{gridColumn: gridColumn, gridRow: gridRow}}
          key={index} onClick={this.popModal(ele.talkTitle, ele.talkDescription, ele.talkTechLevel, ele.authors, ele.time)}>
          <div className='box'>
            <span className='talk-time'>{ele.time}</span>
            <span className={`${ele.minutes >= 42 ? "truncate-overflow-4 truncate-overflow" : "truncate-overflow-1 truncate-overflow"}`}>{`${ele.talkTitle}${authors}`}</span>
          </div>
        </a>
      );
    });

    let gridTemplateRows = `42px `.repeat(rows - 1);

    const gridTemplateColumnsPercentage = (100 / totalCols).toFixed(1);
    const gridTemplateColumnsString = `calc(${gridTemplateColumnsPercentage}% - 10px) `;
    const gridTemplateColumns = `${gridTemplateColumnsString.repeat(totalCols)}`;
    
    const authors = this.state.modal.authors.map((ele, index) => {
      const author = index ? ` & ${ele.name}` : ele.name;
      return (
        author
      );
    });

    const percentTech = this.state.modal.techLevel ? (this.state.modal.techLevel / 5) * 100 : '';

    return (
      <div className='schedule-talks'>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}
          title={this.state.modal.title}
        >

          <div className='modal-content'>
            {/* {this.state.modal.} */}
            {this.state.modal.authors.length > 0 && this.state.modal.authors[0].name && <div className='modal-speakers'>
              {`${this.state.modal.authors.length > 1 ? 'Speakers' : 'Speaker'}: `}<span className='modal-authors'>{authors}</span>
            </div>}
            <div className='modal-headline'>
              <div className='modal-headline-time'>Start: <span className='modal-time'>{this.state.modal.time}</span></div>
              {percentTech && <div className='modal-headine-percentage'>
                <Donut value={percentTech} />
		            <span className='tech-label'>% technical</span>
              </div>}
            </div>
            <div className='modal-description'>
              <div className='modal-description-heading'>Description:</div>
              {this.state.modal.description}
            </div>
          </div>         
        </Modal>


        {tabsHeader}
        <div className={`grid-wrapper`}
          style={{gridTemplateColumns: gridTemplateColumns, gridTemplateRows: gridTemplateRows}}>
          {trackHeaders}
          {talksGrid}

        </div>
      </div>
    )
  }
}