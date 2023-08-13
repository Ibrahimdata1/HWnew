import MainMenu from '../components/Mainmenu'
import BasicCard from '../components/BasicCard'
import { Stack } from '@mui/material'


const Home = () => {
  return (
    <>
      <MainMenu/>
      <Stack direction='row' gap={4} className='picStack'>
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>
      </Stack>
      <Stack direction='row' gap={4} className='picStack'>
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>
      </Stack>
      <Stack direction='row' gap={4} className='picStack'>
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>
      </Stack>

    </>
  )
}

export default Home
