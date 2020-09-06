import CountdownComponent from './countdown-component'
import dayjs from "dayjs";
import React from 'react';

class Countdown extends React.Component {
	state = {
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined
    }
    updateTimer() {
        const { timeTillDate, timeFormat } = this.props;
        const then = dayjs(timeTillDate, timeFormat);
        const now = dayjs();
        const countdown = dayjs(then - now);
        const days = countdown.format('D');
        const hours = countdown.format('HH');
        const minutes = countdown.format('mm');
        const seconds = countdown.format('ss');

        this.setState({ days, hours, minutes, seconds });
    }
	
	componentDidMount() {
        this.updateTimer();
		this.interval = setInterval(() => {
            this.updateTimer();
		}, 1000);
	}

	componentWillUnmount() {
		if(this.interval) {
			clearInterval(this.interval);
		}
	}
	
	render() {
		const { days, hours, minutes, seconds } = this.state;
		const daysRadius = mapNumber(days, 30, 0, 0, 360);
		const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
		const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
		const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

		if(!seconds) {
			return null;
		}
		
		return (
            <CountdownComponent
                days={days}
                daysRadius={daysRadius}
                hours={hours}
                hoursRadius={hoursRadius}
                minutes={minutes}
                minutesRadius={minutesRadius}
                seconds={seconds}
                secondsRadius={secondsRadius}
            />
		);
	}
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
export default Countdown;