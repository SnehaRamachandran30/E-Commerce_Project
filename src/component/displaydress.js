import Display from "./display";

function Displaydress({ dresses, counts }) {
  return (
    <div className="dresses">
      {dresses.map((dress) => (
        <Display key={dress.id} dress={dress} counts={counts} />
      ))}
    </div>
  );
}

export default Displaydress;
