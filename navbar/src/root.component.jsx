export default function Root(props) {
  function onClick() {
    const event = new CustomEvent("onNavClick");
    document.dispatchEvent(event);
  }
  return (
    <section>
      {props.name} is mounted!
      <hr />
      <button onClick={onClick}>broadcast</button>
    </section>
  );
}
