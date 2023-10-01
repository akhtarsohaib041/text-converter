import React, {useState} from 'react'



function TextForms(props) {

  //        UpperClick           //

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.sowAlert('Converted to upperCase', 'success');
  }

  //        OnChange           //


  const handleOnChange = (event) => {
    setText(event.target.value);
  }

    //        LowClick              //

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.sowAlert('Converted to lowerCase', 'success');
  }

    //        RemoveClick          //

  const handleRemoveClick = () => {
    
    if(window.confirm('Are you sure you want to clear all text') === true) {
      let newText = '';
      setText(newText);
      props.sowAlert('Removed all text', 'success');

    }
    else {
      let newText = text;
      setText(newText);
    }

  }

    //        SpeakClick         //

  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.sowAlert('Speak mode has Enabled', 'success');
  }
  

    //        Copy         //

    const handleCopyClick = () => {

      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.sowAlert('Copyed to clipboard', 'success');

    }

    //        Remove extra spaces         //

    
    const handleExtraSpaces = () => {

      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.sowAlert('Removed all Extra Spces', 'success');

    }


    //        useState           //


  const [text, setText] = useState('');

  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#282f29' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-warning" onClick={handleUpperClick}>UpperCase</button>
        <button className="btn btn-outline-warning mx-2" onClick={handleLowClick}>LowerCase</button>
        <button className="btn btn-outline-warning mx-2" onClick={handleRemoveClick}>Remove</button>
        <button className="btn btn-outline-warning mx-2" onClick={handleSpeakClick}>Speak</button>
        <button className="btn btn-outline-warning mx-2" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-outline-warning mx-2" onClick={handleExtraSpaces}>RemoveExtraSpaces</button>
      </div>
      <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(' ').length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split('').length} Minutes Read</p>
        <h2>{text === '' ? 'Nothing to Preview': 'Preview'}</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForms;