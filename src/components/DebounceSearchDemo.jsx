import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

export default function DebounceSearchDemo() {
  // Search input state
  const [search, setSearch] = useState("");

  // Delay state
  const [delay, setDelay] = useState(500);

  // Sample search items
  const items = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Vite",
    "GitHub",
  ];

  // Use debounce hook
  const debouncedValue = useDebounce(search, delay);

  // Filter search results
  const results = debouncedValue.trim() === ""
    ? []
    : items.filter((item) =>
        item.toLowerCase().includes(debouncedValue.toLowerCase())
      );

  // Simulate API search
  useEffect(() => {
    if (debouncedValue.trim() !== "") {
      console.log("Searching for:", debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <section>
      <h2>Debounce Search Demo</h2>

      {/* Change debounce delay */}
      <label htmlFor="delay">Debounce Delay (ms): </label>
      <select
        id="delay"
        value={delay}
        onChange={(event) => setDelay(Number(event.target.value))}
      >
        <option value="300">300</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select>

      {/* Search input */}
      <div>
        <input
          type="text"
          placeholder="Type to search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {/* Display values */}
      <p>Current Input: {search}</p>
      <p>Debounced Value (after {delay}ms): {debouncedValue}</p>

      {/* Search results */}
      <h3>Simulated Search Results:</h3>

      {debouncedValue.trim() === "" ? (
        <p>Type to see results.</p>
      ) : results.length > 0 ? (
        <ul>
          {results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No matching results found.</p>
      )}
    </section>
  );
}
