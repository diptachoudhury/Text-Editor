import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TocIcon from '@mui/icons-material/Toc';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import PhotoIcon from '@mui/icons-material/Photo';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import GridViewIcon from '@mui/icons-material/GridView';

function TextEditor() {
  const textRef = useRef(null);

  function handleBoldClick() {
    document.execCommand('bold', false, null);
  }

  function handleItalicClick() {
    document.execCommand('italic', false, null);
  }




  
  return (
    <div className="container mt-4" >
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-center">Simple Text Editor</h4>
          <div className="mb-2">
          <button className="btn" onClick={handleBoldClick}>
            Normal Text <KeyboardArrowDownIcon/>
            </button>
            <button className="btn" onClick={handleBoldClick}>
            <FormatBoldIcon/>
            </button>
            <button className="btn" onClick={handleItalicClick}>
              <FormatItalicIcon/>
            </button>
            <button className="btn" >
              <MoreHorizIcon/>
            </button>
            <button className="btn" >
              <b>A</b><KeyboardArrowDownIcon/>
            </button>
            <button className="btn" >
              < TocIcon/>
            </button>
            <button className="btn">
              < TocIcon/>
            </button>
            <button className="btn">
              <InsertLinkIcon/>
            </button>
            <button className="btn">
              <PhotoIcon/>
            </button>

            <button className="btn">
             <b>@</b>
            </button>

            <button className="btn" >
             <InsertEmoticonIcon/>
            </button>

            <button className="btn" >
             <GridViewIcon/>
            </button>

            
            
            
          </div>
          <div
            ref={textRef}
            contentEditable
            style={{ height: '200px', border: '1px solid black' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TextEditor;
