import Header from '~/components/Layout/components/Header/header.js';
function Headeronly({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="content">{children}</div>
    </div>
  );
}

export default Headeronly