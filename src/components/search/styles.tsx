import css from 'styled-jsx/css'

export default css`
    .search-components {
        padding: 0.3rem;
        display: flex;
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
        color: #666666;
    }
    .search-components .search-right {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`