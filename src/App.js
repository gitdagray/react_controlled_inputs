import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem("shoppinglist")) || []
	);

	const [newItem, setNewItem] = useState("");
	const [search, setSearch] = useState("");

	useEffect(() => {
		localStorage.setItem("shoppinglist", JSON.stringify(items));
	}, [items]);

	const saveItems = (newItems) => {
		setItems(newItems);
	};

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, checked: false, item };
		const listItems = [...items, myNewItem];
		saveItems(listItems);
	};

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		saveItems(listItems);
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		saveItems(listItems);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addItem(newItem);
		setNewItem("");
	};

	return (
		<div className="App">
			<Header title="Grocery List" />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<SearchItem search={search} setSearch={setSearch} />
			<Content
				items={items.filter((item) =>
					item.item.toLowerCase().includes(search.toLowerCase())
				)}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	);
}

export default App;
