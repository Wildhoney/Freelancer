import { read } from 'jimp';

/**
 * @method autocrop
 * @param {String} path
 * @return {Promise.<void>}
 */
const autocrop = async path => {

    const handle = await read(path);
    handle.autocrop();
    handle.write('example/images/logo.png');

};

autocrop('media/logo.png');
