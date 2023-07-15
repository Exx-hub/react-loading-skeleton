import Skeleton from "react-loading-skeleton";

// create an array with cards length, each item is null, [null,null,null...]
// map through null array and return card skeleton for each card

function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(null)
    .map((_, i) => (
      <div className="card-skeleton" key={i}>
        <div className="left">
          {/* circle because image is circle and 40 is height and width of the image  */}
          <Skeleton circle width={40} height={40} />
        </div>
        <div className="right">
          <Skeleton count={4} style={{ marginBottom: ".6rem" }} />
        </div>
      </div>
    ));
}

export default CardSkeleton;
