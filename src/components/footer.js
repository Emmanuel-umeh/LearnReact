import React, { Component } from 'react'
import '../css/footer.css'



export default class Footer extends Component{
    render(){
        return(
          
        
<footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify">Mega Designs<i>I just wanna learn and create</i> Learning....</p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul className="footer-links">
          <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
          <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
          <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
          <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
          <li><a href="http://scanfcode.com/category/android/">Android</a></li>
          <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
        </ul>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
          <li><a href="http://github.com/Emmanuel-umeh">About Us</a></li>
          <li><a href="http://github.com/Emmanuel-umeh">Contact Us</a></li>
          <li><a href="https://github.com/Emmanuel-umeh/LearnReact/pulls">Contribute</a></li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright © 2017 All Rights Reserved by 
          <a href="#">Mega</a>.
        </p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
          <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
          <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
          <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>   
        </ul>
      </div>
    </div>
  </div>
</footer>

        )
    }
}