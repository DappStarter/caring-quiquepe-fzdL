require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index reward stick comfort install clog bone gift'; 
let testAccounts = [
"0x08c7168424f6d72ae62f2828be6ac2ffc58aef919acb02ff59ac1046ba1ba1f9",
"0x9d1fab143f2c683c1b7351a15a8cb3babe9853c42d46e1e187dba433ffb04865",
"0x3b89beb43784368b9fbfb02f57fcfdc725cf1c704c777cba6f75e07e27bd3ebc",
"0xc06d2dd6c0bbac9144b0cbfa5d2a4ad5921a648cc5aa7e79a72c067836b35e45",
"0x8c8db5a90024ce8630160d0ca094754d8138dbbc3bd421dff06cb0da94fea5bb",
"0x60ef9743365b62fbbe98692ff847053e4df2e5567a34ebdf754539df755bd1fa",
"0xb67de9c0696a0e0f875d9703facb5bd167cdeedf1890c63d653285de1b049a72",
"0x478562c299c33dfb18cd5e94bea1225c45205fa096e2545352d73f4235bb5f9c",
"0xfc91ef96fd29c6a777558ac0996536802051f933a02a7ca2cfbeaa6e789ff2a6",
"0x493d80a767d4cf4993a34f66e66fca83c1c6cd78d47d74a78c3d4dab3254f204"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

