require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note pulse purpose gesture local force gesture'; 
let testAccounts = [
"0x9c983dcdd9a88c6ca1487495652ca9a73e3c783b725f8a2a25d92267829607ee",
"0x2bd7135a7f7ee2603a89469a0e2a2596752012afbfe4ada19c927822fd8beb1c",
"0x8aa29b71d15616c10c0faf6e01d93bbea8aeec64f50820c9ef3317fbd6015f9e",
"0xa99e8d4643607de444cffb85afb593ad303e7d9d2741e601fc8ef2fd476029b3",
"0x983e0451d401e715dded4f3ec176caf9602456b14c9011124933636613d97792",
"0x9660cf20a365f81cc1363948bad190e85b47867790144cb8078fb9eed73a17ef",
"0xd57b09e5433fd70641723217f99f4a2af5bc83d4ddd23cfa624a4e85187a1174",
"0x18a501d762412ca8baf8b091f088bed53b8a6f786377454ac6c0d48c95a3104d",
"0x7eca7e711af5139e7d6e03043247be192ad24f581b9870804155d9b3623a681c",
"0x871cae718d7b3f62500bc36ceb5a2b78c06dc5c938964eaa478352ca93b7785e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

