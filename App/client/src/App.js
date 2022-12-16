import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearUser } from './Reducer/userSlice.js';
import firebase from './firebase.js';
import Menu from './component/Menu';
import Home from './component/Home';
import Board from './component/Board';
import Upload from './component/Post/Upload';
import List from './component/Post/List';
import PostArea from './component/Post/PostArea';
import Edit from './component/Post/Edit';
import Login from './component/User/Login';
import Register from './component/User/Register';
import './App.css';

function App(props) {
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const user = useSelector((state) => state.user);
    // const {user} = useSelector((state) => state.user);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((userInfo) => {
            if (userInfo !== null) {
                dispatch(loginUser(userInfo.multiFactor.user));
            } else {
                dispatch(clearUser());
            }
            //
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     firebase.auth().signOut();
    // }, []);

    return (
        <div>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}></Route>

                {/*Post, Reple*/}
                <Route path="/board" element={<Board />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/List" element={<List />} />
                <Route path="/Post/:postNum" element={<PostArea />} />
                <Route path="/Edit/:postNum" element={<Edit />} />

                {/*User*/}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/*
        1. 검색
        2. 유저 프로필 이미지 + 원하는 이미지로 바꾸기
        3. 정렬 (최신순 / 인기순 : repleNum)
        */}
            </Routes>
        </div>
    );
}
export default App;

/* import React from 'react';
import Board from './Board';

function App() {
    return <Board />;
}
export default App;

/* useState: 리액트의 변수관리 함수
첫번째 인자: 변수이름
두번째 인자: 변수를 변경시켜주는 함수
세번째 인자: 초기값
*/

/* 주석

Shift + Alt + A: 블럭 주석
Ctrl + / : 줄주석 */

/* 컴포넌트 만들어내는 약어
rsf: 함수형 컴포넌트
rsc: 화살표 함수형 컴포넌트
 */

/* 컴포넌트 규칙
1. 이름은 반드시 영어대문자로 시작해야 함
2. 코딩이 끝나면 export 해야함 */

/* JSX
1. camelCase: classname
2. js 변수나 함수 사용시: {}
3. css. style: {{}} + object
 */

/* 삼항연산자
가정문: if else
*/

/* map 함수
for 구문 대신
*/

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyC9aicBgyU6_rXLxf9xAmFzhOVxfNYeBO8",
//     authDomain: "brave-monitor-333406.firebaseapp.com",
//     projectId: "brave-monitor-333406",
//     storageBucket: "brave-monitor-333406.appspot.com",
//     messagingSenderId: "209728307085",
//     appId: "1:209728307085:web:473ac964868ff6ab9c47c4",
// };

// firebase.initializeApp(firebaseConfig);

// export default firebase;

// module.exports = {
//   mongoURI: "mongodb+srv://newmind68:sksk2739@cluster0.aysns8l.mongodb.net/Board?retryWrites=true&w=majority",
// };
