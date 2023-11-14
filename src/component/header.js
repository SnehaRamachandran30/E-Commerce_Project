function Head({ count }) {
  return (
    <div className="head">
      <img
        src="https://media.istockphoto.com/id/1251362621/photo/shopping-cart-vector-art-closeup-view.webp?b=1&s=170667a&w=0&k=20&c=wfBm1hd9T_CW9oxVec3SM3eDxYRRjkB0zHvzVR3WMm0="
        alt="cartlogo"
      />
      <p className="round">{count}</p>
    </div>
  );
}

export default Head;
