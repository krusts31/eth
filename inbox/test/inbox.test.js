const assert = require('assert');
const ganache = require('ganache');
const Web3 = require('web3');//Web3 is capitilized because it is considered as a function constructor and then you need to capitilize it 
const { abi, bytecode } = require('../compile.js');

const web3 = new Web3(ganache.provider());

let accounts;
let inbox;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(abi)
    .deploy({data: bytecode, arguments: ['Hi there!']})
    .send({from: accouts[0], gas: '1000000'});
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(accounts);
  });
});
