import { Review } from "types/review";
import starImg from "../../assets/star.svg";

const ReviewsListing = (review: Review) => {
    return (
        <div className="card-evaluation d-flex flex-column gap">
            <div className="evaluation">
                <div className="d-flex gap">
                    <img src={starImg} alt="" className="star-img" />
                    <h6>{review.user.name}</h6>
                </div>
                <div className="evaluation-text">
                    <p>{review.text}</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewsListing;