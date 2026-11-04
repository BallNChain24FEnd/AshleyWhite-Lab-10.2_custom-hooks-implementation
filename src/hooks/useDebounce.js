import { useState, useEffect } from "react";

export default function useDebounce(value, delay = 500) {
  // Store debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Start delay timer
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear previous timer
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  // Return delayed value
  return debouncedValue;
}

