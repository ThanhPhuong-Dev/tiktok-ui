import Header from '~/Layout/components/Header/header';
function Headeronly({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="content">{children}</div>
        </div>
    );
}

export default Headeronly;
