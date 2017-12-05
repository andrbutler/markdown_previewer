import React from 'react';
import { MarkdownPreview } from 'react-marked-markdown';

const markedOut = (props) => {
    
    return (
        <div>
            <p style={ {marginLeft: '10px'} }>Markdown formated text:</p>
            <MarkdownPreview className='Out' value={ props.text } />
        </div>
    );
}
export default markedOut;
        
