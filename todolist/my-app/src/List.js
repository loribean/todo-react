import React from 'react';
const List = (props) => {
    return (
        <ul>
            {props.listData.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>


        )

}

export default List;