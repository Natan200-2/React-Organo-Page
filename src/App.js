import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [colaborators, setColaborators] = useState([])
  
  const onNewColaborator = (colaborator) => {
    console.log(colaborator)
    setColaborators([...colaborators, colaborator])
  }

  return (
    <div className="App">
        <Banner/>
        <Form onRegister = {colaborator => onNewColaborator(colaborator)}/>
    </div>
  );
}

export default App;
