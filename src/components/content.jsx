import ContentHeader from "./contentHeader";
import "../styles/Content.css";
import Card from "./card";
import Teacherlist from "./teacherlist";

function Content() {
  return (
    <div className="content">
      <ContentHeader />
      <Card />
      <Teacherlist />
    </div>
  );
}

export default Content;
