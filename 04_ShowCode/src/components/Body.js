import { resImageUrl, restaurants } from "../config";
import Card from "./Card";

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {restaurants.map(({ info }) => (
          <Card
            key={info?.id}
            imgUrl={resImageUrl + info?.cloudinaryImageId}
            title={info?.name}
            rating={info?.avgRatingString}
            estimation={info?.sla?.slaString}
            cuisines={info?.cuisines?.join(", ")}
            address={info?.locality}
            discount={
              info?.aggregatedDiscountInfoV3?.header +
              " " +
              info?.aggregatedDiscountInfoV3?.subHeader
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
