import { useState } from "react";

export default function useDebounce(value, delay = 500) {
  // Debounced value state
  const [debouncedValue, setDebouncedValue] = useState(value);

  return debouncedValue;
}
