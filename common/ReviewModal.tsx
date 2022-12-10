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
import {EditPencil} from "../public/svg";
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
        <ModalContent px="20px" border="1px solid blue" pb="40px">
          <ModalHeader pt="36px">
            <LeftCloseRandom onClose={onClose} title="글쓰기" />
          </ModalHeader>
          <ModalBody>
            <VStack gap="20px">
              {/* beer name */}
              <Flex>
                <Text textStyle="h2" textColor="black.100">
                  맥주 이름을 골라주세요!
                </Text>
                <Icon />
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
              <VStack p="10px" gap="10px">
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
                  placeholder="Here is a sample placeholder"
                  size="sm"
                />
                <IconButton
                  border="1px solid"
                  borderColor="orange.200"
                  borderRadius="10px"
                  p="5px 10px"
                  aria-label="attach-photo"
                  gap="10px"
                >
                  <Icon />
                  <Text>
                    사진 첨부하기 ({numberOfAttachedFile}/
                    {ReviewStatic.numberOfMaxAttachedFile})
                  </Text>
                </IconButton>
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
