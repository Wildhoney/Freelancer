/**
 * @method createUrl
 * @param {Function} fn
 * @param {*} [options]
 * @return {String}
 */
const createUrl = (fn, ...options) => {

    if (typeof fn !== 'function') {

        // Ensure the passed parameter is actually a function.
        throw new Error('Freelancer: Passed parameter must be a function.');

    }

    // Map each of the passed options through the JSON stringify process.
    const params = options.map(option => JSON.stringify(option));

    // Transform the passed function into an IIFE and then create a blob.
    const blob = new Blob([`(${fn.toString()})(...[${params}])`], { type: 'application/javascript' });

    // Create a URL from the aforementioned blob that handles the worker logic.
    return URL.createObjectURL(blob);

};

/**
 * @class Freelancer
 * @extends Worker
 */
export class Freelancer extends Worker {

    /**
     * @constructor
     * @param {Array} args
     * @return {Worker}
     */
    constructor(...args) {
        return super(createUrl(...args));
    }

}

/**
 * @class SharedFreelancer
 * @extends SharedWorker
 */
export class SharedFreelancer extends SharedWorker {

    /**
     * @constructor
     * @param {Array} args
     * @return {Worker}
     */
    constructor(...args) {
        return super(createUrl(...args));
    }

}

export default Freelancer;
