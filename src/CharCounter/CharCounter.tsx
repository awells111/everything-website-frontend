import React, { useState } from "react";
import { text } from "stream/consumers";

/**
 * A React functional component that provides a character counter.
 *
 * This component renders a text area for user input and displays the count
 * of characters entered in the text area. It uses React's `useState` hook
 * to manage the state of the text area content.
 *
 * @returns A JSX element containing a label displaying the character count
 * and a text area for user input.
 */
function CharCounter() {
  const [textBoxContent, setTextBoxContent] = useState("");
  const countWords = (text: String) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };
  return (
    <div>
      <div>
        <span>
          Character Counter: <span>{textBoxContent.length}</span>
          <br />
          <span>
            <span>
              Word Counter: <span>{countWords(textBoxContent)}</span>
            </span>
            <br />
            Lines: <span>{textBoxContent.split("\n").length}</span>
          </span>
        </span>
      </div>

      <textarea
        value={textBoxContent}
        onChange={(e) => setTextBoxContent(e.target.value)}
        name="Character Counter"
        rows={10}
        cols={100}
      />
    </div>
  );
}

export default CharCounter;
