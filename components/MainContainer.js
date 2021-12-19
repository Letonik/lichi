import NavBar from "./NavBar";

const MainContainer = ({children}) => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default MainContainer;