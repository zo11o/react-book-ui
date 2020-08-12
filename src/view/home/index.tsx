import React from 'react'
// import services from '../../services';
import SearchBar from '../../components/search-bar'
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

const HOT = ['爱的谱曲', '洗衣机', '人的一生', '生活', '来到这个世界', '静', '人与狗', '生命不可承受之轻', '天下为公',]


function Home () {
    return <div className="home-page">
        <SearchBar right={<ClassBtn />} hot={HOT || []}></SearchBar>
        {/* TODO: 轮播图组件 */}
        {/* TODO: 如果有时间希望做长列表组件 */}
        <ListView source={list}></ListView>
    </div>
}

export default Home