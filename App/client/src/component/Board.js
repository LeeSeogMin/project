import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import List from "./Post/List.js";
import axios from "axios";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { GNBDiv, CNBDiv } from "../Style/BoardCSS.js";

function Board() {
    const [PostList, setPostList] = useState([]);
    const [Sort, setSort] = useState("최신순");
    const [SearchTerm, setSearchTerm] = useState("");
    const [Skip, setSkip] = useState(0);
    const [LoadMore, setLoadMore] = useState(true);
    let navigate = useNavigate();
    const groupload = () => {
        navigate("/upload");
    };

    const getLoadMore = () => {
        let body = {
            sort: Sort,
            searchTerm: SearchTerm,
            skip: Skip,
        };
        axios
            .post("/api/post/list", body)
            .then((response) => {
                if (response.data.success) {
                    setPostList([...PostList, ...response.data.postList]);
                    setSkip(Skip + response.data.postList.length);
                    if (response.data.postList.length < 5) {
                        setLoadMore(false);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getPostList = () => {
        setSkip(0);

        let body = {
            sort: Sort,
            searchTerm: SearchTerm,
            skip: 0,
        };

        axios
            .post("/api/post/list", body)
            .then((response) => {
                if (response.data.success) {
                    setPostList([...response.data.postList]);
                    setSkip(response.data.postList.length);
                    if (response.data.postList.length < 5) {
                        setLoadMore(false);
                    }
                    if (response.data.postList.length === 0) {
                        setLoadMore(false);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getPostList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const SearchHandler = () => {
        getPostList();
    };

    return (
        <div>
            <GNBDiv>
                <div className="search">
                    <input
                        type="text"
                        value={SearchTerm}
                        onChange={(e) => setSearchTerm(e.currentTarget.value)}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) SearchHandler();
                        }}
                    />
                    <button onClick={() => SearchHandler()}>찾기</button>
                </div>

                <DropdownButton variant="outline-secondary" title={Sort}>
                    <Dropdown.Item onClick={() => setSort("최신순")}>최신순</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSort("인기순")}>인기순</Dropdown.Item>
                </DropdownButton>
            </GNBDiv>
            <List PostList={PostList} />
            <CNBDiv>
                {LoadMore && (
                    <div>
                        <button onClick={() => getLoadMore()}>더 불러오기</button>
                    </div>
                )}
                <div>
                    <button onClick={groupload}>글쓰기</button>
                </div>
            </CNBDiv>
        </div>
    );
}

export default Board;

// props에 대한 설명은 "https://velog.io/@awdsza/React-props%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EA%B0%92-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0" 를 참조하세요
