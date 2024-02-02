import React, { useState } from "react";
import "./edit-assignment.css";
import "./default.css"
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
  const [text, setText] = useState("");
  const [markdown, setMarkdown] = useState("");

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