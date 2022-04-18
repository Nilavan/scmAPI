const ethereumButton = document.querySelector(".enableEthereumButton");
const sendEthButton1 = document.querySelector(".sendEthButton1");
const sendEthButton2 = document.querySelector(".sendEthButton2");

      let accounts = [];
      //let num = 5*10

      //Sending Ethereum to an address
      sendEthButton1.addEventListener("click", () => {
        ethereum
          .request({
            method: "eth_sendTransaction",
            params: [
              {
                from: accounts[0],
                to: "0x2f318C334780961FB129D2a6c30D0763d9a5C970",
                value: "0x" + (0.5 * 10 ** 18).toString(16),
                gasPrice: "0x09184e72a000",
                gas: "0x2710",
              },
            ],
          })
          .then((txHash) => console.log(txHash))
          .catch((error) => console.error);
      });

      sendEthButton2.addEventListener("click", () => {
        ethereum
          .request({
            method: "eth_sendTransaction",
            params: [
              {
                from: accounts[0],
                to: "0x2f318C334780961FB129D2a6c30D0763d9a5C970",
                value: "0x" + (1 * 10 ** 18).toString(16),
                gasPrice: "0x09184e72a000",
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