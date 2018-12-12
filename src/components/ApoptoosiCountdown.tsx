import * as React from 'react';
import { stringify } from 'querystring';

interface IApoptoosiCountdown {
    startDate: Date;
    currentDate: Date;

}


export class ApoptoosiCountdown extends React.Component<{}, IApoptoosiCountdown> {

    countdown: any;
    constructor(props){
        super(props);

        this.state = {
            startDate: new Date(2019, 2, 2, 15, 0, 0, 0),
            currentDate: new Date(),
        };
        this.tick = this.tick.bind(this);
        this.getDateString = this.getDateString.bind(this);
    }

    tick() {
        this.setState({currentDate: new Date()});
    }
    
    componentDidMount(){
        this.countdown = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.countdown);
    }

    getDateString(){
        const diffDate = this.state.startDate.getTime() - this.state.currentDate.getTime();
        //diffDate is in milliseconds
        var seconds = Math.floor(diffDate / 1000);
        // 60 seconds * 60 * 24
        const days = Math.floor(seconds / (60 * 60 * 24));
        // Take calculated days from the seconds
        seconds -= days * 60 * 60 * 24;
        // Get hours from seconds
        const hours = Math.floor(seconds / 3600);
        // Take hours from seconds
        seconds -= hours * 3600;
        // Calculate minutes 
        const minutes = Math.floor(seconds / 60);
        // Take minutes from seconds
        seconds -= minutes * 60;
        // Stringify results
        return `${days < 10 ? "0" + JSON.stringify(days) : JSON.stringify(days)}:
                ${hours < 10 ? "0" + JSON.stringify(hours) : JSON.stringify(hours)}:
                ${minutes < 10 ? "0" + JSON.stringify(minutes) : JSON.stringify(minutes)}:
                ${seconds < 10 ? "0" + JSON.stringify(seconds) : JSON.stringify(seconds)}`;
    }

    render(){
        return(
            <h1>{this.getDateString()}</h1>
        )
    }

}