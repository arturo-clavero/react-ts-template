
import './index.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Main from './pages/Main';

function App() {
	return (
		<Router>
		<Routes>
		  <Route path="/" element={<Main />} />
		  <Route path="*" element={<Navigate to="/" />} />
		</Routes>
	  </Router>
	);
}

export default App
