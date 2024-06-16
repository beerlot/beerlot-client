import {
  Box,
  Button,
  ButtonProps,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { EditPencil } from "../../../public/svg";
import { CenteredTitle } from "../shared/Headers/CenteredTitle";
import { ReviewModalWrapper } from "../shared/ReviewModal/ReviewModalWrapper";
import { FeedTabList } from "./FeedTabList";

export const FeedTemplate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const accessToken = Cookies.get("beerlot-oauth-auth-request") ?? "";
  const router = useRouter();

  const handleOpenReviewModal = () => {
    if (!accessToken) {
      router.push("/login");
      return;
    }
    onOpen();
  };

  return (
    <Box w="full" h="100vh" bg="gray.100" overflowY={"auto"}>
      <Container p={0} bg="white" maxW="450px" h={"full"}>
        <CenteredTitle />
        <FeedTabList />

        <ReviewModalTriggerButton onClick={handleOpenReviewModal} />
        <ReviewModalWrapper isModalOpen={isOpen} onCloseModal={onClose} />
      </Container>
    </Box>
  );
};

interface ReviewModalTriggerButtonProps extends ButtonProps {}

const ReviewModalTriggerButton: React.FC<ReviewModalTriggerButtonProps> = ({
  ...props
}) => {
  return (
    <Button
      w="70px"
      h="70px"
      pos="fixed"
      borderRadius="full"
      bg="orange.300"
      bottom={100}
      right={"10vw"}
      _hover={{}}
      {...props}
    >
      <EditPencil />
    </Button>
  );
};
