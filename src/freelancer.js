/**
 * @method createBlob
 * @param {Function} fn
 * @return {String}
 */
const createBlob = fn => {

    if (typeof fn !== 'function') {
        throw 'Freelancer: Passed parameter must be a function.';
    }

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
