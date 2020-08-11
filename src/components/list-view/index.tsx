import React from 'react';

type IProps = {
    source: Array<any>
}

function ListView (props: IProps) {
    const { source } =  props;
    return <div className="list-view-components">
        {
            source.map((o,i) => {
                return <div key={i}>你好</div>
            })
        }
    </div>
}

export default ListView;