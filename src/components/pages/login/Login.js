import React, { Component } from 'react'
import './login.css'
import './form-elements.css'
import AlertBar from '../../../containers/AlertBar';
export default class Login extends Component {
  render() {
    return (     
            <div>
              <div className="top-content">
                <div className="inner-bg">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-8 col-sm-offset-2 text">
                        <h1>Bootstrap Login &amp; Register Forms</h1>
                        <div className="description">
                          <p>
                            This is a free responsive <strong>"login and register forms"</strong> template made with Bootstrap. 
                            Download it on <a href="http://azmind.com" target="blank"><strong>AZMIND</strong></a>, 
                            customize and use it as you like!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-5">
                        <div className="form-box">
                          <div className="form-top">
                            <div className="form-top-left">
                              <h3>Login to our site</h3>
                              <p>Enter username and password to log on:</p>
                            </div>
                            <div className="form-top-right">
                              <i className="fa fa-key" />
                            </div>
                          </div>
                          <div className="form-bottom">
                            <form role="form" action method="post" className="login-form">
                              <div className="form-group">
                                <label className="sr-only" htmlFor="form-username">Username</label>
                                <input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username" />
                              </div>
                              <div className="form-group">
                                <label className="sr-only" htmlFor="form-password">Password</label>
                                <input type="password" name="form-password" placeholder="Password..." className="form-password form-control" id="form-password" />
                              </div>
                              <button type="submit" className="btn">Sign in!</button>
                            </form>
                          </div>
                        </div>
                        <div className="social-login">
                          <h3>...or login with:</h3>
                          <div className="social-login-buttons">
                            <a className="btn btn-link-1 btn-link-1-facebook" href="#">
                              <i className="fa fa-facebook" /> Facebook
                            </a>
                            <a className="btn btn-link-1 btn-link-1-twitter" href="#">
                              <i className="fa fa-twitter" /> Twitter
                            </a>
                            <a className="btn btn-link-1 btn-link-1-google-plus" href="#">
                              <i className="fa fa-google-plus" /> Google Plus
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-1 middle-border" />
                      <div className="col-sm-1" />
                      <div className="col-sm-5">
                        <div className="form-box">
                          <div className="form-top">
                            <div className="form-top-left">
                              <h3>Sign up now</h3>
                              <p>Fill in the form below to get instant access:</p>
                            </div>
                            <div className="form-top-right">
                              <i className="fa fa-pencil" />
                            </div>
                          </div>
                          <div className="form-bottom">
                            <form role="form" action method="post" className="registration-form">
                              <div className="form-group">
                                <label className="sr-only" htmlFor="form-first-name">First name</label>
                                <input type="text" name="form-first-name" placeholder="First name..." className="form-first-name form-control" id="form-first-name" />
                              </div>
                              <div className="form-group">
                                <label className="sr-only" htmlFor="form-last-name">Last name</label>
                                <input type="text" name="form-last-name" placeholder="Last name..." className="form-last-name form-control" id="form-last-name" />
                              </div>
                              <div className="form-group">
                                <label className="sr-only" htmlFor="form-email">Email</label>
                                <input type="text" name="form-email" placeholder="Email..." className="form-email form-control" id="form-email" />
                              </div>
                              <div className="form-group">
                                <label className="sr-only" htmlFor="form-about-yourself">About yourself</label>
                                <textarea name="form-about-yourself" placeholder="About yourself..." className="form-about-yourself form-control" id="form-about-yourself" defaultValue={""} />
                              </div>
                              <button type="submit" className="btn">Sign me up!</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <AlertBar/>
            </div>
        
  
    )
  }
}
