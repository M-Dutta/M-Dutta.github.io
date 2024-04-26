import './App.css';
import SkillBlock from './components/skillBlock/skillBlock'
import PlacesWorked from './components/placesWorked/placesWorked'
import Me from './components/me/me'
import { Container, Box } from '@material-ui/core';
import { skillset_md, me_md, portrait, toastInfo, revelInfo, equifaxInfo, } from './constants'

function App() {

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
    </Container>
  );
}

export default App;
