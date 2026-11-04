import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function DebounceSearchDemo() {
  // Search input state
  const [search, setSearch] = useState("");

  // Use debounce hook
  const debouncedValue = useDebounce(search, 500);

  return (
    <section>
      <h2>Debounce Search Demo</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {/* Display values */}
      <p>Current Input: {search}</p>
      <p>Debounced Value (after 500ms): {debouncedValue}</p>
    </section>
  );
}
