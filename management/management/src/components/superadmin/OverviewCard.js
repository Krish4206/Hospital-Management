import React from 'react'
import { CircularProgressbarWithChildren,CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './OverviewCard.css';

const OverviewCard = ({ title, count }) => {
    const percentage = 95;

  return (
    <div className="overview-card">
        <div style={{ width: 80, height: 80 }}>
            <CircularProgressbarWithChildren
                value={percentage}
                styles={buildStyles({

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    strokeWidth : 5,
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    fontSize : 30,
                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}
            >
               <div className="arrow-icon">↑</div> 
            </CircularProgressbarWithChildren>
        </div>

      <div className="overview-content">
        <h3>{title}</h3>
        <p>{count}</p>
      </div>

    </div>
  )
}

export default OverviewCard
