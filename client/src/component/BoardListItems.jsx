import React from "react";

const BoardListItems = ({board}) => {
    const {id, title, content, createDate} = board;
    return (
        <tr>
            <th>{id}</th>
            <th>{title}</th>
            <th>{content}</th>
            <th>{createDate}</th>
        </tr>
    )
}

export default BoardListItems;