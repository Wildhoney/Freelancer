/**
 * @method createBlob
 * @param {Function} fn
 * @param {Object} options
 * @return {String}
 */
const createBlob = (fn, options = {}) => {

    if (typeof fn !== 'function') {

        // Ensure the passed parameter is actually a function.
        throw 'Freelancer: Passed parameter must be a function.';

    }

    // Transform the passed function into an IIFE and then create a blob URL from it.
    const blob = new Blob([`(${fn.toString()})(options)`], { type: 'application/javascript' });
    return URL.createObjectURL(blob);

};

/**
 * @class Freelancer
 * @extends Worker
 */
export class Freelancer extends Worker {

    /**
     * @constructor
     * @param {Function} fn
     * @param {Object} options
     * @return {Worker}
     */
    constructor(fn, options) {
        return super(createBlob(fn, options));
    }

}

/**
 * @class SharedFreelancer
 * @extends SharedWorker
 */
export class SharedFreelancer extends SharedWorker {

    /**
     * @constructor
     * @param {Function} fn
     * @param {Object} options
     * @return {Worker}
     */
    constructor(fn, options) {
        return super(createBlob(fn, options));
    }

}
