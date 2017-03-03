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
    const params = options.map(JSON.stringify);

    // Transform the passed function into an IIFE and then create a blob.
    const blob = new Blob([`(${fn.toString()})(${params})`], { type: 'application/javascript' });

    // Create a URL from the aforementioned blob that handles the worker logic.
    return URL.createObjectURL(blob);

};

/**
 * @method createFallback
 * @param {String} name
 * @return {Object}
 */
const createFallback = name => {

    return class {

        /**
         * @constructor
         * @return {Object}
         */
        constructor() {

            // Raise an error when a worker isn't supported.
            throw new Error(`Freelancer: Unfortunately the ${name} is not supported by the current browser.`);

        }

    };

};

/**
 * @constant WorkerExtend
 * @type {Worker|Object}
 */
const WorkerExtend = global.Worker || createFallback('Worker');

/**
 * @class Freelancer
 * @extends Worker
 */
export class Freelancer extends WorkerExtend {

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
 * @constant SharedWorkerExtend
 * @type {SharedWorker|Object}
 */
const SharedWorkerExtend = global.SharedWorker || createFallback('SharedWorker');

/**
 * @class SharedFreelancer
 * @extends SharedWorker
 */
export class SharedFreelancer extends SharedWorkerExtend {

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
