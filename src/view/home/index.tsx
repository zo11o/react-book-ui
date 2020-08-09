import React from 'react'
import services from '../../services';

const home = services.home

function Home () {

    home.getList()

    return <div>这是首页</div>
}

export default Home