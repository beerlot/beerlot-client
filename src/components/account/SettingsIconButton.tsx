import { IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SettingGear } from '../../../public/svg'

export const SettingsIconButton = () => {
  const router = useRouter()
  const handleClickSettings = () => {
    router.push('/account/settings')
  }
  return (
    <IconButton
      size='sm'
      w='32px'
      h='32px'
      p={0}
      bg='transparent'
      aria-label='settings'
      icon={<SettingGear />}
      onClick={handleClickSettings}
    />
  )
}

export default SettingsIconButton


