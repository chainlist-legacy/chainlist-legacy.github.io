"use strict";
exports.id = 421;
exports.ids = [421];
exports.modules = {

/***/ 748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pn": () => (/* binding */ ERROR),
/* harmony export */   "vL": () => (/* binding */ CONNECT_WALLET),
/* harmony export */   "Wl": () => (/* binding */ CONFIGURE),
/* harmony export */   "y5": () => (/* binding */ ACCOUNT_CONFIGURED),
/* harmony export */   "TI": () => (/* binding */ STORE_UPDATED),
/* harmony export */   "u3": () => (/* binding */ ACCOUNT_CHANGED),
/* harmony export */   "hA": () => (/* binding */ TRY_CONNECT_WALLET),
/* harmony export */   "XY": () => (/* binding */ TX_SUBMITTED)
/* harmony export */ });
/* unused harmony exports CONNECTION_CONNECTED, CONNECTION_DISCONNECTED, CONFIGURE_NETWORK_LIST, NETWORK_LIST_CONFIGURED */
// GENERAL
const ERROR = 'ERROR';
const CONNECTION_CONNECTED = 'CONNECTION_CONNECTED';
const CONNECTION_DISCONNECTED = 'CONNECTION_DISCONNECTED';
const CONNECT_WALLET = 'CONNECT_WALLET';
const CONFIGURE = 'CONFIGURE';
const ACCOUNT_CONFIGURED = 'ACCOUNT_CONFIGURED';
const CONFIGURE_NETWORK_LIST = 'CONFIGURE_NETWORK_LIST';
const NETWORK_LIST_CONFIGURED = 'NETWORK_LIST_CONFIGURED';
const STORE_UPDATED = 'STORE_UPDATED';
const ACCOUNT_CHANGED = 'ACCOUNT_CHANGED';
const TRY_CONNECT_WALLET = 'TRY_CONNECT_WALLET';
const TX_SUBMITTED = 'TX_SUBMITTED';


/***/ }),

/***/ 421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ stores)
});

// EXTERNAL MODULE: ./stores/constants/constants.js
var constants = __webpack_require__(748);
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(519);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);
;// CONCATENATED MODULE: ./stores/accountStore.js



class Store {
    constructor(dispatcher, emitter){
        this.dispatcher = dispatcher;
        this.emitter = emitter;
        this.store = {
            account: null,
            web3: null
        };
        dispatcher.register((function(payload) {
            switch(payload.type){
                case constants/* CONFIGURE */.Wl:
                    this.configure(payload);
                    break;
                case constants/* TRY_CONNECT_WALLET */.hA:
                    this.tryConnectWallet(payload);
                    break;
                default:
                    {}
            }
        }).bind(this));
    }
    getStore(index) {
        return this.store[index];
    }
    setStore(obj) {
        this.store = {
            ...this.store,
            ...obj
        };
        return this.emitter.emit(constants/* STORE_UPDATED */.TI);
    }
    configure = async ()=>{
    // if (window.ethereum) {
    //   window.web3 = new Web3(ethereum);
    //   try {
    //     await ethereum.enable();
    //     var accounts= await web3.eth.getAccounts();
    //     this.setStore({ account: { address: accounts[0] }, web3: window.web3 })
    //     this.emitter.emit(ACCOUNT_CONFIGURED)
    //   } catch (error) {
    //     // User denied account access...
    //   }
    //
    //   this.updateAccount()
    //
    // } else if (window.web3) {
    //   window.web3 = new Web3(web3.currentProvider);
    //   // Acccounts always exposed
    //   web3.eth.sendTransaction({/* ... */});
    // }
    // // Non-dapp browsers...
    // else {
    //   console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    // }
    };
    updateAccount = ()=>{
        const that = this;
        const res = window.ethereum.on('accountsChanged', function(accounts) {
            that.setStore({
                account: {
                    address: accounts[0]
                }
            });
            that.emitter.emit(constants/* ACCOUNT_CHANGED */.u3);
            that.emitter.emit(constants/* ACCOUNT_CONFIGURED */.y5);
        });
    };
    getWeb3Provider = async ()=>{
        let web3context = this.getStore('web3context');
        let provider = null;
        if (!web3context) {
            provider = network.providers['1'];
        } else {
            provider = web3context.library.provider;
        }
        if (!provider) {
            return null;
        }
        return new (external_web3_default())(provider);
    };
    tryConnectWallet = async ()=>{
        if (window.ethereum) {
            window.web3 = new (external_web3_default())(ethereum);
            try {
                await ethereum.enable();
                var accounts = await web3.eth.getAccounts();
                this.setStore({
                    account: {
                        address: accounts[0]
                    },
                    web3: window.web3
                });
                this.emitter.emit(constants/* ACCOUNT_CONFIGURED */.y5);
            } catch (error) {
            // User denied account access...
            }
        } else if (window.web3) {
            window.web3 = new (external_web3_default())(web3.currentProvider);
            var accounts = await web3.eth.getAccounts();
            this.setStore({
                account: {
                    address: accounts[0]
                },
                web3: window.web3
            });
            this.emitter.emit(constants/* ACCOUNT_CONFIGURED */.y5);
        } else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    };
}
/* harmony default export */ const accountStore = (Store);

;// CONCATENATED MODULE: ./stores/index.js

const Dispatcher = (__webpack_require__(833).Dispatcher);
const Emitter = (__webpack_require__(361).EventEmitter);
const dispatcher = new Dispatcher();
const emitter = new Emitter();
const stores_accountStore = new accountStore(dispatcher, emitter);
/* harmony default export */ const stores = ({
    accountStore: stores_accountStore,
    dispatcher: dispatcher,
    emitter: emitter
});


/***/ })

};
;