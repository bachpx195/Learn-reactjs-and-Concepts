import React, { Component } from 'react';

class ListAndKey extends Component {
    render(){
        const list = this.props.arr.map((num) =>
            <li key={num.toString()} className="list-group-item">{num}</li>
        );

        return(
            <div>
                <ul className="list-group">{list}</ul>
            </div>
        )
    }
}

export default ListAndKey;
