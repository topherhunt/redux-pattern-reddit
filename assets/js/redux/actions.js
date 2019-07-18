//
// Action creator functions
//
// Note: I'm hard-coding the action type strings instead of pre-defining constants for
// each action type because I'm not convinced that the latter pattern truly makes the
// code less brittle, considering the add'l clutter it creates.

export const actionCreators = {

  SUBREDDIT_SELECTED: (slug) => ({type: "SUBREDDIT_SELECTED", slug}),

  SUBREDDIT_REFRESH_REQUESTED: (slug) => ({type: "SUBREDDIT_REFRESH_REQUESTED", slug}),

  SUBREDDIT_POSTS_REQUESTED: (slug) => ({type: "SUBREDDIT_POSTS_REQUESTED", slug}),

  SUBREDDIT_POSTS_RECEIVED: (slug, json) => ({
    type: "SUBREDDIT_POSTS_RECEIVED",
    slug: slug,
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now()
  })
}

//
// Other state-related enums (useful for validations)
//

// TODO: I'm starting to think that the actionCreators should not validate the action,
// they should simply return its shape. And it's weird to define enums of all valid states
// in actions.js when reducers.js defines the initial state (and all state change logic).
// Consider moving the valid state enums to reducers.js.
export const enums = {
  filterSettings: ["SHOW_ALL", "SHOW_COMPLETED", "SHOW_ACTIVE"]
}
