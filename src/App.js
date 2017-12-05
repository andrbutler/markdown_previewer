import React, { Component } from 'react';
import './App.css';
import MarkedOut from './components/MarkdownOut/MarkdownOut';

class App extends Component {
    state = {
        text:'Heading\n=======\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n \n leave 2 spaces at the end of a line to do a  \n line break\n\nText attributes *italic*, **bold**, \nmonospace`, ~~strikethrough~~ .\n \n list:\n\n* something\n* something else\n* something completely different\n\nNumbered list:\n\n1. one\n2. two\n3. three\n \n[display a link](https://freecodecamp.com)*' 
    }

    textInputHandler = (event) => {
        this.setState( {text: event.target.value} );
    }

    render() {

        return (
          <div className="App">
            <p>Input Text:</p>
            <div className='InContainer'>
                <textarea className='In' onChange={this.textInputHandler} value={this.state.text}/>
            </div>
            <MarkedOut text={this.state.text}/>
          </div>
        );
    }
}

export default App;
