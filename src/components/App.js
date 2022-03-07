import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";
import hogs from "../porkers_data";

function App() {

	const [showGreased, setShowGreased] = useState(false);
	const [sortBy, setSortBy] = useState("name");

	return (
		<div className="App">
			<Nav />
			<Filter showGreased={showGreased} onChangeShowGreased={setShowGreased}
			sortBy={sortBy} onChangeSortBy={setSortBy} />
			<HogList hogs={hogsToDisplay}/>
		</div>
	);
}

export default App;
