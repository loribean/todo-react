import React from 'react';
const List = (props) => {
    return (
        <ol>
            {props.listData.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ol>


        )

}

export default List;