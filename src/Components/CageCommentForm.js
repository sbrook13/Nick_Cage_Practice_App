import React, {useState} from 'react'

function CageCommentForm (props) {

    const [input, setInput ] = useState("")

    const handleChange = (event) => setInput( event.target.value )

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createCageComment(input)
        setInput( "" )
        event.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>create a cage comment</label>
            <input type="text" onChange={handleChange} placeholder="enter a cage comment"></input>
            <input type="submit"></input>
        </form>
    )
}

export default CageCommentForm