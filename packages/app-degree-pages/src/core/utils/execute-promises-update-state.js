/**
 * Executes multiple promises and applies corresponding state updates.
 * @param {Promise[]} promises - An array of promises to be resolved.
 * @param {Dispatch<SetStateAction<{ accelerateData: any[]; concurrentData: any[]; }>>} stateUpdateFunctions - A state update function
 */
function executePromisesAndUpdateState(promises, stateUpdateFunction) {
  Promise.all(promises)
    .then(results => {
      const accelerateData = results[0];
      const concurrentData = results[1];
      stateUpdateFunction({ accelerateData, concurrentData });
    })
    .catch(() => {
      stateUpdateFunction({ accelerateData: [], concurrentData: [] });
    });
}

export { executePromisesAndUpdateState };
