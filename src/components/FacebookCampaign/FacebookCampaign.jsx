import "./FacebookCampaign.css";

export default function FacebookCampaign(props) {
  return (
    <div className="campaign-card">
      <div className="campaign-header">
        <div className="font-style">Facebook campaign</div>
        <button className="button-style">{props.status}</button>
      </div>
      <div className="row-info">
        <div className="number-style">
          {props.followersCount.toLocaleString()}
          <br />
          <span className="goal-text">Followers today</span>
        </div>
        <hr />
        <div className="number-style">
          {props.followersGoalCount.toLocaleString()}
          <br />
          <span className="goal-text">Followers goals</span>
        </div>
      </div>
      <div className="row-info">
        <div>
          <img
            className="user-image-style"
            src="https://images.unsplash.com/photo-1503467913725-8484b65b0715?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          />
          <img
            className="user-image-style"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          />
          <img
            className="user-image-style"
            src="https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          />
          <img
            className="user-image-style"
            src="https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          />
          <img
            className="user-image-style"
            src="https://images.unsplash.com/photo-1504347538039-a53f6ff0131d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=ca7cc3097e24937904aadfe78b36780c"
          />
        </div>
        <div>
          <span className="number-text">
            +{props.followersAddedCount.toLocaleString()}
          </span>
          <br />
          <span className="small-text">All time</span>
        </div>
      </div>
    </div>
  );
}
