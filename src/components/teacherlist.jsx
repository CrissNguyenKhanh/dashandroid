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
      teachers.map((element) => {
        return element.image;
      })
    );
  }, []);

  const handleEdit = (name) => {
    alert(`Sửa thông tin của ${name}`);
  };

  const handleDelete = (name) => {
    alert(`Xóa giáo viên ${name}`);
  };

  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="vietnam">VietNam</option>
        </select>
      </div>
      <div className="list--container">
        {teachers.map((teacher, index) => {
          return (
            <div className="list" key={index}>
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

              {/* Thêm 2 nút Sửa và Xóa */}
              <div className="teacher--todo">
                <button onClick={() => handleEdit(teacher.name)}>Sửa</button>
                <button onClick={() => handleDelete(teacher.name)}>Xóa</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Teacherlist;
