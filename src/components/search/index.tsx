import React, { useState, useCallback, useEffect } from 'react'
import styles from './styles'

function Search(props) {
    console.log(props);
    return (<div className={'search-components'}>
        <div className="search-wrap">
            <i></i>
            <input></input>
            <i></i>
        </div>
        {props.right}
        <style jsx>{styles}</style>
    </div>)
}

export default Search