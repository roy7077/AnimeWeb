
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import store from './utils/store';
import { Provider } from 'react-redux'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import InfoCard from './components/InfoCard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    // loader: rootLoader,
  },
  {
    path: "/searched/:id",
    element: <InfoCard/>,
  }
]);


function App() {
  return (
    <div className=''>
      <Provider store={store}>
        <Header/>
        <RouterProvider router={router}/>
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
