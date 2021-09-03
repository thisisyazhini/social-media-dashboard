import "./SocialMediaStats.css";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function SocialMediaStats(props) {
  const isfontColorGreen = true;
  if (props.brandGrowthStat < 0) {
    isfontColorGreen = false;
  }
  return (
    <div
      className="social-media-stats-card"
      style={{ backgroundColor: props.cardBackground }}
    >
      <div className="intro">
        <div className="info">
          {props.brandLogoSource}
          <span className="name">{props.brandName}</span>
        </div>
        <div>
          {isfontColorGreen && (
            <span className="growth-number" style={{ color: "green" }}>
              +{props.brandGrowthStat}%
            </span>
          )}
        </div>
      </div>
      <div className="followerStat">
        <span className="stat-number">
          {props.brandFollowerCount.toLocaleString()}
          <span className="text">Followers</span>
        </span>
        <div style={{ width: 50, height: 50 }}>
          <CircularProgressbar
            styles={{
              path: { stroke: props.percentColor },
              text: { fill: "#000", fontSize: "25px", fontWeight: 700 },
              trail: { stroke: props.percentBackgroundColor },
            }}
            value={props.brandFollowerPercentage}
            text={`${props.brandFollowerPercentage}%`}
          />
        </div>
      </div>
    </div>
  );
}

export default SocialMediaStats;
