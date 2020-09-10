import React from 'react';


const ToDo = (props) => {
    return (



        <div>
        <form>
            <input type="text" name="todo-input" id="input"
            onChange ={(e)=>{
                props.onChange(e)
            }}

            value={props.value}
            />
            <input type="submit" name="submit" onClick={(e)=>{
                e.preventDefault()
                    props.onClick(e)
                }}/>
            <button name='delete' onClick={(e)=>{
                e.preventDefault()
                    props.onDel(e)
                }}> Delete</button>
        </form>



        </div>
        )
}

export default ToDo