function Options({
  length,
  setLength,
  uppercase,
  setUppercase,
  lowercase,
  setLowercase,
  numbers,
  setNumbers,
  symbols,
  setSymbols,
}) {
  return (
    <div className="options">

      <div className="option">
        <label>
          Length: <strong>{length}</strong>
        </label>

        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <div className="option">
        <label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          Uppercase (A-Z)
        </label>
      </div>

      <div className="option">
        <label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          Lowercase (a-z)
        </label>
      </div>

      <div className="option">
        <label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          Numbers (0-9)
        </label>
      </div>

      <div className="option">
        <label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          Symbols (!@#$%)
        </label>
      </div>

    </div>
  );
}

export default Options;