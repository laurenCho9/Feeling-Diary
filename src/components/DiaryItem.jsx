import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { memo } from "react";

export default memo(function DiaryItem({ id, emotion, content, date }) {
  const navigate = useNavigate();
  const stringDate = new Date(parseInt(date)).toLocaleDateString();
  const goDetail = () => {
    navigate(`./diary/${id}`);
  };
  const goEdit = () => {
    navigate(`./edit/${id}`);
  };

  return (
    <div className="diary-item">
      <div
        onClick={goDetail}
        className={`emotion-img-wrapper emotion-img-wrapper_${emotion}`}
      >
        <img src={`./assets/emotion${emotion}.png`} alt="emotion" />
      </div>
      <div onClick={goDetail} className="info-wrapper">
        <div className="diary-date">{stringDate}</div>
        <div className="diary-content-preview">{content.slice(0, 25)}</div>
      </div>
      <div onClick={goEdit} className="button-wrapper">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
});
