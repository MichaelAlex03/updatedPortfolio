import React from 'react'
import Header from './components/Header'
import Landing from './components/Home/Landing'
import About from './components/Home/About'

const Home = () => {
    return (
        <>
            <div >
                <Landing />

                <div id='Content'>
                    <Header />
                    <About />
                </div>
            </div>
        </>
    )
}

export default Home