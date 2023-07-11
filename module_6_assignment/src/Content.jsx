import { useState } from "react";
function Content() {
  const [displayText, setDisplayText] = useState("");

  const handleClick = () => {
    setDisplayText(document.getElementById("textarea").value);
  };
  return (
    <div style={{ height: "700px", textAlign: "center" }}>
      <textarea id="textarea" rows="10" cols="50" />
      <br />
      <button onClick={handleClick}>Display Text</button>
      <p>{displayText}</p>
    </div>
  );
}

export default Content;
