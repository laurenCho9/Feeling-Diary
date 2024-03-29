import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Diary() {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        // 일기가 존재할 때
        setData(targetDiary);
      } else {
        // 일기가 없을 때
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="diary-page">로딩중입니다...</div>;
  } else {
    const currentEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );
    console.log(currentEmotionData);

    return (
      <div className="diary-page">
        <Header
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <Button text={"< 뒤로가기"} onClick={() => navigate(-1)} />
          }
          rightChild={
            <Button
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary-img-wrapper",
                `diary-img-wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img src={currentEmotionData.emotion_img} alt="emotion_img" />
              <div className="emotion-descript">
                {currentEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary-content-wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
}
