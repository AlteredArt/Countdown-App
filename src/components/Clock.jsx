import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;
        return (
            <div className='Clock'>
                <div>
                    <div className="days">{days} Days</div>
                    <div className='hours'>{hours} Hours</div>
                    <div className='minutes'>{minutes} Minutes</div>
                    <div className='seconds'>{seconds} Seconds</div>
                </div>
            </div>
        )
    }
}

export default Clock;