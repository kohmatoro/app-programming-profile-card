import React, { useState } from "react";

export default function LikeCount() {
    const [LikeCount, setLikeCount] = useState(0);

    return (
        <div>
            <table border="0">
                <button onClick={() => setLikeCount(LikeCount+1)}>
                    좋아요
                </button>
                <td>좋아요 {LikeCount}개</td>
            </table>
        </div>
    );
}



// import React, { useState } from "react";

// export default function LikeCount() {
//     const [LikeCount, setLikeCount] = useState(0);

//     return (
//         <div>
//             <button onClick={() => setLikeCount(LikeCount+1)}>
//                 좋아요
//             </button>
//             <p>좋아요 {LikeCount}개</p>
//         </div>
//     );
// }




// import {useState} from "react";

// function ProfileCard() {
//     // 좋아요 상태 관리
//     const [LikeCount, setLikeCount] = useState(0);
//     // 좋아요 버튼 클릭 핸들러
//     const handleLike = () => {
//     // 상태 업데이트 구현
//     }

//     return (
//         <div className="profile-card">
//             {/* 프로필 정보와 좋아요 버튼 구현 */}
//         </div>
//     );
// }

// export default ProfileCard;

// 1. props로 {name, studentid, major}를 받아 표시
// 2. useState(0)으로 좋아요 수 초기화
// 3. handleLike 함수에서 setLikeCount를 호출해 카운트를 증가시킵니다.
// 4. 컴포넌트를 CSS로 스타일링하기.