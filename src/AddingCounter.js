import React from 'react';
import { useState } from 'react'

function AddingCounter() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [total, setTotal] = useState(0);


    return (
        <div>
            <h1>Adding Two Numbers</h1>
            <div class="num-input">
                <input onChange={(e) => setNum1(e.target.value)}   type="number" placeholder="0" value={num1}/>
                <input onChange={(e) => setNum2(e.target.value)}   type="number" placeholder="0" value={num2}/>

                <button onClick={() => {setTotal(Number(num1) + Number(num2))}}>Add Them!</button>

                <p>{total}</p>

            </div>


        </div>


    )

}

export default AddingCounter;