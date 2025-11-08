import { Box, Flex, HStack } from '@chakra-ui/react'
import Nickname from './Nickname'
import { useState } from 'react'
import CompleteTemplate from './CompleteTemplate'
import { SignUpType } from '../../../../interface/types'
import BeerTasteSelection from './BeerTasteSelection'
import { Header } from '../../shared/Header'
import { useRouter } from 'next/router'

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
  const router = useRouter()

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
    setStep((prev) => {
      if (prev === StepEnum.NICKNAME) return StepEnum.BEERS
      if (prev === StepEnum.BEERS) return StepEnum.COMPLETE
      return StepEnum.COMPLETE
    })
  }

  const handleBack = () => {
    setStep((prev) => {
      if (prev === StepEnum.NICKNAME) {
        router.back()
        return StepEnum.NICKNAME
      }
      if (prev === StepEnum.BEERS) return StepEnum.NICKNAME
      return StepEnum.BEERS
    })
  }

  const handleAdminSkip = () => {
    setUserInfo({ username: 'Admin' })
    setStep(StepEnum.COMPLETE)
  }

  return (
            )}
    <>
      <Header onBack={handleBack} center={<LeftBackCompleteCircles step={step} />}>
        <Box
          w={'32px'}
          h={'32px'}
          opacity={0}
          onClick={handleAdminSkip}
          cursor={'pointer'}
        />
      </Header>

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
    </>
  )
}

export default SignUpTemplate
