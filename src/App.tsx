import createPersistedState from "use-persisted-state";
import "./App.css";

const useText = createPersistedState("text");

function App() {
  const [text, setText] = useText("");
  return (
    <div className="App">
      <p>Enter some text you would like to store</p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        data-testid="user input"
      />
      <span className="display">{text}</span>
    </div>
  );
}

export default App;
