import "../styles/teacherlist.css";
import { Image1 } from "../assset/Image1";
import { useEffect } from "react";
const teachers = [
  {
    image: Image1,
    name: "Criss nguyenKhanh",
    duration: "20 hours lesson",
    cost: "200",
  },
  {
    image: Image1,
    name: "Criss nguyenKhanh",
    duration: "20 hours lesson",
    cost: "200",
  },
  {
    image: Image1,
    name: "Criss nguyenKhanh",
    duration: "20 hours lesson",
    cost: "200",
  },
  {
    image: Image1,
    name: "Criss nguyenKhanh",
    duration: "20 hours lesson",
    cost: "200",
  },
  {
    image: Image1,
    name: "Criss nguyenKhanh",
    duration: "20 hours lesson",
    cost: "200",
  },
];

function Teacherlist() {
  useEffect(() => {
    console.log(
      teachers.map((elemetn) => {
        return elemetn.image;
      })
    );
  });
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Teachers</h2>
        <select name="" id="">
          <option value="english">English</option>
          <option value="vietnam">VietNam</option>
        </select>
      </div>
      <div className="list--container">
        {teachers.map((teacher) => {
          return (
            <div className="list">
              <div className="teacher-detail">
                <img
                  className="image--list"
                  src={teacher.image}
                  alt={teacher.name}
                />
                <h2>{teacher.name}</h2>
              </div>

              <span>{teacher.duration}</span>
              <span>${teacher.cost}/hr</span>
              <span className="teacher--todo">:</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Teacherlist;
