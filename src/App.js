//context
import ContextProvider from './contexts/StateContext';

//styles
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './styles/index.scss';
import Header from './components/Header';
import Main from './components/Main/Main';

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
