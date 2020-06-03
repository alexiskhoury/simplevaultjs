var crypto = require('crypto-js');
//var key = 'farm19J0O';
// later we can use a key per entry or category

var self = {
  // Encrypt
  encrypt_data: function(data) {
    //lokijs can store only strings/objects; this is why .toString() was added to the original code
    var digest = crypto.AES.encrypt(data, 'yourhash').toString();
    return digest;
  },
  // Decrypt
  decrypt_data: function(digest) {
    //original code was digest.toString(); this was modified to disgets ony since toString() was appende din line 9
    var bytes = crypto.AES.decrypt(digest, 'farm19J0O');
    return bytes.toString(crypto.enc.Utf8);
  },

  compare_data: function(data, digest) {
    if (data == self.decrypt_data(digest)) {
      return true;
    } else {
      return false;
    }
  }

};

module.exports = self;
