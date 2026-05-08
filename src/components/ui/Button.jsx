export default function Button({ children, type, className, onClick}) {
  return (
    <>
      <button className={className} type={type} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
