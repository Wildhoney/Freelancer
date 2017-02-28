![Moggy](media/logo.png)

> An implementation of on-the-fly defined WebWorkers that are created inline using data URIs, rather than separate physical files &mdash; for the benefit of all humanity.

[![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

> **npm:** `npm i freelancer --save`
> **Example:** [ESNextb.in](https://esnextb.in/?gist=26cda2d5ce0e508d367744b936200a58)

## Getting Started

`Freelancer` uses the **same** interface as `Worker` except the passed parameters upon instantiation are *slightly* different.

Normally when invoking `new Worker` you pass the location of the file, whereas with `new Freelancer` you pass a function that contains the body of the worker.

`Freelancer` also allows an *optional* [second parameter](#passing-parameters) to be passed that allows you to send additional options to the worker.

```javascript
import { Freelancer } from 'freelancer';

const worker = new Freelancer(() => {
   
    self.addEventListener('message', () => {
        self.postMessage('Pong!');
    });
    
});

worker.addEventListener('message', event => console.log(event.data));
worker.postMessage('Ping?');
```

It's worth bearing in mind that the worker is still a separate thread and thus the typical [rules of closures](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures) no longer apply &ndash; any parameters you would like to be received by the worker would need to be sent using `postMessage` or by [passing parameters](#passing-parameters) upon instantiation.

## Passing Parameters

Upon instantiation of `Freelancer` using the second parameter you can pass options that will be pushed into the worker &ndash; passed options will be serialized using `JSON.stringify` and thus any data sent needs to be serializable.

```javascript
import { SharedFreelancer } from 'freelancer';

const options = { send: 'Ping?', respond: 'Pong!' };

const worker = new SharedFreelancer(options => {
   
    self.addEventListener('message', () => {
        self.postMessage(options.respond);
    });
    
}, options);

worker.addEventListener('message', event => console.log(event.data));
worker.postMessage(options.send);
```