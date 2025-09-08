import FruitList from "./components/FruitList";
import ColorText from "./components/ColorText";

function App() {
    const fruitArray = ["사과", "바나나", "포도", "딸기"];

    return (
        <div className="container" style={{padding: 24}}>
            <h1>실습 예제 데모</h1>
            {/* 예제 1: 과일 리스트 */}
            {/* <FruitList fruits={fruitArray} /> */}

            {/* 예제 2: 색상 변경 */}
            <ColorText />
        </div>
    );
}

export default App;