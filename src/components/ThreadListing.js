import ThreadDate from "./ThreadDate";
import Card from "./Card";
import "./ThreadListing.css";

function ThreadListing(props) {
  return (
    <div className="container">
      <div className="thread-item">
        <div className="thread-info">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <ThreadDate date={props.date} />
        </div>
      </div>
    </div>
  );
}

export default ThreadListing;
