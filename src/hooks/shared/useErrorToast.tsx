import { CloseButton, HStack, Icon, useToast } from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/react'
import { FailureResponseV2 } from '../../types/api'
import React from 'react'
import { WarningIcon } from '@chakra-ui/icons'

interface CustomMessages {
  [status: number]: string
}

export const useErrorToast = () => {
  const toast = useToast()

  const createErrorToast = (errorMessage: string) => {
    toast({
      title: errorMessage,
      status: 'error',
      isClosable: true,
      duration: 5000,
      position: 'bottom',
      containerStyle: {
        marginBottom: '10vh',
      },
      render: ({ id }) => (
        <ToastUI
          errorMessage={errorMessage}
          onClose={() => {
            if (id) toast.close(id)
          }}
        />
      ),
    })
  }

  const showErrorToast = (
    error?: FailureResponseV2,
    customMessages?: CustomMessages
  ) => {
    let errorMessage: string | undefined = ''

    if (customMessages && error?.status && customMessages[error?.status]) {
      errorMessage = customMessages[error.status]
    } else if (error?.status === 403) {
      errorMessage = '권한이 없습니다. 새로고침 후 다시 시도해주세요.'
    } else if (error?.status === 500) {
      errorMessage = '예상치 못한 에러가 발생했습니다.'
    } else {
      errorMessage = error?.message || '알 수 없는 에러가 발생했습니다.'
    }

    createErrorToast(errorMessage)
  }

  return { showErrorToast, createErrorToast }
}

export const ToastUI = ({
  errorMessage,
  onClose,
}: {
  errorMessage?: string
  onClose: () => void
}) => (
  <Box
    color='white'
    p={4}
    bg='red.400'
    borderRadius='md'
    boxShadow='lg'
    maxWidth='400px'
  >
    <HStack justifyContent='space-between'>
      <HStack>
        <Icon as={WarningIcon} w={6} h={6} color='white' />
        <Text fontSize='md'>{errorMessage}</Text>
      </HStack>
      <CloseButton onClick={onClose} />
    </HStack>
  </Box>
)
