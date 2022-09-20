import {DataRow} from "..";

function Post({post}) {
    return (
        <DataRow>#{post.id}. {post.title}</DataRow>
    )
}

export { Post }