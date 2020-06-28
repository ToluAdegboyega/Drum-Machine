const bank = [{
    keyTrigger: 'Q',
    keyCode: 81,
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
}, {
    keyTrigger: 'W',
    keyCode: 87,
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyTrigger: 'E',
    keyCode: 69,
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', 
}, {
    keyTrigger: 'A',
    keyCode: 65,
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyTrigger: 'S',
    keyCode: 83,
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
}, {
    keyTrigger: 'D',
    keyCode: 68,
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyTrigger: 'Z',
    keyCode: 90,
    id: 'Kick-n-hat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
}, {
    keyTrigger: 'X',
    keyCode: 88,
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
}, {
    keyTrigger: 'C',
    keyCode: 67,
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DrumMachine></DrumMachine>
      </div>
    );
  }
}

class DrumMachine extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
           display: "Turn On to Rock!",
           currentBank: bank,
           volume: 50,
           power: false,
           powerOn: ""
       }

       this.updateDisplay = this.updateDisplay.bind(this);
       this.updateVolume = this.updateVolume.bind(this);
       this.updatePower = this.updatePower.bind(this);
    }
    updateDisplay(name) {
        this.setState({
            display: name
        })
    }
  
  updateVolume(vol) {
        this.setState({
            volume: vol.target.value
        })
    }

    updatePower() {
        this.setState({
            power: this.state.power ? false : true,
           
        })
    }
   
    render() {
        let newArr = this.state.currentBank.map((j, i, padArr) => {
            return (
                <DrumPad
                    id={padArr[i].id}
                    keyTrigger={padArr[i].keyTrigger}
                    keyCode={padArr[i].keyCode}
                    url={padArr[i].url}
                    key={padArr[i].id}
                    updateDisplay={this.updateDisplay}
                    power={this.state.power}
                    volume={this.state.volume}
                ></DrumPad>
            )
        });

        return (
            <div className="container" id="drum-machine">

                <div className= "inner-container">
                    <p id="display">{this.state.display}</p>
                        <div className = "workings">
                            <div className="inline">
                                <input type="range" min="1" max="100" value={this.state.volume} onChange={this.updateVolume}  />
                                <p>{this.state.volume}</p>
                            </div>
                            <label className="inline-b">
                                <input type="checkbox" onClick={this.updatePower} id="powerButton" />
                            <span className="slider round"></span>
                                <p>{this.state.powerOn}</p>             
                            </label>
                        </div>
                    
                        <div id="inner">
                            {newArr}
                        </div>
                </div>

            </div>
        )  
    }
}

class DrumPad extends React.Component {
    constructor(props) {
        super(props)
        this.playAudio = this.playAudio.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress)
    }

    handleKeyPress(e) {
        if(e.keyCode === this.props.keyCode) {
            this.playAudio();

        }
    }

    playAudio(e) {
        const sound = document.getElementById(this.props.keyTrigger);
        if(this.props.power) {
            let newVol = this.props.volume / 100;
            sound.volume = newVol;
            sound.play();
            this.props.updateDisplay(this.props.id)
        }    
    }

    render() {
        return (
            <div onClick={this.playAudio} id={this.props.id} className="drum-pad"><p>
                {this.props.keyTrigger}</p>
                <audio class="clip" id={this.props.keyTrigger} src={this.props.url}></audio>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('drum-container'));
