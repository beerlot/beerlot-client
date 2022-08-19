import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const SearchBar = () => {
  const items = [
    {
      id: 0,
      name: "Yeonwoo",
    },
    {
      id: 1,
      name: "Youjin",
    },
    {
      id: 2,
      name: "Taehee",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];
  // const handleOnSearch = (string, results) => {
  //    onSearch will have as the first callback parameter
  //    the string searched and for the second the results.
  //   console.log(string, results);
  // };

  // const handleOnHover = (result) => {
  //    the item hovered
  //   console.log(result);
  // };

  // const handleOnSelect = (item) => {
  //  the item selected
  //   console.log(item);
  // };

  // const handleOnFocus = () => {
  //   console.log("Focused");
  // };

  // const formatResult = (item) => {
  //   return (
  //     <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
  //   );
  // };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ReactSearchAutocomplete
            items={items}
            // onSearch={handleOnSearch}
            // onHover={handleOnHover}
            // onSelect={handleOnSelect}
            // onFocus={handleOnFocus}
            autoFocus
            // formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
