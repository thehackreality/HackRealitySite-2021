import React, { Component} from 'react';
import Home from './Home.js'
import About from './About.js'
import FAQ from './FAQ.js'
import Sponsors from './Sponsors.js'
import Partners from './Partners.js'

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Home />
                <About />
                <FAQ />
                <Sponsors />
                <Partners />

            </div>
        )
    }
}

export default Main;