import { useState, useEffect, useCallback } from "react";
import Options from "./Options";

function Generator() {
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [randomString, setRandomString] = useState("");

  const generateString = useCallback(() => {
    let chars = "";

    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
      setRandomString("Select at least one option");
      return;
    }

    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }

    setRandomString(result);
  }, [length, uppercase, lowercase, numbers, symbols]);

  useEffect(() => {
    generateString();
  }, [generateString]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(randomString);
    alert("✨ Copied Successfully!");
  };

  return (
    <div className="generator">
      <h2>🔐 Create Your Random String</h2>

      <div className="output-box">
        <input type="text" value={randomString} readOnly />

        <button onClick={copyToClipboard}>
          📋 Copy
        </button>
      </div>

      <Options
        length={length}
        setLength={setLength}
        uppercase={uppercase}
        setUppercase={setUppercase}
        lowercase={lowercase}
        setLowercase={setLowercase}
        numbers={numbers}
        setNumbers={setNumbers}
        symbols={symbols}
        setSymbols={setSymbols}
      />

      <button className="generate-btn" onClick={generateString}>
        🎲 Generate String
      </button>
    </div>
  );
}

export default Generator;