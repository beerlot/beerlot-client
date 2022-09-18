import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBarAutocomplete = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const handleChange = (e) => setValue(e.target.value);

  const items = [
    {
      id: 0,
      name: "츄로스 랜드",
    },
    {
      id: 1,
      name: "칠성사이다 제로",
    },
    {
      id: 2,
      name: "펩시 제로",
    },
    {
      id: 3,
      name: "맛소금",
    },
    {
      id: 4,
      name: "오예스 미니",
    },
    { id: 5, name: "제로" },
  ];

  return (
    <Flex pt="48" justify="center" align="center" w="full" direction="column">
      <FormControl id="email" w="60">
        <FormLabel>Olympics Soccer Winner</FormLabel>
        <Input
          placeholder="placeholder"
          size="sm"
          value={value}
          onChange={handleChange}
          autoFocus
        />
        <FormHelperText>Who do you support.</FormHelperText>
      </FormControl>
      <Flex flexDirection="column">
        {items.map((item) => {
          if (item.name.includes(value)) {
            return <Text key={item.id}>{item.name}</Text>;
          }
          return;
        })}
      </Flex>
    </Flex>
  );
};

export default SearchBarAutocomplete;
