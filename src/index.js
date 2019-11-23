import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css'
import NavigationBar from './components/navbar.js'
import Footer from './components/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/body.js'
import LogoDesign from './components/logo.js'




export default class Finally extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavigationBar />
                </div>

                <div><LogoDesign /></div>

                <div>
                    <Body />

                </div>
                <div>
                    <Footer />

                </div>
            </div>
        )
    }
}


ReactDOM.render(<Finally />, document.getElementById('root'));
// ReactDOM.render(<LogoDesign />, document.getElementById('logo'));

// ReactDOM.render(<Body/>, document.getElementById('body'));

// ReactDOM.render(<Footer/>, document.getElementById('footer'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
