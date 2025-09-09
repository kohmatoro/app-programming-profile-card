import React, { useState } from "react";

export default function StudentList({datas} = []) {
      
    return (
        <div className="card" style={{border: "1px solid rgba(221, 221, 221, 0)", borderRadius: 12, padding: 16}}>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {datas.map((data, idx) => (
            <li key={idx}>{data}</li>
            ))}
        </ul>
        </div>
    );
}