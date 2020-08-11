import React from 'react'
// import services from '../../services';
import Search from '../../components/search'
import { btn } from './styles'
import ListView from '../../components/list-view'

function ClassBtn () {
    return <div className="class-btn" >
        <i className="i-class" onClick={() => { }}></i>
        <style jsx>{btn}</style>
    </div>
}

const list = [{
    name: '肖生克的救赎',
    publish: '2000-09-01'
},{
    name: '重生',
    publish: '2010-09-01'
},{
    name: '三体',
    publish: '2011-09-01'
}]

function Home () {
    return <div className="home-page">
        <Search right={<ClassBtn />}></Search>
        {/* TODO: 轮播图组件 */}

        {/* TODO: 如果有时间希望做长列表组件 */}
        <ListView source={list}></ListView>
    </div>
}

export default Home