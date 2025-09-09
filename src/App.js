import LikeCount from "./components/LikeCount";
import StudentList from "./components/StudentList";

function App() {
    const dataArray = ["고정원", "학번: 2022108028", "전공: 인공지능학과"];

    return (
        <div style={{
            width: "300px",
            height: "250px",
            margin: "30px",
            padding: "30px",
            border: "0.3px solid black",
            borderRadius: "15px",
            backgroundColor: "#21262D",
            boxSizing: "border-box",
            color: "white" 
        }}>
            <StudentList datas={dataArray} />
            <p>안녕하세요!, React 컴포넌트를 배우고 있는 고정원입니다.</p>
            <LikeCount />
        </div>
    );
    
}

export default App;


// import FruitList from "./components/FruitList";
// import ColorText from "./components/ColorText";

// function App() {
//     const fruitArray = ["사과", "바나나", "포도", "딸기"];

//     return (
//         <div className="container" style={{padding: 24}}>
//             <h1>실습 예제 데모</h1>
//             {/* 예제 1: 과일 리스트 */}
//             {/* <FruitList fruits={fruitArray} /> */}

//             {/* 예제 2: 색상 변경 */}
//             <ColorText />
//         </div>
//     );
// }

// export default App;