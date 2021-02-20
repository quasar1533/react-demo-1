const App = () => {
  return (
    <div>
      App component
      <Component list={["a", "b", "c"]} />
    </div>
  );
};

const Component = (props) => {
  const array = [];
  for (let i = 0; i < props.list.length; i++) {
    array.push(
      <div key={i}>
        {i}:{props.list[i]}
      </div>
    );
  }
  return <div>{array}</div>;
};

export default App;
