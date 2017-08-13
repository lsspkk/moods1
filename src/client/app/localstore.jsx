import React from 'react';
// https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
//
//


var STORE_KEY = 'lvp_moods1';

export class LocalGraph extends React.Component {
  render() {
    var obj = localStorage.getItem(STORE_KEY);
    if( !obj ) obj = JSON.stringify([]);
    obj = JSON.parse(obj).map((o,i) => <div key={i}>{o.mood} ... {o.date}</div>);
    return (<div>
    <pre>{`
    G R A P H
    .....
       ...
          ...
            . .
                       ..
                      ....
             .

               . .  ..
    ` }

    </pre>{obj}</div>
  );
  }
}

class LocalSave extends React.Component {

  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  save(e) {
    var obj = localStorage.getItem(STORE_KEY);
    if( !obj ) obj = JSON.stringify([]);
    var d = new Date();
    var a = JSON.parse(obj);
    a.push({mood:this.props.mood, date:d});
    localStorage.setItem(STORE_KEY, JSON.stringify(a));
    this.props.update();
    if( this.props.setMood != null ) this.props.setMood('none');
  }
  cancel(e) { this.props.setMood('none'); }
  render() {
    var d = new Date();
    return(
        <div>
        <div className="row">
      Save mood {this.props.mood}  to localstorage: {d.getHours()}:{d.getMinutes()}
      </div>
      <div className="row">
      <button className="button-default" onClick={this.save}>Save</button>
      <button className="button-default" onClick={this.cancel}>Cancel</button>
      </div>
    </div>)

  }

}

export default LocalSave;
