import "./UserInformation.css";

export default function UserInformation(props) {
  console.log(props);
  return (
    <div className="user-card">
      <div className="user-image-styling">
        <img className="image-style" src={props.avatarURL} />
        <svg
          className="verified-style"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4B5965"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div className="naming-styling">
        <span className="name-styling">
          {props.firstName} {props.lastName}
        </span>
        <span className="user-name-styling">@{props.userName}</span>
      </div>
      <div className="user-stats-info-styling">
        <div>
          <span className="number-styling">
            {props.noOfPosts.toLocaleString()}
          </span>
          <br />
          <span className="sub-text">Post</span>
        </div>
        <div>
          <span className="number-styling">
            {props.noOfFollowers.toLocaleString()}
          </span>
          <br />
          <span className="sub-text">Followers</span>
        </div>
        <div>
          <span className="number-styling">
            {props.noOfFollowing.toLocaleString()}
          </span>
          <br />
          <span className="sub-text">Following</span>
        </div>
      </div>
    </div>
  );
}
