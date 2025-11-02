import { useRef } from "react";

type SearchBarProps = {
  onQueryChange: (text: string) => void;
  query: string;
};

export function SearchBar({ query, onQueryChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function onClearButton() {
    onQueryChange("");
    inputRef.current?.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={query}
        placeholder="Search users..."
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <button onClick={onClearButton}>Clear</button>
    </div>
  );
}
