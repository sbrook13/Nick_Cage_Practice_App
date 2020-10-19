import React, {useState} from 'react';
import CageCommentForm from './Components/CageCommentForm'
import CageCommentContainer from './Components/CageCommentContainer'
import './App.css';


function App () {
  
  const [ showNickCage, setVisibility ] = useState(false)
  const [ cageComments, addComment ] = useState([])

  const createCageComment = ( newComment ) => {
    addComment( [...cageComments, newComment] )
  }

  
  return (
    <div className="App">
      <h1>Show The Cage?</h1>
      <button 
        onClick={ () => setVisibility( !showNickCage ) }
      >
        { showNickCage ? 'Cage The Cage' : 'Show The Cage'}
      </button>
      {
        ( showNickCage ?
            <img  src="https://www.tvovermind.com/wp-content/uploads/2018/05/Cage-640x403.jpg" alt="cage-babbyyyyyyy"/> 
            :''
        )
      }
      <CageCommentForm createCageComment={ createCageComment }/>
      <CageCommentContainer cageComments={cageComments}/>
    </div>
  )

}

export default App;

// button will say cage the cage, if cage is shown
// button will say free the cage if cage is not shown
// pressing the button will either show the cage or cage the cage( take the cage image off of the screen )

// 1.) create something in state that we can switch from true to false, that represents if nick cage is on the screen (showNickCage) CHECKKKKKKKK
// 2.) Button needs to have an event handler in order to activate the state change CHECKKKKKKKKKKK
// 4.) Take Care of the button text ( use conditional Rendering )
// 5.) Conditionally render the image


