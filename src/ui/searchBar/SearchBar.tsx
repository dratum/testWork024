import { useState } from "react";
import "./SearchBar.module.css";
export default function SearchBar({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");

  const onFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onSearch(newValue);
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={onFilter}
        type='text'
        placeholder='type here...'
      />
    </>
  );
}
