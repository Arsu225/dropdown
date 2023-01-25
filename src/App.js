import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
	
	// These items would be displayed in the dropdown menu
	const options = ["HTML", "JAVASCRIPT", "REACT JS"];

	return (
		<div className="App">
			{/* Question */}
			<h1>You want to use dropdown ?</h1>
			{/* Dropdown Component */}
			{/* options array is send as props to Dropdown component */}
			<Dropdown options = {options}/>
		</div>
	);
}

export default App;