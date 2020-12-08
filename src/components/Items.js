import React, { Component } from 'react'

class Items extends Component {
    render() {
        return (
            <div className="meme-item">
                <img src={this.props.meme.url}
                alt={this.props.meme.name}
                className="meme-img"
                />
                <p className="meme-text">
                    {this.props.meme.name}
                </p>
            </div>
        )
    }
}

export default Items
