const contractAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "accountsByAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "accountAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "accountId",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isPaymentDone",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "amountPaid",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "planExpiresAt",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "company",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isAccountPresent",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "ownersById",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "ownerId",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "suppliersById",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "supplierId",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_ownerId",
                "type": "uint256"
            }
        ],
        "name": "addOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_ownerId",
                "type": "uint256"
            }
        ],
        "name": "getNoProduct",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_ownerId",
                "type": "uint256"
            }
        ],
        "name": "getProductGeneralDetails1",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "productId",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SupplyChain.ProductDetails[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_ownerId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            }
        ],
        "name": "getProductStatusDetails",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "time",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "message",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "publisherId",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SupplyChain.ProductStatusDeails[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_ownerId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "addProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_supplierId",
                "type": "uint256"
            }
        ],
        "name": "addSupplier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_supplierId",
                "type": "uint256"
            }
        ],
        "name": "getNoProduct2",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_supplierId",
                "type": "uint256"
            }
        ],
        "name": "getProductGeneralDetails2",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "productId",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SupplyChain.ProductDetails[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_supplierId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_message",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            }
        ],
        "name": "addProductStaus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            }
        ],
        "name": "checkIfAccountPresent",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            }
        ],
        "name": "createAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            }
        ],
        "name": "checkIfPaymentDone",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amountPaid",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_planExpiresAt",
                "type": "uint256"
            }
        ],
        "name": "selectPlan",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_accountAddress",
                "type": "address"
            }
        ],
        "name": "checkIfPlanExpired",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
  ];

window.userAddress = null;
window.onload = async () => {
    // Init Web3 connected to ETH network
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
    } else {
        alert("No ETH brower extension detected.");
    }

    // Load in Localstore key
    window.userAddress = window.localStorage.getItem("userAddress");
    showAddress();
};

// Use this function to turn a 42 character ETH address
// into an address like 0x345...12345
function truncateAddress(address) {
    if (!address) {
        return "";
    }
    return `${address.substr(0, 5)}...${address.substr(
        address.length - 5,
        address.length
    )}`;
}
 
// Display or remove the users know address on the frontend
function showAddress() {
    if (!window.userAddress) {
        document.getElementById("userAddress").innerText = "";
        //document.getElementById("logoutButton").classList.add("hidden");
        return false;
    }

    document.getElementById(
        "userAddress"
    ).innerText = `ETH Address: ${truncateAddress(window.userAddress)}`;
    document.getElementById("logoutButton").classList.remove("hidden");
}

// remove stored user address and reset frontend
function logout() {
    window.userAddress = null;
    window.localStorage.removeItem("userAddress");
    showAddress();
}

var Tx = require('ethereumjs-tx').Transaction

async function test(){
    const contractAddress = "0x860Ce059120F2AecfE69331067Fe231c3DDd32EB";
    const companyAddress = "0x55E428bfE81f3bF994CE1E3E5f09df49FA38ECee";
    const user = window.userAddress;

    const web3 = new Web3("https://rinkeby.infura.io/v3/6d17d1d302fd468a9ccc16233e5ff1b8");

    web3.eth.defaultAccount = companyAddress;
    var myContract = new web3.eth.Contract(contractAbi, contractAddress);

    var isPresent = false;
    isPresent = await myContract.methods.checkIfAccountPresent(user).call({
        from: companyAddress,
    });
    console.log(isPresent);
    alert("Account present: "+isPresent)
    if (!isPresent) {
        alert('Creating account. Please wait. This may take a while.')
        const privateKey1 = new ethereumjs.Buffer.Buffer('privatekey', 'hex');
        const query = await myContract.methods.createAccount(user).encodeABI();

        web3.eth.getTransactionCount(companyAddress, (err, txCount) => {
            // Build the transaction
            const txObject = {
                nonce: web3.utils.toHex(txCount),
                to: contractAddress,
                value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
                gasLimit: web3.utils.toHex(2100000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('60', 'gwei')),
                data: query
            }
            // Sign the transaction
            const tx = new ethereumjs.Tx(txObject,{chain: 'rinkeby'});
            tx.sign(privateKey1);

            const serializedTx = tx.serialize();
            const raw = '0x' + serializedTx.toString('hex');
            // Broadcast the transaction
            const transaction = web3.eth.sendSignedTransaction(raw).then(tx => {
                console.log('Tx:', tx);
                alert('Transaction complete! Account created.')
            })
            .catch(e => {
                console.error('Error broadcasting the transaction: ', e);
                alert('Error broadcasting the transaction: '+ e)
            });
        })
    }
    else {
        var payDone = await myContract.methods.checkIfPaymentDone(user).call({
            from: companyAddress,
        });
        //payDone = false; // Demo
        console.log(payDone);
        alert("Payment Done: "+payDone);
        var planExp = await myContract.methods.checkIfPlanExpired(user).call({
            from: companyAddress,
        });
        //planExp = true; // Demo
        console.log(planExp);
        alert("Plan Expired: "+planExp);
        if (!payDone || planExp) {
            window.location.href = "/pricing.html";
        }
        else {
            window.location.href = "/apidoc.html";
        }
    }
  //
}

