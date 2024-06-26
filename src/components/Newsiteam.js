import React, { Component } from 'react';

export class Newsiteam extends Component {
  render() {
    const { title, description,url,newurl} = this.props;
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newurl} className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsiteam;
