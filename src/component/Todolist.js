import React, { useState } from 'react'
import '../style/todolist.css'
import { motion } from 'framer-motion'

function Todolist(props) {

    let dateObject = new Date()
    let hour = dateObject.getHours()
    let minute = dateObject.getMinutes() 

    let time=hour+":"+minute

    const [result, setResult] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.take({
            data: result,
            mark: true,
            clock:time
        })
        setResult("")
    }

    const handleChange = (e) => {
        setResult(e.target.value)
    }

    return (
        <div className='mt-5 todolist'>
            <h1 className='mt-3'>Today-List</h1>
            <form className='todo_list mt-3' onSubmit={handleSubmit}>
                <input type="text" name="" onChange={handleChange} value={result} />
                <motion.input whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} type="submit" value='Add' />
            </form>

        </div>
    )
}

export default Todolist