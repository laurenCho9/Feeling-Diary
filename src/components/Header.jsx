export default function Header({ headText, leftChild, rightChild }) {
  return (
    <header>
      <div className="head-btn-left">{leftChild}</div>
      <div className="head-text">{headText}</div>
      <div className="head-btn-right">{rightChild}</div>
    </header>
  );
}
