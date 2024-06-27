import React, { Component } from "react";
import Newsiteam from "./Newsiteam";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      error: null,
      page: 1,
    };
  }

  async fetchArticles(page) {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c92e6c0123fb4b2aae9fdc640f5ce929&page=${page}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        loading: false,
        page: page,
      });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  componentDidMount() {
    this.fetchArticles(this.state.page);
  }

  handlePrevClick = () => {
    if (this.state.page > 1) {
      this.fetchArticles(this.state.page - 1);
    }
  };

  handleNextClick = () => {
    this.fetchArticles(this.state.page + 1);
  };

  render() {
    const { articles, loading, error, page } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
      <div>
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsiteam
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    url={element.urlToImage}
                    newurl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
