import React, { Component } from 'react';
import NewsImage from './newsImage';
import Moment from 'moment'

class NewsArticle extends Component {
    render() {
        const {
            date_posted,
            image,
            tags,
            text,
            title,
        } = this.props.item

        const {
            lgItem,
            isLarge,
        } = this.props

        return (
            <article className={`col-12 col-sm-6  col-md-4 ${lgItem ? 'col-lg-6' : 'col-lg-3'}`}>
                <div className="news-wrapper border border-white">
                    <NewsImage 
                        image={image}
                        isLarge={isLarge}
                        lgItem={lgItem}
                    />
                    <div className="news-content border-top border-white">
                        <h2 className="news-content--title">{title}</h2>
                        <div className="news-content--datetag">{Moment(date_posted).format('D/M/YYYY')} | {tags[0]}</div>
                        <div className={(isLarge && lgItem) ? "news-content--text d-lg-none" : "news-content--text"}>{text}</div>
                    </div>
                </div>
            </article>
        )
    }
}

export default NewsArticle
