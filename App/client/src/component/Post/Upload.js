import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FileUpload from './FileUpload.js';
import {
    UploadDiv,
    UploadForm,
    UploadButtonDiv,
} from '../../Style/UploadCSS.js';
import axios from 'axios';

function Upload(props) {
    const [Title, setTitle] = useState('');
    const [Content, setContent] = useState('');
    const [File, setFile] = useState('');

    const user = useSelector((state) => state.user);

    let navigate = useNavigate();
    const goList = () => {
        navigate('/Board');
    };

    useEffect(() => {
        if (user.isLoading && !user.accessToken) {
            alert('로그인한 회원만 글을 작성할 수 있습니다.');
            navigate('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        if (Title === '' || Content === '') {
            return alert('모든 항목을 채워주세요!');
        }

        let body = {
            title: Title,
            content: Content,
            file: File,
            uid: user.uid,
        };

        axios
            .post('/api/post/submit', body)
            .then((response) => {
                if (response.data.success) {
                    alert('글 작성이 완료되었습니다.');
                    navigate('/Board');
                } else {
                    alert('글 작성에 실패하였습니다.');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <UploadDiv>
            <UploadForm>
                <label htmlFor="label">제목</label>
                <input
                    id="title"
                    type="text"
                    value={Title}
                    onChange={(e) => {
                        setTitle(e.currentTarget.value);
                    }}
                />
                <FileUpload setFile={setFile} />
                <label htmlFor="content">내용</label>
                <textarea
                    id="content"
                    value={Content}
                    onChange={(e) => {
                        setContent(e.currentTarget.value);
                    }}
                />
                <UploadButtonDiv>
                    <button
                        onClick={(e) => {
                            onSubmit(e);
                        }}
                    >
                        제출
                    </button>
                    <button onClick={goList}>리스트</button>
                </UploadButtonDiv>
            </UploadForm>
        </UploadDiv>
    );
}

export default Upload;

// const goList = () => {
//     navigate("/component/Post/List");
// };

/* <button onClick={goList}>리스트</button> */
