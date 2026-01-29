import React, { useState } from 'react'
import copy from 'copy-to-clipboard';


const TextForm = (props) => {

      const [text,setText]=useState("");


      function handleOnChange(e)
      {
        // console.log("On Change");
        setText(e.target.value)
      }  

      function UpperCase()
      {
          // console.log("Uppercase was Clicked"+ text);
          let newText=text.toUpperCase()
          setText(newText);
          props.showAlert("Converted to UppperCase!", "success")
      }

      function LowerCase()
      {
          // console.log("Uppercase was Clicked"+ text);
          let newText=text.toLowerCase()
          setText(newText);
          props.showAlert("Converted to LowerCase!", "success")
      }

      function CopyText()
      {
            // copy(text)
            // alert(`You have copied "${text}"`);
            // console.log(text);
            navigator.clipboard.writeText(text);
            props.showAlert("Copied Text!", "success")
      }

      function Clear()
      {
        setText(" ")
        props.showAlert("Cleared text!", "success")
      }

      function RemoveSpaces()
      {
          let newText=text.replace(/\s+/g, " ").trim()
          setText(newText);
          props.showAlert("Removed extra spaces completely!", "success")
      }

    
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3 my-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color: props.mode === 'dark' ? 'white' : '#042743'}} id='myBox' rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={UpperCase}>Convert To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={LowerCase}>Convert To LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={CopyText}>Copy to Clipboard</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={Clear}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={RemoveSpaces}>Remove Extra Spaces</button>
      </div> 
      <div className="container" style={{color:props.mode===`dark`?`white`:`black`}}>
        <h1>Your text summary</h1>
        <p> {text.split(/\s+/).filter( element => { return element.length !== 0 }).length }{" "}
          Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter(element => { return element.length !== 0 }).length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:" Nothing to preview . . ."}</p>
      </div> 
      
    </>
  )   
}

export default TextForm