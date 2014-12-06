var expect = require('chai').expect;
var Enc = require('../');

describe('algorithms', function(){
    it('should contain ciphers, hashes and buffers', function(){
        expect(Enc.algorithms).to.have.property('ciphers');
        expect(Enc.algorithms).to.have.property('hashes');
        expect(Enc.algorithms).to.have.property('buffers')
    });

    describe('ciphers', function(){
        it('should be an Array', function(){
            expect(Enc.algorithms.ciphers).to.be.an('Array');
        });

        it('should contain aes192', function(){
            expect(Enc.algorithms.ciphers).to.contain('aes192');
        });

        describe('encoding', function(){
            it('using aes192 alg', function(){
                expect(Enc.aes192.encode('test', 'test')).to.equal('79caa93da9153f23fe10c7ddf2d8267e');
            })
        });

        describe('decoding', function(){
            it('using aes192 alg', function(){
                expect(Enc.aes192.decode('79caa93da9153f23fe10c7ddf2d8267e', 'test')).to.equal('test');
            })
        });

    });

    describe('hashes', function(){
        it('hashes should be an Array', function(){
            expect(Enc.algorithms.hashes).to.be.an('Array');
        });

        it('should contain md5', function(){
            expect(Enc.algorithms.hashes).to.contain('md5');
        });

        describe('encoding', function(){
            it('using md5 hash', function(){
                expect(Enc.md5('test')).to.equal('098f6bcd4621d373cade4e832627b4f6');
            })
        });
    });

    describe('buffers', function(){
        it('buffers should be an Array', function(){
            expect(Enc.algorithms.buffers).to.be.an('Array');
        });

        it('should contain base64', function(){
            expect(Enc.algorithms.buffers).to.contain('base64');
        });

        describe('encoding', function(){
            it('using base64 buffer', function(){
                expect(Enc.base64.encode('test')).to.equal('dGVzdA==');
            })
        });

        describe('decoding', function(){
            it('using aes192 alg', function(){
                expect(Enc.base64.decode('dGVzdA==', 'test')).to.equal('test');
            })
        });
    });
});