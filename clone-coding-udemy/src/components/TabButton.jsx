export default function TabButton(props) {
  return (
    <li>
      <button onClick={props.onselect}>{props.children}</button>
    </li>
  );
}