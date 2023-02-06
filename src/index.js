//Call all functions inside services and log updated value/s
import {
  getAllUsers,
  getUserById,
  updateUser,
  addUser,
} from "./services/users";
import * as servicesPosts from "./services/posts";
import * as serviceComments from "./services/comments";
import { generateId } from "./utils";

//Users
// console.log(getAllUsers());
// updateUser(1, { email: "roger@77.com", website: "hide-edit.org" });
// console.log(getUserById(1));

// addUser({
//   id: generateId(getAllUsers()),
//   username: "new user",
//   email: "newuser@gmail.com",
// });
// console.log(getAllUsers());

//Posts
// console.log(servicesPosts.getPosts());
// console.log(servicesPosts.getPostsByUser(5));
// console.log(servicesPosts.getPostById(1));

// servicesPosts.addPost({
//   id: generateId(servicesPosts.getPosts()),
//   title: "new Title",
//   body: "New body",
// });
// console.log(servicesPosts.getPosts());

// servicesPosts.updatePostTitle(1, { title: "Updated title" });
// servicesPosts.updatePostBody(1, { body: "Updated body" });
// servicesPosts.updatePost(1, { title: "updated title", body: "updated body" });
// console.log(servicesPosts.getPostById(1));
// console.log(servicesPosts.deletePostBy(1));
// console.log(servicesPosts.deletePostsByUserId(1));

//Comments
// console.log(serviceComments.getCommentById(2));
// console.log(serviceComments.getCommentsByPostId(2));
// serviceComments.updateCommentBody(1, { body: "Updated body" });
// console.log(serviceComments.getCommentById(1));
// console.log(serviceComments.deleteCommentById(1));

// serviceComments.addComment({
//   id: generateId(serviceComments.getAllComments()),
//   name: "New name",
//   email: "Newemaal@gmail.com",
//   body: "new body",
// });
// console.log(serviceComments.getAllComments());
