import { useParams } from "react-router-dom";

export default function Diary() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <p>Diary</p>
      <p>일기 상세페이지</p>
    </div>
  );
}
