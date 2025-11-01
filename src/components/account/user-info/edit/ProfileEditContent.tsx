import { useEditUserInfoMutation } from '@/../hooks/query/useUserQuery'
import { MAX_BIO_LENGTH, useBioHandler } from '@/hooks/bio/useBioHandler'
import { useNicknameHandler } from '@/hooks/nickname/useNicknameHandler'
import { useErrorToast } from '@/hooks/shared/useErrorToast'
import { Box, Container, Flex, StackProps, Text, Tooltip, VStack } from '@chakra-ui/react'
import BeerButton from '@/components/shared/Buttons/BeerButton'
import dayjs from 'dayjs'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import CommonValidationInput from '../../../shared/CommonValidationInput'
import { ProfileUploadAvatar } from './ProfileUploadAvatar'
import { Analytics } from '../../../../utils/analytics'

interface ProfileEditContentProps extends StackProps {
  existingImageURl: string
  username: string
  statusMessage?: string
  usernameUpdatedAt?: string
}

export const ProfileEditContent: React.FC<ProfileEditContentProps> = ({
  existingImageURl,
  username,
  statusMessage,
  usernameUpdatedAt,
}) => {
  const accessToken = Cookies.get('beerlot-oauth-auth-request') ?? ''
  const router = useRouter()
  const { showErrorToast } = useErrorToast()
  const nextChangeDate = usernameUpdatedAt
    ? dayjs(usernameUpdatedAt).add(30, 'day').format('YYYY-MM-DD')
    : null

  const {
    usernameInput,
    validNickname,
    onChangeUsername,
    usernameGuideText,
    isUsernameTouched,
  } = useNicknameHandler(username)

  // image
  const [imageUrl, setImageUrl] = useState<string>(existingImageURl)

  // bio
  const { bioInput, onChangeBio, validBio, bioGuidText, hasTouchedBio } =
    useBioHandler(statusMessage)

  // tooltip state for permission error
  const [showPermissionTip, setShowPermissionTip] = useState(false)

  // submit
  const editUserInfoMutation = useEditUserInfoMutation(accessToken, {
    onError: (error) => {
      showErrorToast(error.response, {
        400: nextChangeDate
          ? `${nextChangeDate} 이후로 변경할 수 있어요!`
          : '닉네임은 30일에 한 번만 변경할 수 있어요 :(',
        // 400: '닉네임은 30일에 한 번만 변경할 수 있어요 :('
      })
    },
    onSuccess: () => {
      router.push('/account')
    },
  })

  const handleClickComplete = () => {
    Analytics.editProfile()
    editUserInfoMutation.mutate({
      username: usernameInput ?? '',
      status_message: bioInput ?? '',
      image_url: imageUrl,
    })
  }

  const isChangeCompleted = validNickname && validBio !== false

  return (
    <>
  
    <Flex flexDir='column' h='full' gap={'64px'}justifyContent='space-between'>
        <VStack>
          <ProfileUploadAvatar imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </VStack>
        <VStack gap='16px' w='100%'>
          <CommonValidationInput
            label='닉네임'
            input={usernameInput}
            isValid={validNickname}
            isTouched={isUsernameTouched}
            onChange={onChangeUsername}
            guideText={usernameGuideText}
          />
          <CommonValidationInput
            label='소개'
            placeholder='소개는 25자까지 입력이 가능해요!'
            maxLength={MAX_BIO_LENGTH}
            input={bioInput}
            isTouched={hasTouchedBio}
            isValid={validBio}
            onChange={onChangeBio}
            guideText={bioGuidText}
          />
        </VStack>
      <BeerButton
        label='완료'
        size='lg'
        variant='primary'
        isDisabled={!isChangeCompleted}
        onClick={handleClickComplete}
      />
      </Flex>
  )
}
