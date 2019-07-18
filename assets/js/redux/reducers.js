const rootReducer = (state = {}, action) => {
  return {
    selectedSubreddit: selectedSubredditReducer(state.selectedSubreddit, action),
    dataBySubreddit: dataBySubredditReducer(state.dataBySubreddit, action)
  }
}

const selectedSubredditReducer = (slug, action) => {
  if (!slug) {
    return "reactjs" // Default: we start on the reactjs subreddit.
  }
  else if (action.type == "SUBREDDIT_SELECTED") {
    return action.slug
  }
  else {
    return slug
  }
}

const dataBySubredditReducer = (dataBySubreddit, action) => {
  if (!dataBySubreddit) {
    return {} // Default: empty dict of posts (by subreddit slug)
  }
  else if (!!action.slug) {
    // If the action has a subreddit slug, let's run the reducer for that subreddit.
    let subreddit = dataBySubreddit[action.slug]
    subreddit = subredditReducer(subreddit, action)
    return {...dataBySubreddit, [action.slug]: subreddit}
  }
  else {
    return dataBySubreddit
  }
}

const subredditReducer = (subreddit, action) => {
  if (false) {
    // TODO: Any default case to handle? I suspect not
  }
  else if (action.type == "SUBREDDIT_REFRESH_REQUESTED") {
    return {...subreddit, refreshRequested: true}
  }
  else if (action.type == "SUBREDDIT_POSTS_REQUESTED") {
    return {...subreddit, refreshRequested: false, isFetchingPosts: true}
  }
  else if (action.type == "SUBREDDIT_POSTS_RECEIVED") {
    return {...subreddit, posts: action.posts, lastUpdated: action.receivedAt}
  }
  else {
    return subreddit
  }
}

export { rootReducer }
