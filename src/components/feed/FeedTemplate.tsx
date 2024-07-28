import { Box, Container, useDisclosure } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { CenteredTitle } from "../shared/Headers/CenteredTitle";
import { ReviewModalTriggerButton } from "../shared/ReviewModal/ReviewModalTriggerButton";
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
