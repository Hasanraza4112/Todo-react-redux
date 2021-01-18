import React, { useState } from 'react'
import './Home.css'

function Home(props) {
    const [todos, setTodo] = useState([])
    console.log('Home', props.datas)
    const submit = () => {
        if (setTodo === '') {
            alert('Enter your Todo')
        } else {
            props.AddTodosHome(todos)
            setTodo('')
        }

    }

    return (
        <div>

            <div id="myDIV" class="header">
                <h2>My To Do List</h2>

                <div >
                    <h1>Todo</h1>
                    <input type={'text'} id="myInput" placeholder="Title..." value={todos} onChange={(e) => setTodo(e.target.value)} />
                    <span onClick={submit } onclick="newElement()" class="addBtn">Add</span>
                </div>
            </div>
            <ul id="myUL">
                {props.datas.map((todoss, index) => {
                    console.log('In Home MAp Todo--', todoss.cardData)
                    return (
                        <li key={index} >{todoss.cardData}   <button className='close ' onClick={() => { props.RemoveTodoHome() }}>remove Todo</button> </li>

                    )
                }

                )}
            </ul>
        </div>

    )
}
export default Home