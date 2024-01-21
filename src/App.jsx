import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

function App() {
  const dummyList = [
    {
      id: 1,
      author: "이정환",
      content: "하이1",
      emotion: 5,
      created_date: new Date().getTime(),
    },
    {
      id: 2,
      author: "이정환",
      content: "하이2",
      emotion: 5,
      created_date: new Date().getTime(),
    },
    {
      id: 3,
      author: "이정환",
      content: "하이3",
      emotion: 5,
      created_date: new Date().getTime(),
    },
  ];
  return (
    <div>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
