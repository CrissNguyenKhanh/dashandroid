import ProfileHeader from "./profilHeader";
import "../styles/profileheader.css";
import { Image1 } from "../assset/Image1";
import { BiBook } from "react-icons/bi";
const course = [
  {
    title: "Html/css",
    duration: "2 Houres",
    icon: <BiBook />,
  },
  {
    title: "JavaScript",
    duration: "2 Houres",
    icon: <BiBook />,
  },
  {
    title: "English",
    duration: "2 Houres",
    icon: <BiBook />,
  },
];

function Profile() {
  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user--profile">
        <div className="user-details">
          <img src={Image1} alt="" />
          <h3 className="username">jOhn doe</h3>
          <span className="profession">Teacher</span>
        </div>

        <div className="user-course">
          {course.map((course) => {
            return (
              <div className="course">
                <div className="course--detail">
                  <div className="course-cover">{course.icon}</div>
                  <div className="course--name">
                    <h5 className="title">{course.title}</h5>
                    <span className="duration">{course.duration}</span>
                  </div>
                </div>
                <div className="action">:</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
