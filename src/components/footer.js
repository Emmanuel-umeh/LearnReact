import React, { Component } from 'react'
import '../css/footer.css'



export default class Footer extends Component{
    render(){
        return(
          <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
          <div className="container text-center">
            <small>Copyright © Mega </small>
          </div>
        </footer>
        )
    }
}