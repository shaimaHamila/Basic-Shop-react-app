import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        value: this.props.counter.value,
        tags: ["tag1", "tag2", "tag3"]
    };

    // constructor() {
    //     super();
    //     this.handelIncrement = this.handelIncrement.bind(this);
    // };

    // handelIncrement = (product) => {
    //     //console.log(product);
    //     this.setState({ value : this.state.value + 1});
    // };

    // doHandelIncrement = () => {
    //     this.handelIncrement( {id: 1} );
    // }

    renderTags() {
        if(this.state.tags.length === 0) return <p>Tere are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag} >{tag}</li>)}</ul>;
    };
   

    render() { 
        //console.log('props', this.props);
        return (
            <React.Fragment>
                {/*<h4>counter {this.props.id}</h4>
                {this.props.children}*/}
                <span className={this.getBadgeClasses(this.props.counter)}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    //onClick={() => this.handelIncrement({id: 1})}
                    className="btn btn-secondary btn-sm"
                > 
                    Increment
                </button> 
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete</button> 
                <br/>
            {/* {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()} */}
            </React.Fragment> 
        );
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0? "warning" : "primary";
        return classes;
    };

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value ;
    };
    
}
 
export default Counter;
