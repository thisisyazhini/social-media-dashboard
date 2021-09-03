import "./UserActionStats.css";
import { Line } from "react-chartjs-2";

export default function UserActionStats(props) {
  return (
    <div className="user-action-stats-card">
      <div className="header">
        <span>{props.logo}</span>
        <span className="action-name">{props.name}</span>
      </div>
      <div className="data-row">
        <span className="action-stat">{props.statNumber.toLocaleString()}</span>
        <Line
          height={75}
          width={150}
          data={props.data}
          options={props.options}
        />
      </div>
    </div>
  );
}
