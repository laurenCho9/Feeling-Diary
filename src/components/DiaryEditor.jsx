import { useRef, useState } from "react";

export default function DiaryEditor() {
  const authorInput = useRef();
  const contentInput = useRef();

  const [diary, setDiary] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setDiary({
      ...diary,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (diary.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (diary.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    console.log(diary);
    alert("저장 성공!");
  };

  return (
    <div className="diary-editor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          type="text"
          value={diary.author}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={diary.content}
          onChange={handleChange}
        />
      </div>
      <div>
        <span>오늘의 감정 점수 : </span>
        <select name="emotion" value={diary.emotion} onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
}
