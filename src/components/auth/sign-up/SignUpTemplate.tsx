import { Box, Container, Flex, HStack } from '@chakra-ui/react'
import Nickname from './Nickname'
import { useState } from 'react'
import CompleteTemplate from './CompleteTemplate'
import { SignUpType } from '../../../../interface/types'
import BeerTasteSelection from './BeerTasteSelection'

export enum StepEnum {
  NICKNAME,
  BEERS,
  COMPLETE,
}

const LeftBackCompleteCircles: React.FC<{ step: StepEnum }> = ({ step }) => {
  const isFirstActive = step === StepEnum.NICKNAME
  return (
    <Flex w='full' h='40px' alignItems='center' justifyContent='center'>
      <HStack spacing='6px'>
        <Box bg={isFirstActive ? 'orange.200' : 'gray.200'} w={isFirstActive ? '20px' : '8px'} h='8px' borderRadius='16px' />
        <Box bg={!isFirstActive ? 'orange.200' : 'gray.200'} w={!isFirstActive ? '20px' : '8px'} h='8px' borderRadius='16px' />
      </HStack>
    </Flex>
  )
}

const SignUpTemplate = () => {
  const [step, setStep] = useState<StepEnum>(StepEnum.NICKNAME)
  const [userInfo, setUserInfo] = useState<SignUpType>({})
  const [selectedBeers, setSelectedBeers] = useState<number[]>([])

  const updateSelectedBeers = (beerId: number) => {
    setSelectedBeers((prev) =>
      prev.includes(beerId)
        ? prev.filter((id) => id !== beerId)
        : [...prev, beerId]
    )
  }

  const updateUserInfo = (key: keyof SignUpType, value: string) => {
    setUserInfo((prev) => ({ ...prev, [key]: value }))
  }

  const handleNext = () => {
    setStep((prev) => prev + 1)
  }

  const handleAdminSkip = () => {
    setUserInfo({ username: 'Admin' })
    setStep(StepEnum.COMPLETE)
  }

  return (
    <Box w='full' h='100vh' bg='gray.100'>
      <Container h='full' bg='white' p={0} maxW='450px'>
        <Flex w={'full'} h={'full'} flexDirection='column'>
          <Box flex={1} overflowY='auto' className='hide-scrollbar'>
            <Box pos={'relative'}>
              <Box
                pos={'absolute'}
                top={0}
                right={0}
                w={'50px'}
                h={'50px'}
                opacity={0}
                onClick={handleAdminSkip}
                cursor={'pointer'}
                zIndex={999}
              />
              <LeftBackCompleteCircles step={step} />

              {step === StepEnum.NICKNAME && (
                <Nickname setUserInfo={updateUserInfo} onNext={handleNext} />
              )}

              {step === StepEnum.BEERS && (
                <BeerTasteSelection
                  username={userInfo.username}
                  selectedBeers={selectedBeers}
                  updateSelectedBeers={updateSelectedBeers}
                  onNext={handleNext}
                />
              )}

              {step === StepEnum.COMPLETE && (
                <CompleteTemplate userInfo={userInfo} />
              )}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default SignUpTemplate
