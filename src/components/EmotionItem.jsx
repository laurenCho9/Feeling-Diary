export default function EmotionItem({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected,
}) {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[
        isSelected
          ? `emotion-item emotion-item_on_${emotion_id}`
          : `emotion-item emotion-item_off`,
      ].join("")}
    >
      <img src={emotion_img} alt="emotion_img" />
      <span>{emotion_descript}</span>
    </div>
  );
}
