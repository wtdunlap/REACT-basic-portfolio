import Header from "./components/Header";
import insertCard from "./utils/insertCard";

function App() {
    return (
        <>
            <div className="flex justify-top content-center flex-col">
                <Header insertCard={insertCard}/>
            </div>
        </>
    );
}

export default App;
