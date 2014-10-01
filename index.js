'use strict';

var crypto = require("crypto");
var algorithms = exports.algorithms = {};
algorithms.ciphers = crypto.getCiphers();
algorithms.hashes = crypto.getHashes();
algorithms.buffers = ['base64'];

/**
 * Cipher encoding/decoding using key
 *
 * @param str
 * @param key
 *
 * usage:
 *   Enc.aes192.encode('test', 'test)
 *   => 79caa93da9153f23fe10c7ddf2d8267e
 *
 *   Enc.aes192.decode('79caa93da9153f23fe10c7ddf2d8267e', 'test')
 *   => test
 *
 * Popular algorithms: 'aes192', 'blowfish', 'cast', 'des', 'des3', 'desx', 'rc2', 'rc4'
 * Use method name with _ eg: Enc.aes_128_cbc.encode(str, key)
 *
 */
algorithms.ciphers.forEach(function(alg){
    exports[alg.toLowerCase().replace(/\-/g, '_')] = {
        encode:function(str, key){
            var cipher = crypto.createCipher(alg, key),
                msg = [];

            msg.push(cipher.update(str, 'binary', 'hex'));
            msg.push(cipher.final('hex'));

            return msg.join('');
        },
        decode:function(str, key){
            var decipher = crypto.createDecipher(alg, key),
                msg = [];

            msg.push(decipher.update(str, 'hex', 'binary'));
            msg.push(decipher.final('binary'));

            return msg.join('');
        }
    }
});

/**
 * Buffer encoding/decoding
 *
 * Encode/Decode strings to base64
 * @param str
 *
 * usage:
 *   Enc.base64.encode('test')
 *   => dGVzdA==
 *
 *   Enc.base64.decode('dGVzdA==')
 *   => test
 *
 */
algorithms.buffers.forEach(function(alg){
    exports[alg] = {
        encode:function(str){
            return new Buffer(str).toString(alg);
        },
        decode:function(str){
            return new Buffer(str, alg).toString();
        }
    }
});

/**
 * Hash encrypting
 *
 * One way encryption
 * @param str
 * @param digest (optional - 'hex', 'binary' or 'base64' default to 'hex')
 *
 * usage:
 *   Enc.md5('test')
 *   => 098f6bcd4621d373cade4e832627b4f6
 */
algorithms.hashes.forEach(function(alg){
    exports[alg.toLowerCase().replace(/\-/g, '_')] = function(str, digest){
        return crypto.createHash(alg).update(str.toString()).digest(digest || 'hex');
    }
});