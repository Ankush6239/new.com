import React, { Component } from 'react';

export class Newsiteam extends Component {
  render() {
    const { title, description,url,newurl} = this.props;
    return (
      <>
      <div className='container'>
        <div className="card" style={{ width: '18rem' }}>
          <img src={!url? "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" :url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newurl}  className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
      
      </>
    );
  }
}

export default Newsiteam;
