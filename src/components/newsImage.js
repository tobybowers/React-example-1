import React, { Component } from 'react';

class NewsImage extends Component {
    render() {
        const { 
            image, 
            isLarge,
            lgItem
        } = this.props
        const imgPath = require(`../assets/${image}`)
        const bgImage = { "backgroundImage": `url(${imgPath})`}

        return (
            <div 
                className={(isLarge && lgItem) ? "news-image news-image--large" : "news-image"}
                style={bgImage}></div>
        )
    }
}

export default NewsImage
