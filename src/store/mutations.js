export const loadUser = (state, user) => {
  state.user = user;
};

export const removeUser = state => {
  state.user = null;
};
