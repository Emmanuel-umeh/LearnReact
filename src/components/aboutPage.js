import React, {Component} from 'react'
import ReactDom from 'react-dom'

import '../css/about.css'


export default class AboutPage extends Component{
    render(){
        return(
            <section className="text-center about">
  <h1>About US</h1>
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
        <span className="fa fa-group" />
        <h2>Emmanuel Nduka</h2>
        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
      </div>
      <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
        <span className="fa fa-info" />
        <h2>Goodness Ezeokafor</h2>
        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
      </div>
      <div className="clearfix visible-md-block visible-sm-block" />
      <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
        <span className="fa fa-file" />
        <h2>Mega</h2>
        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
      </div>
    </div>
  </div>
</section>

        )
    }
}

// ReactDom.render(<AboutPage/>, document.getElementById('root'))
