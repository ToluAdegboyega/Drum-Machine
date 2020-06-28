const bank = [{
  keyTrigger: 'Q',
  keyCode: 81,
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
{
  keyTrigger: 'W',
  keyCode: 87,
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
{
  keyTrigger: 'E',
  keyCode: 69,
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
{
  keyTrigger: 'A',
  keyCode: 65,
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
{
  keyTrigger: 'S',
  keyCode: 83,
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
{
  keyTrigger: 'D',
  keyCode: 68,
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
{
  keyTrigger: 'Z',
  keyCode: 90,
  id: 'Kick-n-hat',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
{
  keyTrigger: 'X',
  keyCode: 88,
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
{
  keyTrigger: 'C',
  keyCode: 67,
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];


class App extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "App" },
      React.createElement(DrumMachine, null)));


  }}


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Turn On to Rock!",
      currentBank: bank,
      volume: 50,
      power: false,
      powerOn: "" };


    this.updateDisplay = this.updateDisplay.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.updatePower = this.updatePower.bind(this);
  }
  updateDisplay(name) {
    this.setState({
      display: name });

  }

  updateVolume(vol) {
    this.setState({
      volume: vol.target.value });

  }

  updatePower() {
    this.setState({
      power: this.state.power ? false : true });


  }

  render() {
    let newArr = this.state.currentBank.map((j, i, padArr) => {
      return (
        React.createElement(DrumPad, {
          id: padArr[i].id,
          keyTrigger: padArr[i].keyTrigger,
          keyCode: padArr[i].keyCode,
          url: padArr[i].url,
          key: padArr[i].id,
          updateDisplay: this.updateDisplay,
          power: this.state.power,
          volume: this.state.volume }));


    });

    return (
      React.createElement("div", { className: "container", id: "drum-machine" },
      React.createElement("div", { className: "inner-container" },
      React.createElement("p", { id: "display" }, this.state.display),
      React.createElement("div", { className: "workings" },
      React.createElement("div", { className: "inline" },
      React.createElement("input", { type: "range", min: "1", max: "100", value: this.state.volume, onChange: this.updateVolume }),
      React.createElement("p", null, this.state.volume)),

      React.createElement("label", { className: "inline-b" },
      React.createElement("input", { type: "checkbox", onClick: this.updatePower, id: "powerButton" }),
      React.createElement("span", { className: "slider round" }),
      React.createElement("p", null, this.state.powerOn))),



      React.createElement("div", { id: "inner" },
      newArr))));




  }}


class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playAudio();

    }
  }

  playAudio(e) {
    const sound = document.getElementById(this.props.keyTrigger);
    if (this.props.power) {
      let newVol = this.props.volume / 100;
      sound.volume = newVol;
      sound.play();
      this.props.updateDisplay(this.props.id);
    }
  }

  render() {
    return (
      React.createElement("div", { onClick: this.playAudio, id: this.props.id, className: "drum-pad" }, React.createElement("p", null,
      this.props.keyTrigger),
      React.createElement("audio", { class: "clip", id: this.props.keyTrigger, src: this.props.url })));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('drum-container'));