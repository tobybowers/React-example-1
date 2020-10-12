import React, { Component } from 'react';
import NewsArticle from './newsArticle';
import Filter from './filter';

class NewsLayout extends Component {

    showMore() {
        this.props.showMore()
    }

    render() {
        const {
            sort,
            isSmall,
            isLarge,
            showNews,
            sortNews,
        } = this.props
        let articles = this.props.news

        switch(sort) {
            case "date":
                articles.sort((a, b) => new Date(b.date_posted).getTime() - new Date(a.date_posted).getTime())
                break
            case "title":
                articles.sort((a, b) => {
                    let x = a.title.toLowerCase()
                    let y = b.title.toLowerCase()
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                })
                break
            case "none":
            default:
                articles.sort((a, b) => b.id - a.id)
        }

        const newsList = articles.map((item, index) => {
            const lgItem = (index === 2)
            if((isLarge && index <= showNews ) || index < showNews ) {
                return <NewsArticle 
                    key={index} 
                    item={item} 
                    lgItem={lgItem}
                    isSmall={isSmall}
                    isLarge={isLarge}
                />
            } else {
                return false
            }
        })
        return (
            <div className="container news">
                <div className="side-title">Poker News</div>
                <div className={`row ${isSmall ? 'justify-content-center' : 'justify-content-end'}`}>
                    <Filter sortNews={sortNews}/>
                </div>
                <div className="row">
                    {newsList}
                </div>
                {showNews < articles.length && 
                    <div className=" my-5">
                        <button className="btn btn-outline-primary" onClick={this.showMore.bind(this)}>Show More</button>
                    </div>
                }
            </div>
        );
    }
}
  
export default NewsLayout;
