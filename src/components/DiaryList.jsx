import DiaryItem from "./DiaryItem";

export default function DiaryList({ diaryList }) {
  return (
    <div className="diary-list">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={`diaryitem_${it.id}`} {...it} />
        ))}
      </div>
    </div>
  );
}
