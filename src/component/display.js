function Display({ dress, counts }) {
  return (
    <div className="dress">
      <img src={dress.image} alt="womens dress" />
      <p className="type">{dress.type}</p>
      <p className="price">{dress.price}</p>
      <input
        type="button"
        value="Add to cart"
        className="button"
        onClick={counts}
      />
    </div>
  );
}

export default Display;
