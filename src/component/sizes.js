function Sizes({ select }) {
  return (
    <div className="sizes">
      <h2>Sizes:</h2>
      <input
        type="button"
        className="size"
        value="XS"
        id="size"
        onClick={(e) => select(e)}
      />
      <input
        type="button"
        className="size"
        value="S"
        id="size"
        onClick={(e) => select(e)}
      />
      <input
        type="button"
        className="size"
        value="M"
        id="size"
        onClick={(e) => select(e)}
      />
      <input
        type="button"
        className="size"
        value="L"
        id="size"
        onClick={(e) => select(e)}
      />
      <input
        type="button"
        className="size"
        value="XL"
        id="size"
        onClick={(e) => select(e)}
      />
      <input
        type="button"
        className="size"
        value="XXL"
        id="size"
        onClick={(e) => select(e)}
      />
    </div>
  );
}

export default Sizes;
