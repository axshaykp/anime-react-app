import React from 'react'
import Home from './components/home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Overview from './components/overview/Overview'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/overview/:orderId" element={<Overview />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App;