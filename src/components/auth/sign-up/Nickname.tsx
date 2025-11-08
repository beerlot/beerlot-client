import { Box, Container, Text, useToast } from '@chakra-ui/react'
import { Component, useState } from 'react'
import { SignUpType } from '../../../../interface/types'
import FloatingButton from '../../shared/FloatingButton'
import CommonValidationInput from '../../shared/CommonValidationInput'
import { useNicknameHandler } from '@/hooks/nickname/useNicknameHandler'
import { ConsentsSection } from '@components/auth/sign-up/ConsentsSection'
import { Analytics } from '../../../utils/analytics'

interface NicknameProps {
  setUserInfo: (key: keyof SignUpType, value: string) => void
  onNext: () => void
}

const Nickname: React.FC<NicknameProps> = ({ onNext, setUserInfo }) => {
  const {
    usernameInput,
    validNickname,
    onChangeUsername,
    usernameGuideText,
    isUsernameTouched,
    isCheckingDuplication,
  } = useNicknameHandler('')

  const [checkedItems, setCheckedItems] = useState([false, false])

  const isReadyForNextStep = checkedItems.every(Boolean) && !!validNickname
  const toast = useToast()
  const handleClick = () => {
    if (!usernameInput) {
      toast({
        title: '닉네임을 입력해주세요. 다른 닉네임을 입력해주세요.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return
    }
    Analytics.signupNickname()
    setUserInfo('username', usernameInput)
    onNext()
  }

  return (
    <Container
      pt={6}
      w={'full'}
      px={0}
      gap={'24px'}
      display={'flex'}
      pos={'relative'}
      flexDir={'column'}
    >
      <Text textStyle='h1'>닉네임을 정해볼까요?</Text>

      <CommonValidationInput
        input={usernameInput}
        isValid={validNickname}
        isTouched={isUsernameTouched}
        onChange={onChangeUsername}
        guideText={usernameGuideText}
      />

      <ConsentsSection
        checkedItems={checkedItems}
        onCheckItem={setCheckedItems}
      />
      <FloatingButton
        onClick={handleClick}
        isDisabled={!isReadyForNextStep}
        bgColor={'orange.200'}
        boxShadow={
          isReadyForNextStep ? '0px 8px 16px rgba(0, 0, 0, 0.3)' : 'none'
        }
        isLoading={isCheckingDuplication}
        _hover={{}}
      >다음으로</FloatingButton>
    </Container>
  )
}

export default Nickname
