import './App.css';
import NavBar from './components/NavBar';
import CardItem from './components/cardItem';
import ShopPage from './pages/shopPage';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite'
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default observer(App);


