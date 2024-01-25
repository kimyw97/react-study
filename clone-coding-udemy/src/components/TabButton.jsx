export default function TabButton(props) {
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}