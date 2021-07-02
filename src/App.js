import Header from './components/Header/Header';
import Main from './components/Main/Main';

//context
import ContextProvider from './contexts/StateContext';

//styles
import './styles/custom.css';

function App() {
  return (
    <ContextProvider>
      <div className='vh-100'>
        <Header />
        <Main />
      </div>
    </ContextProvider>
  );
}

export default App;
