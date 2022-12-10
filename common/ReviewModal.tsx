import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tag,
  Text,
  Textarea,
  useDisclosure,
  Icon,
  VStack,
} from "@chakra-ui/react";
import {ChangeEvent, useState} from "react";
import {ReviewStatic} from "../interface/static";
import {EditPencil, OrangeCamera, RightArrow} from "../public/svg";
import {LeftCloseRandom} from "./headers/LeftCloseRandom";
import {Rating} from "./Rating";

export const ReviewModal = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const handleSizeClick = () => {
    onOpen();
  };
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  const [numberOfAttachedFile, setNumberOfAttachedPhoto] = useState<number>(0);

  return (
    <Box>
      <Button
        onClick={handleSizeClick}
        w="70px"
        h="70px"
        pos="fixed"
        borderRadius="full"
        bg="orange.300"
        right="21px"
        bottom="72.5px"
      >
        {/* TODO: should be replaced */}
        <EditPencil />
      </Button>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalContent px="20px" pb="40px">
          <ModalHeader pt="46px">
            <LeftCloseRandom onClose={onClose} title="글쓰기" />
          </ModalHeader>
          <ModalBody p={0} pt="10px">
            <VStack
              gap="20px"
              justifyContent="flex-start"
              alignItems={"flex-start"}
            >
              {/* beer name */}
              <Flex justifyContent="space-between" alignItems="center" w="full">
                <Text textStyle="h2" textColor="black.100">
                  맥주 이름을 골라주세요!
                </Text>
                <RightArrow />
              </Flex>
              {/* rating */}
              <Flex flexDir="column">
                <Text textStyle="h2" textColor="black.100">
                  얼마나 맛있었나요?
                </Text>
                <Rating starSize={24} />
              </Flex>
              {/* purchase */}
              <Box>
                <Box>
                  <Text as="span" textStyle="h2" textColor="black.100">
                    이 맥주 어디서 구매하셨나요?{" "}
                  </Text>
                  <Text as="span" textStyle="h2" textColor="gray.200">
                    (선택)
                  </Text>
                </Box>
                <HStack>
                  {purchasePlaces.map((place) => {
                    return (
                      <Tag
                        key={place}
                        size="md"
                        variant="solid"
                        colorScheme="orange"
                      >
                        {place}
                      </Tag>
                    );
                  })}
                </HStack>
              </Box>
              {/* review */}
              <VStack py="10px" gap="10px" w="full" alignItems={"flex-start"}>
                <Box>
                  <Text as="span" textStyle="h2" textColor="black.100">
                    더 자세한 후기가 궁금해요!
                  </Text>
                  <Text as="span" textStyle="h2" textColor="gray.200">
                    (선택)
                  </Text>
                </Box>
                <Textarea
                  px="10px"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="10px"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="이 맥주가 맘에 드는/ 안 드는 자세한 이유를 들려주세요! 아님 맥주에 관한 추억이나.. 꿀조합 안주를 공유해볼까요~?"
                  h="200px"
                  maxLength={2000}
                />
                <Button
                  w="full"
                  bg="inherit"
                  _hover={{}}
                  _after={{}}
                  border="1px solid"
                  borderColor="orange.200"
                  borderRadius="10px"
                  p="5px 10px"
                  aria-label="attach-photo"
                  gap="10px"
                >
                  <OrangeCamera />
                  <Text textStyle="h3" textColor="orange.200">
                    사진 첨부하기 ({numberOfAttachedFile}/
                    {ReviewStatic.numberOfMaxAttachedFile})
                  </Text>
                </Button>
              </VStack>
            </VStack>
          </ModalBody>

          <ModalFooter px={0}>
            <Button
              onClick={onClose}
              w="full"
              bg={isCompleted ? "blue.100" : "gray.200"}
              boxShadow={
                isCompleted ? "0px 8px 16px rgba(0, 0, 0, 0.3)" : "initial"
              }
              borderRadius="10px"
            >
              <Text color="white.100" textStyle="h2">
                작성 완료
              </Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

//TODO : should be replaced
export const purchasePlaces = ["편의점", "펍", "대형마트", "기타"];
