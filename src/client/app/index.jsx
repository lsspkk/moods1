
import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './awe.jsx';
import MoodButtons from './moodbuttons.jsx';
import {LocalGraph} from './localstore.jsx';
import LocalSave from './localstore.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {graph :<LocalGraph />};

  }
  update() {
    this.setState({graph:<LocalGraph />});
  }
  render () {
    const moods = [1,2,3,4,5,6,7,8,9,10];
    return (<div className="row">
            <div className="column">
            <AwesomeComponent />
            </div>
            <div className="column">
            <MoodButtons  moods={moods} save={<LocalSave update={this.update}/>}/>
            {this.state.graph}
            </div>
            <FunJsx className="column"/>
            </div>);
  }
}

class FunJsx extends React.Component {
  render() {
    var i = 'i';
    return (
      <ol className="column">
      <li>JSX-benefits</li>
      <li>no if-else {i == 1 ? 'True!' : 'False'}</li>
      <li>js inside html{1+2}</li>
      </ol>
    );
  }
}
render(<App/>, document.getElementById('app'));
