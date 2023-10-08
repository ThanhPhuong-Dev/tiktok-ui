import Header from '../DefaultLayout/Header/header';
function Headeronly({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="content">{children}</div>
    </div>
  );
}

export default Headeronly