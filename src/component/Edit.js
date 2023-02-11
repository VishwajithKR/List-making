import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../style/edit.css'

function Edit(props) {

    const [oldValue, setOldValue] = useState(props.send.text)
    const handleChange = (e) => {
        setOldValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.update(oldValue)
    }

    return (
        <div className=' editlist'>
<h1>Update the task</h1>
            <form className='edit_list mt-3' onSubmit={handleSubmit}>
                <input type="text" name="" onChange={handleChange} value={oldValue} />
                <motion.input whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} type="submit" value='Change' />
            </form>

        </div>


    )
}

export default Edit