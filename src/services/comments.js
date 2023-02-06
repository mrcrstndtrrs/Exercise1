import { comments as data } from "../data/comments";

//private
let comments = [...data];

export function getAllComments() {
  return [...comments];
}
export function getCommentById(id) {
  //get comment by id
  return [...comments.filter((comment) => comment.id === id)];
}

export function getCommentsByPostId(postId) {
  //get comments by post id
  return [...comments.filter((comment) => comment.postId === postId)];
}

export function updateCommentBody(id, body) {
  //update comment body
  comments = comments.map((comment) => {
    if (comment.id === id) {
      return {
        ...comment,
        ...body,
      };
    }
    return comment;
  });
}

export function deleteCommentById(id) {
  //delete comment by id
  return comments.filter((comment) => comment.id !== id);
}

export function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  return comments.push(comment);
}
