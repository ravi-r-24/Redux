import { actionCreator } from "./ActionCreator";

export const userActionTypeSelector = (userAction) =>
  actionCreator((type = "USER_ACTION"), (action = userAction));
