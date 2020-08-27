import React, { useState, useEffect, useRef, ReactElement } from 'react'
import styles from './styles'
import utils from '../../utils'

enum ClassType {
    HOT = 'hot',
}

type IProps = {
    hot: Array<string>
    right?: ReactElement
}

const HISTORY = ['你好', '我好', '大家好', '才是真的好', '才是真的好', '大家好', '大家好', '我好', '大家好', '大家好']
function SearchBar (props: IProps) {
    const { hot } = props;

    console.log(utils.cookie.get('2'))

    let [keywords, setKeywords] = useState('');
    let [isFocus, setVisible] = useState(false);
    let [historyActive, setHistory] = useState(-1);
    let [hotActive, setHot] = useState(-1);

    const inputEl = useRef<HTMLInputElement | null>(null);

    const handleFocus = () => {
        setVisible(true)
    }

    const handleBlur = () => {
        setVisible(false)
    }

    const handleSelect = (i: number, type: Array<any>) => {
        setKeywords(type[i])
        setHot(i);
    }

    const handleHistorySelect = (i: number) => {
        // 这里引入推荐算法 LRU
        setKeywords(HISTORY[i]);
        setHistory(i);
        if (null !== inputEl.current) {
            inputEl.current.focus();
            inputEl.current.value = HISTORY[i]
        }
    }

    return (<div className={'search-components'}>
        <div className="search-header">
            <div className={`search-wrap ${isFocus ? 'active' : ''}`}>
                <i className="i search"></i>
                <input ref={inputEl} defaultValue={keywords} className="input" onFocus={handleFocus}></input>
                <i className="i scan"></i>
            </div>
            {
                !isFocus ?
                    <div className="search-right" >
                        {props.right}
                    </div>
                    : ''
            }
        </div>
        {
            isFocus ?
                <div className="search-body">
                    <h1>历史查询</h1>
                    <div className="tag-wrap">
                        {
                            HISTORY.map((o, i) => <span className={`${historyActive === i ? 'active' : ''}`} onClick={() => handleHistorySelect(i)} key={i}>{o}</span>)
                        }
                    </div>
                    <h1>热门查询</h1>
                    <div className="tag-wrap">
                        {
                            hot.map((o, i) => <span className={`${hotActive === i ? 'active' : ''}`} onClick={() => handleSelect(i, hot)} key={i}>{o}</span>)
                        }
                    </div>
                </div>
                : ''
        }
        <style jsx>{styles}</style>
    </div>)
}

export default SearchBar