import {Box, Container, VStack, Text} from "@chakra-ui/react";
import {BeerInfoHStack} from "./BasicPanelList";

export const ReviewPanelList = () => {
  const reviewData = [];
  return (
    <Container px="8px">
      <VStack px={"12px"} gap="10px" alignItems={"start"}>
        <Box>
          <Text textColor="black.100" as="span" textStyle={"h2_bold"}>
            리뷰{" "}
          </Text>
          <Text textColor="orange.200" as="span" textStyle={"h2_bold"}>
            {reviewData.length}
          </Text>
        </Box>
        <BeerInfoHStack
          label={"제보된 판매처"}
          desc={"편의점"}
          flexBasis={"81px"}
        />
        <BeerInfoHStack label={"평균 별점"} flexBasis={"81px"}>
          <Box bg="yellow" w="20px" h="20px" />
        </BeerInfoHStack>
      </VStack>
    </Container>
  );
};
