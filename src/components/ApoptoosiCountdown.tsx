import * as React from 'react';

interface IApoptoosiCountdown {
    startDate: Date;
    currentDate: Date;

}


export class ApoptoosiCountdown extends React.Component<{}, IApoptoosiCountdown> {

    countdown: any;
    constructor(props){
        super(props);

        this.state = {
            startDate: new Date(2019, 3, 2, 15, 0, 0, 0),
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
        var seconds = Math.floor(diffDate / 1000);
        
        const days = Math.floor(seconds / (3600 * 24));
        seconds -= days * 3600 * 24;
        const hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        const minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        
        return `${days}:${hours}:${minutes}:${seconds}`;
    }

    render(){
        return(
            <h1>{this.getDateString()}</h1>
        )
    }

}