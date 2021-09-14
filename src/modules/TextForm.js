import React, { useState } from 'react'
// css
// import 'Cap.css';

export default function TextForm(props) {
  // click event as UpperCase
  function clickHandler() {
    let Uppertext = text;
    settext(Uppertext.toUpperCase());
    props.showAlerts('Converted to Upper case', 'success');
  }
  
  // click event as LowerCase
  function clickLoHandler() {
    settext(text.toLowerCase());
    props.showAlerts('Converted to Lower case', 'success');

  }
  
  // click event as Clear Text
  function clickasClear() {
    settext('');
    props.showAlerts('cleared text to textarea', 'success');

  }
  // click event as CapitalizeCase
  // function CapitalizeCase() {
  //   // capitalize
  // }

  
  // copy text
  function handleCopy() {
    let text = document.getElementById('capitalize');
    navigator.clipboard.writeText(text.value);
    props.showAlerts('copied to clipboard', 'success');
    
  }
  
  // remove extra spaces
  function handleExtraSpace() {
    let newText = text.split(/[ ]+/); 
    // console.log(newText)
    settext(newText.join(' '));
    props.showAlerts('Extra spaces removed', 'success');
    
  }
  
  // onchange Event
  function handlerOnchange(e) {
    settext(e.target.value);

    //  solution-2 
    let newText = text.split(/[ ]+/);
    settextChar(newText.join(''));
  }


  const [text, settext] = useState('');

    //  solution-2 
  const [textChar, settextChar] = useState('');
  return (
    <>
      <div>
        <div className="mb-3">
          <h2>Enter the Text and Use below Option</h2>
          <textarea className="form-control" style={props.textArea} id="capitalize" rows="7" value={text} onChange={handlerOnchange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={clickHandler}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={clickLoHandler}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={clickasClear}>Clear text</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>
      <div className="container my-4">
        <h3>Your text summary</h3>
        
        {/* solution-2 */}
        <p> {text.split(' ').filter((elm)=> elm.length !==0).length} word and {textChar.length} character</p>
        <p> {0.008 * text.split(' ').filter((elm) => elm.length !== 0).length} Reading time</p>
        <h3>Preview content</h3>
        <p> {text.length> 0 ? text:" Nothing Preveiw"}</p>
      </div>
    </>
  )
}
