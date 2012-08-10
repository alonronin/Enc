Enc
====

> Simple and fast crypto wrapper for encoding/decoding, ciphering/deciphering and hasing strings.

####  #

introduction
------------
An idiomatic way to encode/decode (using key or to base64) or hashing strings.

synopsis
--------
require the Enc library

```js
var Enc = require('enc');
```

basic encode to base64

```js
var encoded_str = Enc.base64.encode('test');
```

now let's decode it

```js
var decoded_str = Enc.base64.decode('dGVzdA==');
```

let's create a secret key

```js
var key = 'test'; // can be any string you want
```

let's encrypt using aes192 algorithm

```js
var encrypted_str = Enc.aes192.encode('test', key);
```

let's decrypt it

```js
var decrypted_str = Enc.aes192.decode('79caa93da9153f23fe10c7ddf2d8267e', key);
```

we want to make a hash

```js
var hash = Enc.md5('test');
```

we can also pass a digest string to the hash method as optional
argument: 'hex', 'binary' or 'base64' ('hex' is default)

```js
var hash = Enc.md5('test', 'binary');
```

that's it :)

you can use any popular algorithm `Enc#algorithm.encode(str, key)`,
or Enc#algorithm.decode(str, key)` like so:

```js
// hashing

Enc.md5('test');
Enc.sha1('test');

// encrypting

Enc.blowfish.encode('test', key');
Enc.des_ede_cfb.encode('test', key');

// base64

Enc.base64.encode('test');
```

installation
------------

    $ npm install enc

