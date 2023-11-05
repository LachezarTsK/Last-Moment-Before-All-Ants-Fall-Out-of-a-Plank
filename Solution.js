
/**
 * @param {number} plankLength
 * @param {number[]} leftDirection
 * @param {number[]} rightDirection
 * @return {number}
 */
var getLastMoment = function (plankLength, leftDirection, rightDirection) {
    let lastMomentWhenAllAntsFallOut = 0;
    
    for (let position of leftDirection) {
        lastMomentWhenAllAntsFallOut = Math.max(lastMomentWhenAllAntsFallOut, position);
    }
    for (let position of rightDirection) {
        lastMomentWhenAllAntsFallOut = Math.max(lastMomentWhenAllAntsFallOut, plankLength - position);
    }

    return lastMomentWhenAllAntsFallOut;
};
