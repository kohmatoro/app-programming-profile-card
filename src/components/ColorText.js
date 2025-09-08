import {useState} from "react";

export default function ColorText() {
    const [color, setColor] = useState("black");

    const toggleColor = () => {
        setColor(prev => (prev === "black" ? " blue":"black"));
    };

    return (
        <div className="card" style={{padding: "16px"}}>
            <p style={{ color: color}}>
                이 텍스트의 색상이 바뀝니다.
            </p>
            <button onClick={toggleColor}>색상 변경</button>
        </div>
    );
};