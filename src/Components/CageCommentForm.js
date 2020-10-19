import React from 'react'
class CageCommentForm extends React.Component {

    state = {
        input: ""
    }

    handleChange = (event) => this.setState({ input: event.target.value })

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createCageComment(this.state.input)
        this.setState({input: ""})
        event.target.reset()
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>create a cage comment</label>
                <input type="text" onChange={this.handleChange} placeholder="enter a cage comment"></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default CageCommentForm