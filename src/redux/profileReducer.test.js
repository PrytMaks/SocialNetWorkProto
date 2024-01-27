import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = {
  posts: [
    {
      id: 1,
      message: "Hi!",
      likesCount: 4,
    },
    {
      id: 2,
      message: "Its my first post!",
      likesCount: 1243,
    },
    {
      id: 3,
      message: "Post to my friend",
      likesCount: 5,
    },
    {
      id: 4,
      message: "Hello fellas !",
      likesCount: 3,
    },
    {
      id: 5,
      message: "Yo",
      likesCount: 1,
    },
  ]
};

test('length of posts should be incremented', () => {
  // 1. Test data

  
  let action = addPostActionCreator('it-kamasutra.com');
  //2. create Action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(6);
  
});
test('message of newPost should be correct itKamasutra', () => {
  // 1. Test data
  
  let action = addPostActionCreator('it-kamasutra.com');
  //2. create Action
  let newState = profileReducer(state, action);

  //3. expectation

  expect(newState.posts[5].message).toBe('it-kamasutra.com');
  
});
test('after detecting length of messages should be decrement', () => {
  // 1. Test data
  
  let action = deletePost(1);
  //2. create Action
  let newState = profileReducer(state, action);

  //3. expectation

  expect(newState.posts.length).toBe(4);
  
});