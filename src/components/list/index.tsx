import React, { useState } from 'react';

function List () {

    const [list, setList] = useState([1]);

    const handleClick = () => {
        list.push(2)
        setList(list)
        console.log(22)
    }

    return (
        <ul>
            {
                list.map(o => {
                    return <li onClick={handleClick} key={o}>{o}</li>
                })
            }
        </ul>
    )
}

export default List