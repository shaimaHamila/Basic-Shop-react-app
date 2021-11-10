import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {


    render() { 
        return (<div>

            <button
            onClick={this.props.onReset}
                className="btn btn-primary btn-sm m-2"
            >
                Reset
            </button><br/>
            {this.props.counters.map(counter => 
            <Counter 
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            key={counter.id} 
            // value={counter.value} 
            // id={counter.id}
            counter={counter}
            >
                {/*<h4>Counter #{counter.id} </h4>*/}
            </Counter>
            )}
        </div>);
    }
}
 
export default Counters;

 