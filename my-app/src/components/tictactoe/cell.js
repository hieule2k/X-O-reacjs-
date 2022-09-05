function Cell({ onClick, value, className }) {
  return (
    <div className={`cells ${className}`} onClick={onClick}>
      {value}
    </div>
  );
}

export default Cell;
