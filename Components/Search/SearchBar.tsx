import { useRouter } from "next/router";
import styled from "styled-components";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const SearchBar = () => {
  const router = useRouter();
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

  // const handleOnSelect = () => {
  //   <Link href="/search" />;
  // };

  const handleOnFocus = () => {
    router.push("/search");
  };

  // const formatResult = (item) => {
  //   return (
  //     <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
  //   );
  // };

  return (
    <SearchBarContainer>
      <ReactSearchAutocomplete
        placeholder="맥주 이름, 종류, 향 등을 검색해보세요!"
        items={items}
        onFocus={handleOnFocus}
        autoFocus
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  .wrapper {
    background: #52d5f2;
  }
  svg {
    fill: #fdf9ea;
  }

  input::placeholder {
    color: #fdf9ea;
  }
`;

export default SearchBar;
