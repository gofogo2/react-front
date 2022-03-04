import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import "./assets/css/topbar.css";
import gofogo from "./assets/images/gofogo.jpg";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">gofogo</span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={gofogo} className="topAvatar" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
