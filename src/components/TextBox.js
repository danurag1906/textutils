import React,{useState} from "react";

export default function TextBox(props) {

  const handleDangerClick = () =>{
      console.log("clicked clear text area button");
      setText("");
  }

  const handleUpClick = () =>{
    console.log("handleUpClick clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleDownClick = () => {
      let newText=text.toLowerCase();
      setText(newText);
  }

//   const handleSymbolsClick = () =>{
//     const regex = /[0-9/A-Z/a-z/ /]/g;

//     const letters = text.match(regex);
//     const res1 = letters.join('');
//     setText(res1);
//   }

//   const handleAlterClick = () =>{
//       let newText="";
//       for(let i=0;i<text.length;i+2){
//           newText=newText.concat(String.fromCharCode(text.charCodeAt(i).toUpperCase()));
//       }
//       setText(newText);
//   }

//   const handleOriginalClick = () =>{
//       setText(itext);
//   }

  const handleSentenceClick = () =>{
      let newText = text.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
      setText(newText);
  }

  const handleExtraClick=()=>{
    let newText=text.split(/[  ]+/);
    setText(newText.join(" "));
  }

  const handleCopyClick=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleOnChange = (event) =>{
    console.log("clicked on handleonchange");
    setText(event.target.value);
  }

  const handleOnChangef=(event)=>{
      setfWord(event.target.value);
  }

  const handleOnChanger=(event)=>{
      setrWord(event.target.value);
  }

  const handleReplaceClick = () =>{
      let newText=text.replaceAll(fword,rword);
      setText(newText);
  }

  const [text,setText] = useState('');
//   let itext=text;
  const [fword,setfWord] = useState('');
  const [rword,setrWord] = useState('');
 
  return (
      <>
    <div className="container my-2">

        <h4>{props.heading}</h4>
      <div className="mb-4">
        
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        
       
        <p>Enter the word you want to replace</p>
        <textarea className="form-control" id="findword" rows="1"  value={fword} onChange={handleOnChangef}> </textarea>
        
       
        <p>Enter the word to be replaced with</p>
        <textarea className="form-control" id="replaceword" rows="1"  value={rword} onChange={handleOnChanger}> </textarea>
        
      </div>
      <button disabled={text.length===0} className="btn btn-danger" onClick={handleDangerClick} >Clear</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSentenceClick}>Sentence Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReplaceClick}>Replace words</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraClick}>Remove Extra space</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy to clipboard</button>
      {/* <button className="btn btn-primary mx-1" onClick={handleOriginalClick}>Original state</button> */}
      {/* <button className="btn btn-primary mx-1" onClick={handleSymbolsClick}>Only Symbols</button> */}
      {/* <button className="btn btn-primary mx-1" onClick={handleAlterClick}>aLtErNaTiNg CaSe</button> */}
    </div>
    <div className="container my-3">
            <h4>
                Your Text Summary
            </h4>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008*text.split("").length} minutes read</p>

            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter something in Textarea above to preview here"}</p>
    </div>
    </>
  );
}
