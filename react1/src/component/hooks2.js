import React, { useState , useEffect } from 'react'

function Hooks2() {
    // const initialCount = 0
    // const [count , setCount] = useState(initialCount)
    // const [name, setName] = useState({ firstName: '', lastName: '' })
    // const [items,setItems] = useState([])
    // const addItem = () =>{
    //     setItems(
    //         [...items,{
    //             id: items.length,
    //             value: Math.floor(Math.random() *10) + 1  
    //         }]
    //     )
    // }

            const [count , setCount] = useState(0)
            const [name , setName] = useState('')
            useEffect(() =>{
                console.log("document updated")
                document.title = `you clicked ${count} times`
            }, [count])

    return (
        <div>
            {/* count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count+1)}>increment</button>
            <button onClick={() => setCount(count-1)}>decrement</button> */}
            {/* <form>
                <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value })} />
                <input type="text" value={name.lastName} onChange={e => setName({ ...name,lastName: e.target.value })}/>
                <h2>your first name is :{name.firstName}</h2>
                <h2>your last name is :{name.lastName}</h2>
                <h2>{JSON.stringify(name)} </h2>
            </form> */}
            {/* <button onClick={addItem}>add a item</button>
            <ul>
                {
                    items.map(items=>
                    (
                        <li key={items.id}> {items.value}</li>
                    )
                    )
                }
            </ul> */}
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count+1)}>Click {count}</button>



        </div>
    )
}
export default Hooks2



