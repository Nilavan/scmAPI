const loginButton = document.getElementById("loginButton")

function toggleButton() {
if (!window.ethereum) {
    loginButton.innerText = "MetaMask is not installed"
    loginButton.classList.remove("bg-purple-500", "text-white")
    loginButton.classList.add(
    "bg-gray-500",
    "text-gray-100",
    "cursor-not-allowed"
    );
    return false
}

loginButton.addEventListener("click", loginWithMetaMask)
}

async function loginWithMetaMask() {
const accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((e) => {
    console.error(e.message);
    return;
    });
if (!accounts) {
    return;
}

window.userWalletAddress = accounts[0]
const account = window.userWalletAddress
const dict = { account }
console.log(window.userWalletAddress)
window.alert(window.userWalletAddress)
$.ajax({
    url: "/addr",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(account),
})

loginButton.removeEventListener("click", loginWithMetaMask)
}

window.addEventListener("DOMContentLoaded", () => {
toggleButton();
});