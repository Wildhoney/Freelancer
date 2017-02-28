import { spy } from 'sinon';

global.Worker = spy();
global.SharedWorker = spy();
global.Blob = spy();
global.URL = { createObjectURL: spy() };
