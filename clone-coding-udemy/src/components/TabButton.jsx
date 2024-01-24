export default function TabButton(props) {
  function handleClick() {


  }
  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}