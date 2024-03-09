const Card = (props) => {
  const { imgUrl, cuisines, title, rating, estimation, discount, address } =
    props;
  return (
    <div className="res-card">
      <img src={imgUrl} alt="card-img" className="res-img" />
      <h3>{title}</h3>
      <div className="feedback-details">
        <p>⭐ {rating}</p>
        <p>{estimation}</p>
      </div>
      <p>{cuisines}</p>
      <p>{address}</p>
      <p className="res-discount"> 🏷️ {discount}</p>
    </div>
  );
};

export default Card;
