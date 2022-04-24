const ethereumButton = document.querySelector(".enableEthereumButton");
const sendEthButton1 = document.querySelector(".sendEthButton1");
const sendEthButton2 = document.querySelector(".sendEthButton2");

let accounts = [];
var dt = new Date();
dt.setMonth(dt.getMonth() + 1);
dt.setHours(0, 0, 0, 0);
console.log(dt)

//Sending Ethereum to an address
sendEthButton1.addEventListener("click", () => {
  ethereum
    .request({
      method: "eth_sendTransaction",
      params: [
        {
          from: accounts[0],
          to: "0x55E428bfE81f3bF994CE1E3E5f09df49FA38ECee",
          value: "0x" + (0.000001 * 10 ** 18).toString(16),
          gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
          gas: "0x2710",
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
    // TODO
    dt.setMonth(d.getMonth() + 1);
    dt.setHours(0, 0, 0, 0);
    console.log(dt)
    myContract.methods.selectPlan(user,0.000001,dt).encodeABI();
    payDone = true;
    window.location.href = "http://localhost:5000/apidoc.html"
    //
});

sendEthButton2.addEventListener("click", () => {
  ethereum
    .request({
      method: "eth_sendTransaction",
      params: [
        {
          from: accounts[0],
          to: "0x55E428bfE81f3bF994CE1E3E5f09df49FA38ECee",
          value: "0x" + (0.0000002 * 10 ** 18).toString(16),
          gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
          gas: "0x2710",
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

ethereumButton.addEventListener("click", () => {
  getAccount();
});

async function getAccount() {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
}