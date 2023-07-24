export const selectUserName = state => state.auth.user.name;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsFetchingCurrent = state => state.auth.isfetchingCurrent;