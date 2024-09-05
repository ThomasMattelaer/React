import { useState } from "react";

export default function TextArea() {
  const [text, setText] = useState("");

  return (
    <textarea
      onChange={(event) => {
        const newText = event.target.value;
        if (newText.includes("<script>")) {
          // Check for the presence of the <script> tag
          alert("You cannot use the <script> tag in the text area");
          newText.replace("<script>", ""); // Remove the <script> tag
        }
        setText(newText);
      }}
      className="textarea"
      placeholder="Enter your text here"
      spellCheck="false"
      value={text}
    />
  );
}
