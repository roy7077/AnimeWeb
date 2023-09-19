
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import store from './utils/store';
import { Provider } from 'react-redux'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import InfoCard from './components/InfoCard';
import About from './components/About';
import useOnline from './utils/useOnline';
import Offline from './components/Offline';

function App() {

  const online=useOnline();
  if(!online)
  return <Offline/>

  return (
    <div className=''>
      <Provider store={store}>
        <Header/>
        <Outlet/>
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
