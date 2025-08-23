import { BiLogoAndroid, BiBuilding, BiLogoHtml5 } from "react-icons/bi";

const course = [
  {
    title: "Web Development",
    icon: <BiLogoHtml5 />,
  },
  {
    title: "App Development",
    duration: "2 Hours",
    icon: <BiLogoAndroid />,
  },
  {
    title: "UX & UI",
    duration: "2 Hours",
    icon: <BiBuilding />,
  },
];
function Card() {
  return (
    <div className="card--container">
      {course.map((element, index) => {
        return (
          <div className="card" key={index}>
            <div className="card--cover">{element.icon}</div>
            <div className="card--title">
              <h2>{element.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
