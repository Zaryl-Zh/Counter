import Form from './Form';
import React, {useState} from "react";
import './Comment.css'

function Comment(){
  
    const [data, setData] = useState([])
    function addToData(newData){
      setData([
        ...data,
        newData,
        ``
      ])
     
    }
    return(
    <div>
        <Form add={addToData}/>
        <div>
        {
            data.map(item => {
                return <div className= 'todo-container' key = {item.id}>
                    <div className='todo-main-content' >
                        <span >{item.name}</span>
                        <span> : </span>
                        <span className='todo-content'>{item.comment}</span>
                    </div>
                        <p className= 'todo-createdAt'>{item.date}</p>
                    </div>
            })
        }
        </div>
    </div>
    )
}
export default Comment;