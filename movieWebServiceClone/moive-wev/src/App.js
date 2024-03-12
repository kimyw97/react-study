import Button from './Button';

function App() {
  return (
    <div>
      <h2>welcome back!</h2>
      <Button text="Click me" onClick={() => alert('Button clicked!')} />
    </div>
  );
}

export default App;

