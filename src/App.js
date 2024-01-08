import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#37c474',
      secondaryColor: '#b3ffd4af'
    },
    {
      name: 'UX/UI Design',
      primaryColor: '#3468C0',
      secondaryColor: '#bdcffe'
    },
    {
      name: 'DevOps',
      primaryColor: '#4F6F52',
      secondaryColor: '#D2E3C8'
    },
    {
      name: 'FrontEnd',
      primaryColor: '#7360DF',
      secondaryColor: '#dbbcfb'
    },
    {
      name: 'BackEnd',
      primaryColor: '#C70039',
      secondaryColor: '#ff8b8b'
    }
  ] 

  const [colaborators, setColaborators] = useState([])
  
  const onNewColaborator = (colaborator) => {
    console.log(colaborator)
    setColaborators([...colaborators, colaborator])
  }

  return (
    <div className="App">
        <Banner/>
        <Form teams={teams.map(team => team.name)} onRegister = {colaborator => onNewColaborator(colaborator)}/>
        {teams.map(team => {
          return <Team 
                    key={team.name} 
                    name={team.name} 
                    primaryColor={team.primaryColor} 
                    secondaryColor={team.secondaryColor}
                    colaborators={colaborators.filter(colaborator => colaborator.team === team.name)}
                    />
        })}
    </div>
  );
}

export default App;
