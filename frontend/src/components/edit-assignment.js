import React, { useEffect, useState } from "react";
import "./default.css";
import "./edit-assignment.css";
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { marked } from "marked";
import { useParams } from "react-router-dom";
// import { mdToPdf } from "md-to-pdf";

const renderer = new marked.Renderer();

renderer.code = function (code, language) {
  const highlighted = hljs.highlightAuto(code).value;
  return `<pre><code class="hljs ${language} ">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer });

function EditAssignment() {


  const { subjectPrefix, assignmentNumber } = useParams();
  const [text, setText] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://65.0.14.141:4000/api/viewmd/${subjectPrefix}/${assignmentNumber}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.text();
        setText(data);
        setMarkdown(marked(data));
      } catch (error) {
        console.error("Fetch error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subjectPrefix, assignmentNumber]);

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
      <div className="button-container">
        <button /*onClick={convertToPdf}*/>Convert to PDF</button>
      </div>
    </div>
  );
}

export default EditAssignment;