import React, { useEffect, useState, useRef } from "react";
import "./default-edit-assignment.css";
import "./edit-assignment.css";
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { marked } from "marked";
import { useParams } from "react-router-dom";
// import { mdToPdf } from "md-to-pdf";

const renderer = new marked.Renderer();
const MathJax = window.MathJax;

// Code Block Highlighting
renderer.code = function (code, language) {
  const highlighted = hljs.highlightAuto(code).value;
  return `<pre><code class="hljs ${language} ">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer });

function EditAssignment() {

  const { subjectPrefix, assignmentNumber } = useParams();
  const [text, setText] = useState("");
  const [markdown, setMarkdown] = useState("");
  const htmlPreviewRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://65.0.14.141:4000/api/viewmd/${subjectPrefix}/${subjectPrefix+assignmentNumber}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.text();
        setText(data);
        setMarkdown(marked(data));
      } catch (error) {
        console.error("Fetch error:", error.message);
      } finally {

      }
    };

    fetchData();
  }, [subjectPrefix, assignmentNumber]);

  // Convert Markdown to HTML
  const handleChange = (event) => {
    setText(event.target.value);
    setMarkdown(marked(event.target.value));
  }

  // LaTeX
  useEffect(() => {
    if (htmlPreviewRef.current) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = markdown;
      MathJax.typesetPromise([tempDiv]).then(() => {
        htmlPreviewRef.current.innerHTML = tempDiv.innerHTML;
      }).catch((err) => {
        console.error(err.message);
      });
    }
  }, [markdown]);

  // Handling the Tab key
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

  // Link to the Guide for using the markdown-editor
  const handleHelpButtonClick = () => {
    window.open("https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md", "_blank");
  };

  return (
    <div className="flex flex-col  justify-center items-center ">
      <div className="edit-assignment-container rounded-sm ">
        <div className="relative w-1/2">

          <textarea className="markdown-editor p-4 w-full" placeholder="Edit" autoFocus value={text} onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
          <div className="absolute top-0 right-0 bg-primary text-center w-[20px] h-[20px] text-sm hover:cursor-pointer">
            <button className="help-button" title="How to use" onClick={handleHelpButtonClick}>?</button>
          </div>
        </div>
        <div ref={htmlPreviewRef} className="html-preview w-1/2 " dangerouslySetInnerHTML={{ __html: markdown }}></div>

      </div >
      <div className="button-container mb-4">
        <button /*onClick={convertToPdf}*/ className="bg-secondary text-white hover:text-primary px-10 py-4 rounded-md transform translate-y-[-30px]">Convert to PDF</button>
      </div>
    </div >
  );
}

export default EditAssignment;
