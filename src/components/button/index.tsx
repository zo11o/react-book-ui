import React from 'react'

interface Props {
    name?: string
    count?: number
}
interface State {
    count: number
}

class Button extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            count: this.props.count || 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e: any) {
        console.log(e);
        let count = this.state.count
        this.setState({
            count: ++count
        })
    }

    

    componentWillMount() {
        console.log('Button componentWillMount 啦')
    }

    render () {
        const {count} = this.state;
        return (
            <>
                <button onClick={this.handleClick}>{this.props.name || '点击'}</button>
                <span>点击了{count}</span>
            </>
        )
    }

    // static getDerivedStateFromProps() {
    //     console.log('Button getDerivedStateFromProps 啦')
    // }

    componentDidMount() {
        console.log('Button componentDidMount 啦')
    }

    shouldComponentUpdate() {
        console.log('Button shouldComponentUpdate 啦')
        return true;
    }

    componentWillReceiveProps() {
        console.log('Button componentWillReceiveProps 啦')
    }

    componentWillUpdate() {
        console.log('Button componentWillUpdate 啦')
    }

    componentDidUpdate() {
        console.log('Button componentDidUpdate 啦')
    }

    componentWillUnmount() {
        console.log('Button componentWillUnmount 啦')
    }
}

export default Button