import React from 'react'
import services from '../../services';
import Search from '../../components/search'
const home = services.home

function Home () {

    // home.getList()

    return <div className="home-page">
        <Search right={<div>你好</div>}></Search>
    </div>
}

export default Home