import './App.css'
import { Container, Box } from '@mui/material';
import Me from './components/me/me'
import SkillBlock from './components/skillBlock/skillBlock'
import PlacesWorked from './components/placesWorked/placesWorked'
import { skillset_md, me_md, portrait, toastInfo, revelInfo, equifaxInfo } from './constants'
import { SideBar } from './components/sideBar/sideBar';

const App = () => {
  return (
    <Container className="Portfolio">
      <Box style={{ marginTop: '30px' }}></Box>
      <Container>
        <Me photoFile={portrait} contentFile={me_md}></Me>
        <Box style={{ marginTop: '30px' }}></Box>
        <SkillBlock type='Languages' contentFile={skillset_md}></SkillBlock>
        <Box style={{ marginTop: '30px' }}></Box>
        <PlacesWorked workplacesInfo={[toastInfo, revelInfo, equifaxInfo]}></PlacesWorked>
      </Container>
      <SideBar></SideBar>
    </Container>

  );
}

export default App
