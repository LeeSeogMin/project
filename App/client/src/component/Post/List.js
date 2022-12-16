import React from 'react';
import { Link } from 'react-router-dom';
import { ListDiv, ListItem } from '../../Style/ListCSS.js';

import moment from 'moment'; //npm install moment --save
import 'moment/locale/ko';

function List(props) {
    const SetTime = (a, b) => {
        if (a !== b) {
            return moment(b).format('YYYY년 MMMM Do, hh:mm') + '(수정됨)';
        } else {
            return moment(a).format('YYYY년 MMMM Do, hh:mm');
        }
    };

    return (
        <ListDiv>
            {props.PostList.map((post, idx) => {
                return (
                    <ListItem key={idx}>
                        <Link to={`/post/${post.postNum}`}>
                            <h4 className="title">{post.title}</h4>
                            <div className="author">
                                <p>{post.author.displayName}</p>
                                <p className="time">
                                    {SetTime(post.createdAt, post.updatedAt)}
                                </p>
                            </div>
                            <p>{post.content}</p>
                            <div
                                style={{
                                    paddingLeft: '20px',
                                    color: '#08c',
                                    fontSize: '18px',
                                }}
                            >
                                댓글: {post.repleNum}개
                            </div>
                        </Link>
                    </ListItem>
                );
            })}
        </ListDiv>
    );
}

export default List;
