import React from 'react'
import Button from '../../components/button'
import List from '../../components/list'

interface Props {

}

interface State {
    list: Array<{name:string, publish: number}>;
}

export default class Home extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            list: [{name: 'zo11o', publish: 2020}]
        }
        console.log('Home constructor 啦')
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        console.log('Home componentWillMount 啦')
    }

    handleClick() {
        const {list} = this.state;
        list.push({name: `zo11o - ${Math.floor(Math.random()*10)}`, publish: 2021})
        this.setState({
            list: list
        })
    }

    render () {
        console.log('Home render 啦')
        const {list} = this.state;
        return (
            <>
                <header>
                    <h1>欢迎来到我的首页</h1>
                </header>
                <div>
                    <h5>图书列表 <button onClick={this.handleClick}> + </button></h5>
                    <ul>
                        {
                            list.length ? list.map(o => {
                                return <li key={o.name}>{o.name}</li>
                            })
                            :''
                        }
                    </ul>
                </div>
                <Button></Button>
            </>
        )
    }

    componentDidMount() {
        console.log('Home componentDidMount 啦')
    }

    // shouldComponentUpdate() {
    //     console.log('Home shouldComponentUpdate 啦')
    //     return true;
    // }

    componentWillReceiveProps() {
        console.log('Home componentWillReceiveProps 啦')
    }

    componentWillUpdate() {
        console.log('Home componentWillUpdate 啦')
    }

    componentDidUpdate() {
        console.log('Home componentDidUpdate 啦')
    }

    componentWillUnmount() {
        console.log('Home componentWillUnmount 啦')
    }

}