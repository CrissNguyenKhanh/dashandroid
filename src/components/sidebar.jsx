import {
  BiBookAlt,
  BiHelpCircle,
  BiHome,
  BiMessage,
  BiStats,
  BiTask,
} from "react-icons/bi";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo--icon" />
        <h2>EduFlex</h2>
      </div>

      <div className="menu--list">
        <a href="" className="item active">
          <BiHome className="icon"/>
          dashboard
        </a>
        <a href="" className="item">
          <BiTask className="icon"/>
          assignment
        </a>
        <a href="" className="item">
          <BiStats className="icon"/>
          Report
        </a>
        <a href="" className="item">
          <BiMessage className="icon"/>
          Message
        </a>
        <a href="" className="item">
          <BiHelpCircle className="icon"/>
          Help
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
