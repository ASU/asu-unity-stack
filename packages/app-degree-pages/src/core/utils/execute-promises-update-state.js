/**
 * Executes multiple promises and applies corresponding state updates.
 * @param {Promise[]} promises - An array of promises to be resolved.
  * @param {Dispatch<SetStateAction<{ accelerateData: any[]; concurrentData: any[]; }>>} stateUpdateFunctions - An array of state update functions
 */
function executePromisesAndUpdateState(promises, stateUpdateFunctions) {
  Promise.all(promises)
    .then(results => {
      results.forEach((result, index) => {
        if (stateUpdateFunctions[index]) {
          stateUpdateFunctions[index](result);
        }
      });
    })
    .catch(() => {
      stateUpdateFunctions.forEach(updateFunction => {
        if (updateFunction) {
          updateFunction(null);
        }
      });
    });
};

export { executePromisesAndUpdateState };
