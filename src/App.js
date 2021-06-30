import Header from './components/Header';
import Main from './components/Main/Main';

//context
import ContextProvider from './contexts/StateContext';

//styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

function App() {
  return (
    <ContextProvider>
      <div className='bg-youtube vh-100 '>
        <Header />
        <Main />
      </div>
    </ContextProvider>
  );
}

export default App;
