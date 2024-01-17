/**
 * Module
 * @module uptime-ts
 */

/** 
* Factory method 
* @returns {string} that returns uptime as a string in the form of HH:MM:SS
* @example <caption>Usage example</caption>

   const uptime = require( '@mitchallen/uptime-v2' )
 
   console.log( uptime.toHHMMSS() )
*/

const toHHMMSS = () => {

    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }

    const t = process.uptime();

    const hours = Math.floor(t / (60 * 60));
    const minutes = Math.floor(t % (60 * 60) / 60);
    const seconds = Math.floor(t % 60);

    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

export {
    toHHMMSS,
}

