import React, { Component } from "react";
export default class PostItemFeature extends Component {

  render() {
    return (  
      <div className="card" key={this.props.item.id}>
          <div className="row">
            <div className="col-md-5 wrapthumbnail">       
                <div
                  className="thumbnail"
                  style={{
                    backgroundImage: `url(${this.props.item.feature_img})`
                  }}
                />  
            </div>
            <div className="col-md-7">
              <div className="card-block">
                <h2 className="card-title">
                {this.props.item.title}
                </h2>
                <h4 className="card-text">
                  {this.props.item.description}
                </h4>
                <div className="metafooter">
                  <div className="wrapfooter">
                    <span className="meta-footer-thumb">                 
                        <img
                          className="author-thumb"
                          src={"https://news.liverpool.ac.uk/wp-content/uploads/2019/04/postdoctoral.jpg"}
                          alt="Sal"
                        />                  
                    </span>
                    <span className="author-meta">
                      <span className="post-name">
                      {this.props.item.author}
                      </span>
                      <br />
                      <span className="post-date">22 July 2017</span>
                      <span className="dot" />
                      <span className="post-read">6 min read</span>
                    </span>
                    <span className="post-read-more">                  
                        <svg
                          className="svgIcon-use"
                          width={25}
                          height={25}
                          viewBox="0 0 25 25"
                        >
                          <path
                            d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                            fillRule="evenodd"
                          />
                        </svg> 
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>   
    );
  }
}
