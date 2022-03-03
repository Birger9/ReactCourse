import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Posted at 4:45PM" comment="Cool!" pic={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Posted at 6:00PM" comment="Nice!" pic={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="David" timeAgo="Posted at 3:00PM" comment="Noice!" pic={faker.image.image()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector("#root"));