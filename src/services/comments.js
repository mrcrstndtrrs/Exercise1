import { comments as data } from "../data/comments";

//private
let comments = [...data];

function getCommentById(id) {
  //get comment by id
}

function getCommentsByPostId(postId) {
  //get comments by post id
}

function updateCommentBody(id, body) {
  //update comment body
  comments = comments.map((comments) => {
    if (comment.id == id) {
      return {
        ...comment,
        ...body,
      };
    }
    return comment;
  });
}

function deleteCommentById(id) {
  //delete comment by id
  return comments.filter((comment) => comment.id !== id);
}

function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
}