// Login with Web3 via Metamasks window.ethereum library
async function loginWithEth() {
    if (window.web3) {
        try {
            // We use this since ethereum.enable() is deprecated. This method is not
            // available in Web3JS - so we call it directly from metamasks' library
            const selectedAccount = await window.ethereum
                .request({
                method: "eth_requestAccounts",
                })
                .then((accounts) => accounts[0])
                .catch(() => {
                throw Error("No account selected!");
                });
            
            window.userAddress = selectedAccount;
            window.localStorage.setItem("userAddress", selectedAccount);
            const addr = window.userAddress;
            const dict = { addr: window.userAddress };
            console.log(JSON.stringify(dict));
            window.alert(JSON.stringify(dict));
            $.ajax({
                url: "/login",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(dict),
            });
            showAddress();
        } catch (error) {
            console.error(error);
        }
    } else {
        alert("No ETH brower extension detected.");
    }
}

async function sendEth1(){
    const contractAddress = "0x860Ce059120F2AecfE69331067Fe231c3DDd32EB";
    const companyAddress = "0x55E428bfE81f3bF994CE1E3E5f09df49FA38ECee";
    const user = window.userAddress;

    const web3 = new Web3("https://rinkeby.infura.io/v3/6d17d1d302fd468a9ccc16233e5ff1b8");

    var myContract = new web3.eth.Contract(contractAbi, contractAddress);
    const dt = Math.floor(new Date().getTime()/1000)+2592000;
    console.log(dt)

    await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: user,
            to: companyAddress,
            value: "0x" + (0.1 * 10 ** 18).toString(16),
            gasPrice: web3.utils.toHex(web3.utils.toWei('60', 'gwei')),
            gas: "0x2710",
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);

    const privateKey = new ethereumjs.Buffer.Buffer('privatekey', 'hex');

    const address = companyAddress;
    const amount = 1;
    const expiresAt = dt;
    const query = await myContract.methods.selectPlan(user, amount, expiresAt).encodeABI();
    web3.eth.getTransactionCount(companyAddress, (err, txCount) => {
        // Build the transaction
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            to: contractAddress,
            value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
            gasLimit: web3.utils.toHex(2100000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('60', 'gwei')),
            data: query
        }
        // Sign the transaction
        const tx = new ethereumjs.Tx(txObject);
        tx.sign(privateKey);

        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');

        // Broadcast the transaction
        const transaction = web3.eth.sendSignedTransaction(raw).then(tx => {
            console.log('Tx:', tx);
            alert('Transaction complete!')
        })
        .catch(e => {
            console.error('Error broadcasting the transaction: ', e);
            alert('Error broadcasting the transaction: '+ e)
        });
    })
  }
  
  async function sendEth2(){
    const contractAddress = "0x860Ce059120F2AecfE69331067Fe231c3DDd32EB";
    const companyAddress = "0x55E428bfE81f3bF994CE1E3E5f09df49FA38ECee";
    const user = window.userAddress;

    const web3 = new Web3("https://rinkeby.infura.io/v3/6d17d1d302fd468a9ccc16233e5ff1b8");

    var myContract = new web3.eth.Contract(contractAbi, contractAddress);
    const dt = Math.floor(new Date().getTime()/1000)+2*2592000;
    console.log(dt)

    await ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: user,
          to: companyAddress,
          value: "0x" + (0.2 * 10 ** 18).toString(16),
          gasPrice: web3.utils.toHex(web3.utils.toWei('60', 'gwei')),
          gas: "0x2710",
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);

    const privateKey = new ethereumjs.Buffer.Buffer('privatekey', 'hex');

    const address = companyAddress;
    const amount = web3.utils.toHex(web3.utils.toWei('0.000002', 'ether'));
    const expiresAt = dt;
    const query = await myContract.methods.selectPlan(user, amount, expiresAt).encodeABI();
    web3.eth.getTransactionCount(companyAddress, (err, txCount) => {
        // Build the transaction
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            to: contractAddress,
            value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
            gasLimit: web3.utils.toHex(2100000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('60', 'gwei')),
            data: query
        }
        // Sign the transaction
        const tx = new ethereumjs.Tx(txObject);
        tx.sign(privateKey);

        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');

        // Broadcast the transaction
        const transaction = web3.eth.sendSignedTransaction(raw).then(tx => {
            console.log('Tx:', tx);
            alert('Transaction complete!')
        })
        .catch(e => {
            console.error('Error broadcasting the transaction: ', e);
            alert('Error broadcasting the transaction: '+ e)
        });
    })
  }