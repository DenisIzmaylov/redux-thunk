export default function thunkMiddleware({ dispatch, getState }) {
  return next => action => {
    if (typeof action === 'function') {
      const result = action(dispatch, getState);
      if (typeof result === 'object' && result.then === 'function') {
        return result.then(next);
      }
      return result;
    }
    return next(action);
  }
}
