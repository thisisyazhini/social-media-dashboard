import "./App.css";
import SocialMediaStats from "./components/socialMediaStatsComponent/SocialMediaStats";
import UserActionStats from "./components/UserActionStats/UserActionStats";
import FacebookCampaign from "./components/FacebookCampaign/FacebookCampaign";
import UserInformation from "./components/UserInformation/UserInformation";
import SideNavPane from "./components/SideNavPane/SideNavPane";
import Statistics from "./components/Statistics/Statistics";
import Header from "./components/Header/Header";

const brandStats = [
  {
    cardBackground: "#DBECFD",
    percentColor: "#97C7FA",
    percentBackgroundColor: "#D4E8FD",
    brandName: "Facebook",
    brandLogoSource: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-facebook"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
      </svg>
    ),
    brandGrowthStat: "21.7",
    brandFollowerCount: 10328,
    brandFollowerPercentage: 30,
  },
  {
    cardBackground: "#D2FFDB",
    percentColor: "#72E5CB",
    percentBackgroundColor: "#C5FBD7",
    brandName: "Instagram",
    brandLogoSource: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-instagram"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
      </svg>
    ),
    brandGrowthStat: "34.3",
    brandFollowerCount: 17536,
    brandFollowerPercentage: 57,
  },
  {
    cardBackground: "#E5E5FE",
    percentColor: "#8874E0",
    percentBackgroundColor: "#DDDAFD",
    brandName: "Twitter",
    brandLogoSource: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-twitter"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
      </svg>
    ),
    brandGrowthStat: "15.9",
    brandFollowerCount: 107291,
    brandFollowerPercentage: 41,
  },
];
const actionStats = [
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-user-check"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 11l2 2l4 -4" />
      </svg>
    ),
    name: "Followers",
    statNumber: 1037,
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          data: [2, 5, 1, 20, 11, 36, 9],
          fill: false,
          backgroundColor: "#9284C3",
          borderColor: "#9284C3",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-heart"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
    ),
    name: "Likes",
    statNumber: 23735,
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          data: [1, 7, 9, 14, 5, 10, 16],
          backgroundColor: "#A8DDD3",
          borderColor: "#A8DDD3",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-message-dots"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
        <line x1="12" y1="11" x2="12" y2="11.01" />
        <line x1="8" y1="11" x2="8" y2="11.01" />
        <line x1="16" y1="11" x2="16" y2="11.01" />
      </svg>
    ),
    name: "Comments",
    statNumber: 1139,
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          data: [8, 10, 3, 11, 9, 7, 2],
          fill: false,
          backgroundColor: "#D99CA3",
          borderColor: "#D99CA3",
          tension: 0.1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  },
];

const fbCampaignStats = [
  {
    status: "Active",
    followersCount: 1129,
    followersGoalCount: 50000,
    followersAddedCount: 7294,
  },
];

const userInformation = {
  ID: 101313783,
  avatarURL:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=707b9c33066bf8808c934c8ab394dff6",
  firstName: "Ryan",
  lastName: "Septimus",
  userName: "rayn.septimus",
  noOfPosts: 193,
  noOfFollowers: 17536,
  noOfFollowing: 274,
};

const userStatistics = [
  {
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: [400, 783, 203, 729, 911, 426, 579, 778, 301, 598, 998, 367],
          backgroundColor: [
            "#CCE5FF",
            "#CCE5FF",
            "#CCE5FF",
            "#000",
            "#CCE5FF",
            "#CCE5FF",
            "#CCE5FF",
            "#CCE5FF",
            "#CCE5FF",
            "#CCE5FF",
            "#CCE5FF",
            "#CCE5FF",
          ],
          borderColor: [
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
          ],
          borderWidth: 10,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
    startDate: "2 August",
    endDate: "8 August",
  },
];

function App() {
  return (
    <div className="App">
      <SideNavPane></SideNavPane>
      <div className="content-section">
        <Header {...userInformation}></Header>
        <div className="sub-sections">
          <div className="sub-section-1">
            <div className="social-media-stats">
              {brandStats.map((brandStat) => (
                <SocialMediaStats {...brandStat}></SocialMediaStats>
              ))}
            </div>
            <div>
              {userStatistics.map((userStats) => (
                <Statistics {...userStats}></Statistics>
              ))}
            </div>
            <div className="action-stats">
              {actionStats.map((actionStat) => (
                <UserActionStats {...actionStat}></UserActionStats>
              ))}
            </div>
          </div>
          <div className="sub-section-2">
            <div>
              <UserInformation {...userInformation}></UserInformation>
            </div>
            <div>
              {fbCampaignStats.map((fbCampaignStat) => (
                <FacebookCampaign {...fbCampaignStat}></FacebookCampaign>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
