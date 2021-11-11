import React,{useState} from "react";
import './Form.css'


function Form(props){
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    function NameChangeHandler(e){
        setName(e.target.value)
    }
    function TextChangeHandler(e){
        setText(e.target.value)
    }
  
    function Submit(e){
        e.preventDefault();
        const commentedTime = new Date().toLocaleDateString();
        let data = {
            name: name,
            comment: text,
            date:commentedTime,
            id: Math.random().toString()
        }
        props.add(data)
        // setDate('')
        setName('')
        setText('')
    }
    return(
        <div>
        <form onSubmit={() => {Submit()}}>
            <div className='outer-box'>
                <p>Name</p>
                <input className = 'input' type='text' onChange={(e) => NameChangeHandler(e)} value={name}/>
                <p>Comment</p>
                <input className = 'input__comment' type='text' onChange={(e) => TextChangeHandler(e)} value={text}/>
                <button className='add-button' type='submit' onClick={(e) => {Submit(e)}}>add</button>
            </div>
           
        </form>
        </div>
    )
}
export default Form;