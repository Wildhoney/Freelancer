import { read } from 'jimp';

read('media/logo.png').then(handle => handle.autocrop().write('example/images/logo.png'));
