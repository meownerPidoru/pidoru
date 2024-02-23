import './App.css';
import NavBar from './com/NavBar';
import CardItem from './com/cardItem';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './com/Approuters';
function App() {
	return(
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
}
export default App;