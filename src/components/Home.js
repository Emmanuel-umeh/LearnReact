import React from 'react';

import '../index.css'
import NavigationBar from './navbar.js'
import Footer from './footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';





export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavigationBar />
                </div>

                

                {/* <div>
                    <Body />

                </div> */}
                <div>
                    <Footer />

                </div>
            </div>
        )
    }
}
