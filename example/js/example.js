import { Freelancer } from '../../src/freelancer';

const options = { send: 'Ping?', respond: 'Pong!' };

const worker = new Freelancer(options => {

    self.addEventListener('message', event => {
        console.log(event.data);
        self.postMessage(options.respond);
    });

}, options);

worker.addEventListener('message', event => console.log(event.data));

const ping = window.ping = () => worker.postMessage(options.send);
ping();
