'use strict';

var crypto = require("crypto");

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
[
 'aes-128-cbc',
 'aes-128-ecb',
 'aes-192-cbc',
 'aes-192-ecb',
 'aes-256-cbc',
 'aes-256-ecb',
 'bf-cbc',
 'bf-cfb',
 'bf-ecb',
 'bf-ofb',
 'cast-cbc',
 'cast5-cfb',
 'cast5-ecb',
 'cast5-ofb',
 'des-cbc',
 'des-cfb',
 'des-ecb',
 'des-ede',
 'des-ede-cbc',
 'des-ede-cfb',
 'des-ede-ofb',
 'des-ede3',
 'des-ede3-cbc',
 'des-ede3-cfb',
 'des-ede3-ofb',
 'des-ofb',
 'rc2-40-cbc',
 'rc2-64-cbc',
 'rc2-cbc',
 'rc2-cfb',
 'rc2-ecb',
 'rc2-ofb',
 'rc4-40',
 'aes192',
 'blowfish',
 'bf',
 'cast',
 'des',
 'des3',
 'desx',
 'rc2',
 'rc4'
].forEach(function(alg){
    module.exports[alg.replace(/\-/g, '_')] = {
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
['base64'].forEach(function(alg){
    module.exports[alg] = {
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
['md4', 'md5', 'rmd160', 'sha', 'sha1', 'sha224', 'sha256', 'sha384', 'sha512'].forEach(function(alg){
    module.exports[alg] = function(str, digest){
        return crypto.createHash(alg).update(str.toString()).digest(digest || 'hex');
    }
});