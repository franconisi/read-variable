import useRead from "./useRead";

function App() {
  const { variable, fetchVariable } = useRead();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <h1>Variable</h1>
      <p>{variable}</p>
      <button onClick={fetchVariable}>Fetch variable value</button>
    </div>
  );
}

export default App;
