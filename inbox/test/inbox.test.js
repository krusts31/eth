const assert = require('assert');
const ganache = require('ganache');
const Web3 = require('web3');//Web3 is capitilized because it is considered as a function constructor and then you need to capitilize it 

const web3 = new Web3(ganache.provider());

