import React,{Component} from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Body from './body.js'
import LogoDesign from './logo.js'
import ReactDOM from 'react-dom'
import Footer from './footer.js'
import AboutPage from './aboutPage.js'
import Finally from '../index.js'


  export default class NavigationBar extends Component{

    render(){
  return(<Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
<div className="container">
<a className="navbar-brand" href="#">
<img src="https://images.all-free-download.com/images/graphicthumb/hd_picture_of_the_beautiful_natural_scenery_03_166249.jpg" width = "50px" alt="" />
</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon" />
</button>
<div className="collapse navbar-collapse" id="navbarResponsive">
<ul className="navbar-nav ml-auto">

  <li className="nav-link">
    <Link to ="/">Home</Link>
    
  </li>

<li className="nav-item">
<Link to="/aboutPage">About Us</Link>
</li>
<li className="nav-item">
<Link to="/contact">Contact Us</Link>
</li>

</ul>
</div>
</div>
</nav>

<Switch>
<Route exact path="/" component={Body} />
<Route path="/aboutPage" component={AboutPage} />
<Route path="/contact" component={Footer} />

</Switch>
</Router>)
  
      
    }
  
    
  }
  
