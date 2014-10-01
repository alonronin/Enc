Enc
====

> Simple and fast crypto wrapper for encoding/decoding, ciphering/deciphering and hasing strings.

####  #

introduction
------------
An idiomatic way to encode/decode (using key or to base64) or hashing strings.


installation
------------

    $ npm install enc

usage
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
or `Enc#algorithm.decode(str, key)` like so:

```js
// hashing

Enc.md5('test');
Enc.sha1('test');

// encrypting

Enc.blowfish.encode('test', key);
Enc.des_ede_cfb.encode('test', key);

// base64

Enc.base64.encode('test');
```

to see available algorithms:
```js

// for hashes function
console.log(Enc.algorithms.hashes);

// for cyphers
console.log(Enc.algorithms.cyphers);

// for buffers
console.log(Enc.algorithms.buffers);

// all
console.log(Enc.algorithms);
```

__note__: all functions are lowercase and if an algorithm contains a `-` just replace it with `_`.

## The MIT License

Copyright (C) 2012 Alon Valadji

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
