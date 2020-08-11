import React from 'react'
import styles from './styles'

function Search(props: any) {
    console.log(props);
    return (<div className={'search-components'}>
        <div className="search-wrap">
            <i className="i search"></i>
            <input className="input"></input>
            <i className="i scan"></i>
        </div>
        <div className="search-right">
            {props.right}
        </div>
        <style jsx>{styles}</style>
    </div>)
}

export default Search