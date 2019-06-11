import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        return (
            <div className='value-font value'>
                <p>{this.props.value}</p>
            </div>
        )
    }
}
