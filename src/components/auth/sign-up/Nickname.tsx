import { Box, Checkbox, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { SignUpType } from "../../../../interface/types";
import {
  checkIsValidNickname,
  getNicknameHelperText,
} from "../../../../service/input";
import FloatingButton from "../../shared/FloatingButton";
import CommonValidationInput from "../../shared/CommonValidationInput";
import { useCheckUsernameMutation } from "../../../../hooks/mutations/useUserMutation";
import { useInput } from "../../../../hooks/useNicknameInput";
import { useNicknameHandler } from "@/hooks/nickname/useNicknameHandler";

interface NicknameProps {
  setUserInfo: (key: keyof SignUpType, value: string) => void;
  onNext: () => void;
}

const Nickname: React.FC<NicknameProps> = ({ onNext, setUserInfo }) => {
  /**
   * nickname
   */
  const {
    usernameInput,
    validNickname,
    onChangeUsername,
    usernameGuideText,
    isUsernameTouched,
    isCheckingDuplication,
  } = useNicknameHandler("");

  const [checkedItems, setCheckedItems] = useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isReadyForNextStep = allChecked && !!validNickname;

  const handleClick = () => {
    if (!usernameInput) return;
    setUserInfo("username", usernameInput);
    onNext();
  };

  return (
    <VStack alignItems="start" gap="60px" w="100%">
      <Box pl="2.5px" mt="44px">
        <Text textStyle="h1">닉네임을 정해볼까요?</Text>
      </Box>
      <FloatingButton
        onClick={handleClick}
        disabled={!isReadyForNextStep}
        text="다음으로"
        bgColor={isReadyForNextStep ? "orange.200" : "gray.200"}
        textColor={isReadyForNextStep ? "white.100" : "black.100"}
        boxShadow={
          isReadyForNextStep ? "0px 8px 16px rgba(0, 0, 0, 0.3)" : "none"
        }
        isLoading={isCheckingDuplication}
        _hover={{}}
      />

      <CommonValidationInput
        input={usernameInput}
        isValid={validNickname}
        isTouched={isUsernameTouched}
        onChange={onChangeUsername}
        guideText={usernameGuideText}
      />

      <Box px="8px" w="100%">
        <Checkbox
          w="100%"
          bg="gray.100"
          borderRadius="5px"
          py="8px"
          px="6px"
          isChecked={allChecked}
          onChange={(e) =>
            setCheckedItems([e.target.checked, e.target.checked])
          }
        >
          <Text textStyle="h3_bold" textColor="black.100">
            전체 동의
          </Text>
        </Checkbox>
        <Checkbox
          w="100%"
          borderRadius="5px"
          py="8px"
          px="6px"
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          <Text textStyle="h3" textColor="black.100">
            (필수) 비어랏 이용약관 동의
          </Text>
        </Checkbox>
        <Checkbox
          w="100%"
          borderRadius="5px"
          py="8px"
          px="6px"
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          <Text textStyle="h3" textColor="black.100">
            (필수) 개인정보 수집 및 이용 동의
          </Text>
        </Checkbox>
      </Box>
    </VStack>
  );
};

export default Nickname;
