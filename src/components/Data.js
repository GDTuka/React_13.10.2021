import React from "react";



class Data extends React.Component {
    constructor(){
        super();
        this.state = {
            weather0: "d",
            time0: "1234",
            weather12: '0',
            time12: ' 0',
        }
    }

    componentDidMount(){
        fetch("https://api.open-meteo.com/v1/forecast?latitude=55.54&longitude=37.55&hourly=temperature_2m").then(res => res.json()).then(data => {
            console.log(data.hourly.temperature_2m[0])
            console.log(data.hourly.time[0])
            let weather0= data.hourly.temperature_2m[0]
            let time0 = data.hourly.time[0]
            let weather12 = data.hourly.temperature_2m[11]
            let time12 = data.hourly.time[11]

            this.setState({
                weather0:weather0,
                time0:time0,
                weather12:weather12,
                time12: time12,
            })
            })
    }

    render() {
        return <div className="mainWetherDiv">
            <div className="wetherLooks">
                <div className="wether">Погода ночью</div>
                <div  className="wether">{this.state.time0}</div>
                <div  className="wether">{this.state.weather0}</div>
            </div>
            <div className="wetherLooks">
                <div  className="wether">Погода днём</div>
                <div  className="wether">{this.state.time12}</div>
                <div  className="wether">{this.state.weather12}</div>
            </div>
        </div>
    }
}

export default Data;