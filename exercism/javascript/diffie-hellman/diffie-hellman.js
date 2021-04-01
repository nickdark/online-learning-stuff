//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    for (let i = 2; i < p; i++) {
      if (p % i === 0) {
        throw new Error();
      }
    }
    for (let i = 2; i < g; i++) {
      if (g % i === 0) {
        throw new Error();
      }
    }
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey > 1 && privateKey < this.p) {
      return (this.g ** privateKey) % this.p;
    }
    else {
      throw new Error();
    }
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return (theirPublicKey ** myPrivateKey) % this.p;
  }
}
