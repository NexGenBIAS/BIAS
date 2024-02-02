import React, { useState } from "react";
import "./default.css";
import "./edit-assignment.css";
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { marked } from "marked";
// import { mdToPdf } from "md-to-pdf";

const renderer = new marked.Renderer();

renderer.code = function (code, language) {
  const highlighted = hljs.highlightAuto(code).value;
  return `<pre><code class="hljs ${language} ">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer });

function App() {
  let mkdw = `

  <b> <i> This feature is not completely done implementing yet, so here is a sample preview </i> </b>

  # BIAS
  
  BIAS is a Bot for Instant Assignment Solutions.
  
  
  Link : http://65.0.14.141/
  
  BIAS is a webapp that provides an automation tool to generate answers to your assignments, host and organise your assignments, experiments and other important study material.
  
  It uses multiple AIs to generate textual answers for the given questions and gives you a well structured downloadable PDF in few seconds.
  
  
  
  ## Features
  
  - Easy-to-use
  - Well organised study material
  - Generate accurate assignment answers
  - View Submission Dates
  - Variety of assignments available
  - Download Notes/Assignments or view it on webapp itself
  - Working on more.
  
  
  ## FAQ
  
  #### 1) Is this an official college-approved webapp?
  
  No, this is a personal experimental project and is not approved/supported by any kind of institue authorities.
  
  #### 2) Will i get full marks if i write answers from the generated PDF?
  
  No, we do NOT guarantee you full marks. No teacher gives out full marks easily even if you write from the textbook itself.
  
  #### 3) Does this AI generate diagrams/images in the PDF?
  
  As of now, our webapp does NOT include any kind of graphical content (including diagrams and images) in the generated PDF.
  
  #### 4) What are Phoenix's thoughts about this?
  
  Well, does it matter? As we all know Phoenix's E ability (fireball) is to heal himself while damaging others around. In a similar way, for his own 'academic' satisfaction, he makes us suffer... JUST KIDDING! HAH!
  
  
  
  ## Documentation
  
  [API Reference](https://github.com/ISenseAura/Assignment-Buddy-API)
  
  

  ## Credits
  
  ### Owners
  
  - [Mayur Hiwale](https://www.github.com/isenseaura) - Lead Developer | Backend Development
  - [Om Patil](https://www.github.com/potato-lulw) - UI/UX Design | Frontend Development
  
  ###  Contributors
  - [Shashank Bhave](https://github.com/CAPTAINxNEMO) - Frontend Development | [Feature Implementation](https://github.com/potato-lulw/assignment-buddy/issues/6)
  
  - [Himanshu Ranjan](https://www.github.com/RanjanH) - Bug Report
  `

// mkdw is just sample mkdw, please change it with the content received from the server in future

  const [text, setText] = useState(mkdw);
  const [markdown, setMarkdown] = useState(marked(mkdw));

  const handleChange = (event) => {
    setText(event.target.value);
    setMarkdown(marked(event.target.value));
  }

  const handleKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const start = event.target.selectionStart;
      const end = event.target.selectionEnd;
      const value = event.target.value;
      setText(value.substring(0, start) + " ".repeat(4) + value.substring(end));
      event.target.selectionStart = event.target.selectionEnd = start + 4;
    }
  };

  // const convertToPdf = async () => {
  //   try {
  //     const pdf = await mdToPdf({ content: markdown });
  //     fs.writeFileSync("Output.pdf", pdf.content);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }


  return (
    <div className="edit-assignment-container">
      <textarea className="markdown-editor" placeholder="Edit" autoFocus value={text} onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
      <div className="html-preview" dangerouslySetInnerHTML={{ __html: markdown }}></div>
      {/* <button onClick={convertToPdf}>Convert to PDF</button> */}
    </div>
  );
}

export default App;