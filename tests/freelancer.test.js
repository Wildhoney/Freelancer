import test from 'ava';
import { spy } from 'sinon';
import { Freelancer, SharedFreelancer } from '../src/freelancer';

test('it should be able to invoke the Worker;', t => {
    const worker = new Freelancer(() => {});
    t.true(typeof worker === 'object');
    t.is(Worker.callCount, 1);
});

test('it should be able to invoke the SharedWorker;', t => {
    const worker = new SharedFreelancer(() => {});
    t.true(typeof worker === 'object');
    t.is(SharedWorker.callCount, 1);
});
