import Banner from './components/Banner';
import InputText from './components/InputText';

function App() {
  return (
    <div className="App">
        <Banner/>
        <InputText title="Nome" placeholder="Digite seu nome"/>
    </div>
  );
}

export default App;
