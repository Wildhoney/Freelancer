/**
 * @method createBlob
 * @param {Function} fn
 * @return {String}
 */
const createBlob = fn => {

    if (typeof fn !== 'function') {

        // Ensure the passed parameter is actually a function.
        throw 'Freelancer: Passed parameter must be a function.';

    }

    // Transform the passed function into an IIFE and then create a blob URL from it.
    const blob = new Blob([`(${fn.toString()})()`], { type: 'application/javascript' });
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
     * @return {Worker}
     */
    constructor(fn) {
        return super(createBlob(fn));
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
     * @return {Worker}
     */
    constructor(fn) {
        return super(createBlob(fn));
    }

}
