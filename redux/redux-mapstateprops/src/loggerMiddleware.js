
// Middleware written as ES5 functions

// Outer function:
function loggerMiddleware(storeAPI) {
    return function wrapDispatch(next) {
      return function handleAction(action) {
        
        console.log('Dispatching ', action);
        const result = next(action);
        console.log('Next State: ', storeAPI.getState());

        return result
      }
    }
  }



export default loggerMiddleware;