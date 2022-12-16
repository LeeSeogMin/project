import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PostDiv, Post, BtnDiv } from "../../Style/PostDetailCSS.js";

function Detail(props) {
    let params = useParams();
    let navigate = useNavigate();
    const groupload = () => {
        navigate("/Board");
    };
    const user = useSelector((state) => state.user);

    const DeleteHandler = () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            let body = {
                postNum: params.postNum,
            };
            axios
                .post("/api/post/delete", body)
                .then((response) => {
                    if (response.data.success) {
                        alert("게시글이 삭제되었습니다.");
                        navigate("/Upload");
                    }
                })
                .catch((err) => {
                    alert("게시글 삭제에 실패하였습니다.");
                });
        }
    };

    return (
        <PostDiv>
            <Post>
                <h4>{props.PostInfo.title}</h4>

                {props.PostInfo.file ? (
                    <img src={`http://localhost:5000/${props.PostInfo.file}`} alt="" style={{ width: "100%", height: "auto" }} />
                ) : null}
                <p>{props.PostInfo.content}</p>
            </Post>
            {user.uid === props.PostInfo.author.uid && (
                <>
                    <BtnDiv>
                        <Link style={{ height: "10px" }} to={`/edit/${props.PostInfo.postNum}`}>
                            <button className="edit">수정</button>
                        </Link>

                        <button className="delete" onClick={() => DeleteHandler()}>
                            삭제
                        </button>
                        <button style={{ marginLeft: "10px" }} className="edit" onClick={groupload}>
                            게시판
                        </button>
                    </BtnDiv>
                </>
            )}
        </PostDiv>
    );
}

export default Detail;
