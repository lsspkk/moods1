import React from 'react';
import LocalSave from './localstore.jsx'

class MoodButtons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selected : 'none'};
    this.setMood = this.setMood.bind(this);
  }
  setMood (mood) {
    console.log('mood selected', mood);
    this.setState({selected:mood});
  }

  render() {
    var padding = {padding:"0 5", "line-height":"2em", height:"2em"};
    return (
      <div className="column">
      <div className="row">
      {this.props.moods.map((m,i) =>
        <button key={"mood"+i}style={padding}
          onClick={this.setMood.bind(this,m)}
          className={'share-item ' + (this.state.selected == m ? 'button-default' : 'button-outline') }
          >{m}</button>)}
      </div>
      <div className="row">
        {this.state.selected != 'none' &&
          React.cloneElement(this.props.save, {mood:this.state.selected, setMood:this.setMood})
        }
      </div>
      </div>
    );
  }

}

export default MoodButtons;
