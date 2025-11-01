import { Box, Button, ButtonProps, Container } from '@chakra-ui/react'
import { EditPencil } from '../../../../../public/svg'

interface ReviewModalTriggerButtonProps extends ButtonProps {}

export const ReviewModalTriggerButton: React.FC<
  ReviewModalTriggerButtonProps
> = ({ ...props }) => {
  return (
    <Box pos='fixed' left={0} right={0} bottom={0} zIndex={1100} pointerEvents='none'>
      <Container maxW='450px' p={0} position='relative'>
        <Button
          w='70px'
          h='70px'
          pos='absolute'
          borderRadius='full'
          bg='orange.300'
          bottom='84px'
          right='16px'
          _hover={{}}
          pointerEvents='auto'
          {...props}
        >
          <EditPencil />
        </Button>
      </Container>
    </Box>
  )
}
