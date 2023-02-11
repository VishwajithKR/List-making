import React, { useState } from 'react'
import List from './List'
import Todolist from './Todolist'
import '../style/todo.css'

function Todo() {


   
    let dateObject = new Date()

    let date = dateObject.getDate()
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = months[dateObject.getMonth()]
    let day = days[dateObject.getDay()]
    let year = dateObject.getFullYear()

    let hour = dateObject.getHours()
    let minute = dateObject.getMinutes() 

    
    const [list, setList] = useState([])

    const add = (detail) => {
        if (!detail.data) {
            return;
        } else {
            const newdata = [...list, detail]
            setList(newdata)
        }
    }

    const remove = (index) => {
        const removedata = [...list]
        removedata.splice(index, 1)
        setList(removedata)
    }

    const complete = (index) => {
        let finish = [...list]
        finish[index].mark = !finish[index].mark
        setList(finish)
    }

    const edit = (index, value) => {
        if (!value) {
            return alert('update the value')
        } else {
            const editData = [...list]
            editData[index].data = value
            setList(editData)
        }
    }


    
    return <>

        <div className='col-lg-3 text-center mt-5 todo'>
            <p className='mt-2 me-2 '>Today : {date}-{day}-{month}-{year}</p>
            <p className='mt-2 me-2 '>Time : {minute}min-{hour}Hrs</p>
        </div>
        <div className='col-lg-6 mt-5'>

            <Todolist
                take={add}

            />
           
            <List
                send={list}
                remove={remove}
                complete={complete}
                edit={edit}
            />
        </div>
        <div className='col-lg-3 text-center mt-5 todo1'>
            <p className='mt-2 me-2 '>Today : {date}-{day}-{month}-{year}</p><br/>
            <p className='mt-2 me-2 '>Time : {minute}min-{hour}Hrs</p>
        </div>

    </>




}

export default Todo