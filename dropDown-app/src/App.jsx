import SelectDropdown from "./components/SelectDropdown";

function App() {
  const options = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ];

  const handleSelect = (selectedId) => {
    console.log("Selected option ID:", selectedId);
  };

  return (
    <div className="App">
      <h1>Select Dropdown Example</h1>
      <SelectDropdown
        options={options}
        placeholder="Select an option"
        onSelect={handleSelect}
      />
    </div>
  );
}

export default App;
