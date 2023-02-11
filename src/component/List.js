import React, { useState } from 'react'
import Edit from './Edit'
import '../style/list.css'

function List(props) {
    const data = props.send
    // console.log(data)

    const [takeValue, setTakeValue] = useState({
        index: null,
        text: ''
    })

    const update = (data) => {
        props.edit(takeValue.index, data);
        setTakeValue({
            index: null,
            text: ''
        })
    }




    return (
        <div className='container mt-5 mb-5'>
            {
                takeValue.text ? (
                    <Edit
                        send={takeValue}
                        update={update}
                    ></Edit>
                ) : (
                    <ol class="list-group list-group-numbered">

                        {
                            data?.map((obj, index) => {
                                return <li key={index} class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div className={obj.mark ? "fw-bolder list-text1" : "fw-bolder list-text2 text-decoration-line-through"} >{obj.data}</div>


                                    </div>
                                    {
                                        obj.mark ? (<><span></span><span class="badge bg-success rounded-pill me-2 click" onClick={() => { props.complete(index) }}>Finish</span>
                                            <span class="badge bg-info rounded-pill me-2 click" onClick={() => setTakeValue({
                                                index: index,
                                                text: obj.data
                                            })}>Edit</span> <span className='timer1'>{obj.clock}</span></>
                                        ) : (<><span className='tick me-3'> &#10003;</span>
                                            <span class="badge bg-danger rounded-pill click" onClick={() => { props.remove(index) }}>Delete </span><span className='timer2'>{obj.clock}</span></>
                                        )
                                    }


                                </li> 
                                    
                                    
                            })
                        }

                    </ol>
                )
            }


        </div >
    )
}

export default List