import css from 'styled-jsx/css'

export default css`

    @keyframes long{
        0$ {width: 80%;}
        100% {width: 100%;}
    }
    .search-components {
        display: flex;
        flex-direction: column;
    }
    .search-components .search-header {
        display: flex;
        padding: .4rem .6rem;

    }
    .search-components .search-wrap {
        width: 80%;
        border: 1px solid #ccc;
        border-radius: .2rem;
        box-shadow: 1px 1px 2px #EEE;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .search-components .search-wrap.active {
        animation: long .2s;
        animation-fill-mode: forwards
    }
    .search-components .search-wrap .i {
        display: inline-block;
        width: 1rem;
        height: 1rem;
    }
    .search-components .search-wrap .i.search {
        background: url("/assets/images/i-search.png") no-repeat 0 0;
        width: 0.6rem;
        height: 0.6rem;
        background-size: 100%;
        margin-left: .2rem;
    }
    .search-components .search-wrap .i.scan {
        background: url("/assets/images/i-scan.png") no-repeat 0 0;
        background-size: 100%;
    }
    .search-components .search-wrap .input{
        padding-left: 0.2rem;
        flex: 1;
        font-size: 0.4rem;
        border: none;
        color: #999999;
    }
    .search-components .search-wrap .input:focus{
        // width: 100%;
    }
    .search-components .search-right {
        width: 20%;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }

    .search-body {
        position: absolute;
        z-index: 99;
        background-color: #FFF;
        height: calc(100% - 1.8rem);
        top: 1.8rem;
        padding: 0rem .6rem;
    }
    .search-body h1 {
        font-size: 0.4rem;
        padding: 0.3rem 0;
        margin: 0.3rem 0;
    }
    .search-body .tag-wrap span{
        margin: 0.2rem 0.4rem 0 0 ;
        display: inline-block;
        padding: .2rem .4rem;
        // background: #bfbfbf;
        color: #1296db;
        border-radius: 0.5rem;
        border: 1px solid #1296db;
    }
    .search-body .tag-wrap span.active{
        color: #FFFFFF;
        background-color: #1296db;
    }
`