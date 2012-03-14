var crypto = require("crypto");

module.exports = {
    base64Encode:function (str){
        return new Buffer(str).toString("base64");
    },

    base64Decode:function (str){
        return new Buffer(str, "base64").toString();
    },

    md5:function (str){
        return crypto.createHash("md5").update(str.toString()).digest("hex");
    },

    sha1:function (str){
        return crypto.createHash("sha1").update(str.toString()).digest("hex");
    }
};