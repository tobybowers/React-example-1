import React, { Component } from 'react';
import Header from './components/header';
import NewsLayout from './components/newsLayout';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './App.css';
import news from './assets/articles'

var resizeTimeout

class App extends Component {
  constructor() {
    super()
    this.state = { 
      news,
      sort: "none",
      isSmall: (window.innerWidth < 510),
      isLarge: (window.innerWidth > 999),
      showNews: 6
    }
    this.showMore = this.showMore.bind(this)
    this.sortNews = this.sortNews.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
  }


  showMore() {
    let newCount = this.state.news.length
    if(this.state.showNews + 6 <= this.state.news.length) {
      newCount = this.state.showNews + 6
    }
    this.setState({showNews: newCount})
  }

  sortNews(type) {
    this.setState({sort: type})
  }

  updateDimensions() {
    clearTimeout(resizeTimeout)
    resizeTimeout =  setTimeout(() => {
      if(window.innerWidth < 510) {
        this.setState({ isSmall: true, isLarge: false })
      } else if(window.innerWidth > 999) {
        this.setState({ isSmall: false, isLarge: true })
      } else {
        this.setState({ isSmall: false, isLarge: false })
      }
    }, 200)
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
    clearTimeout(resizeTimeout)
  }

  render() {
    console.log(this.state)
    const {
      isLarge,
      isSmall,
      news,
      showNews,
      sort
    } = this.state
    return (
      <div className="App">
        <Header />
        <NewsLayout 
          isLarge={isLarge}
          isSmall={isSmall}
          news={news}
          showMore={this.showMore}
          showNews={showNews}
          sort={sort}
          sortNews={this.sortNews}
        />
      </div>
    );
  }
}

export default App;
