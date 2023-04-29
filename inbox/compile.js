const path = require('path');
const solc = require('solc');
const fs = require('fs');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'inbox.sol': {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};


const output = JSON.parse(solc.compile(JSON.stringify(input)));

if (output.errors) {
  output.errors.forEach((error) => {
    console.error(error.formattedMessage);
  });
}

const inboxContract = output.contracts['inbox.sol'].Inbox;

module.exports = {
  abi: inboxContract.abi,
  bytecode: inboxContract.evm.bytecode.object
};
