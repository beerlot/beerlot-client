import {Button, Container, Link, Text} from "@chakra-ui/react";
import React from "react";

export const InquiryTemplate = () => {
  // put it into environment variable
  const beerlotEmail = process.env.NEXT_PUBLIC_INQUIRY_EMAIL;

  return (
    <Container centerContent border="1px solid">
      <Text textColor="black.100">사용하시면서 문의사항이 생겼나요?🧐</Text>
      <Text textColor="gray.300" mt="24px">
        아래 버튼을 눌러 문의해주세요! 문의사항은 자세히 적어주실수록 좋아요 :)
      </Text>
      <Button
        mt="24px"
        as={Link}
        href={`mailto:?subject=${beerlotEmail}`}
        py={"10px"}
        px={"73px"}
        h="fit-content"
        bg="gray.100"
      >
        <Text textColor={"black.100"} textStyle="h3_bold">
          이메일로 문의하기
        </Text>
      </Button>
    </Container>
  );
};
