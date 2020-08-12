import css from 'styled-jsx/css'

export default css`
    .layout {
        position: relative;
        height: 100%;
    }
    .layout .layout-content {
        // height: 94vh;
        position: absolute;
        bottom: 1rem;
        top:0;
        height: auto;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }
    .layout .layout-footer {
        // height: 6vh;
        // box-shadow: -1px -1px #eee;

        position: absolute;
        bottom: 0;
    }
`