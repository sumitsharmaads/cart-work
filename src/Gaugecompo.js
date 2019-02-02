import React, { Component } from 'react';
import './App.css';
import { RadialGauge } from 'react-canvas-gauges';

class Gaugecompo extends Component {
  render() {
    return (
      <div className="Gaugecompo">
      	<RadialGauge
		   units='°C'
		   title='Temperature'
		  // value={this.state.temperature}
		   minValue={0}
		   maxValue={50}
		   majorTicks={['0', '5', '15', '20', '25', '30', '35', '40', '45', '50']}
		   minorTicks={2}
		></RadialGauge>
      </div>
    );
  }
}

export default Gaugecompo;
