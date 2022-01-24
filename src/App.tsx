import { Logo, Button } from "web3uikit";

function App() {
  return (
    <div className="App">
      <Logo color="black" theme="icon" />
      <Button
        id="test-button"
        onClick={function noRefCheck() {}}
        text="Secondary Button"
        theme="secondary"
        type="button"
      />
    </div>
  );
}

export default App;
