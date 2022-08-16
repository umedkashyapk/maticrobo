// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

var CONTRACT_ADDRESS = "0xa1fEF90f0B11B325805c38B35507bb862d230AF6";
var ABI = [{"inputs":[{"internalType":"address payable","name":"_walletDev","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DevFeePaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"planIdx","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newcomer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"refLevel","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"RefInvited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Reinvested","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"DAYS7_MAXBALANCE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"DEPOSIT_HISTORY","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEV_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GUARD_LOWBALANCE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GUARD_LOWBALANCE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LAUNCHED","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOWBALANCE_REINVEST_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WITHDRAW_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"PLANS","outputs":[{"internalType":"uint256","name":"durationDays","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REINVEST_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_CLAIMED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_DEPOSITS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_INVESTED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_REFDIVIDENDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_USERS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"USERS","outputs":[{"internalType":"uint256","name":"checkpoint","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"refDividends","type":"uint256"},{"internalType":"uint256","name":"debtBuffer","type":"uint256"},{"internalType":"uint256","name":"totalInvested","type":"uint256"},{"internalType":"uint256","name":"totalRefDividends","type":"uint256"},{"internalType":"uint256","name":"totalClaimed","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WALLET_DEV","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_COOLDOWN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_RETURN_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDepositHistory","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct MaticRobo.THistoryDeposit[20]","name":"o_historyDeposits","type":"tuple[20]"},{"internalType":"uint256","name":"o_timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProjectInfo","outputs":[{"internalType":"uint256","name":"o_totDeposits","type":"uint256"},{"internalType":"uint256","name":"o_totInvested","type":"uint256"},{"internalType":"uint256","name":"o_totRefDividends","type":"uint256"},{"internalType":"uint256","name":"o_totClaimed","type":"uint256"},{"internalType":"uint256","name":"o_balance","type":"uint256"},{"internalType":"uint256","name":"o_guardLowBalance","type":"uint256"},{"internalType":"uint256","name":"o_totUsers","type":"uint256"},{"internalType":"uint256","name":"o_timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getUserDepositHistory","outputs":[{"components":[{"internalType":"uint256","name":"planIdx","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timeStart","type":"uint256"},{"internalType":"uint256","name":"timeEnd","type":"uint256"},{"internalType":"bool","name":"isReinvest","type":"bool"}],"internalType":"struct MaticRobo.TDeposit","name":"o_deposit","type":"tuple"},{"internalType":"uint256","name":"o_timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserInfo","outputs":[{"components":[{"internalType":"uint256","name":"dividends","type":"uint256"},{"internalType":"uint256","name":"mActive","type":"uint256"},{"internalType":"uint256","name":"rActive","type":"uint256"}],"internalType":"struct MaticRobo.TPlanInfo","name":"o_planInfo","type":"tuple"},{"components":[{"internalType":"uint256[5]","name":"count","type":"uint256[5]"},{"internalType":"uint256","name":"dividends","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"}],"internalType":"struct MaticRobo.TRefInfo","name":"o_refInfo","type":"tuple"},{"components":[{"internalType":"uint256","name":"claimable","type":"uint256"},{"internalType":"uint256","name":"checkpoint","type":"uint256"},{"internalType":"uint256","name":"totalDepositCount","type":"uint256"},{"internalType":"uint256","name":"activeDeposit","type":"uint256"},{"internalType":"uint256","name":"activeReinvest","type":"uint256"},{"internalType":"uint256","name":"totalInvested","type":"uint256"},{"internalType":"uint256","name":"totalClaimed","type":"uint256"}],"internalType":"struct MaticRobo.TUserInfo","name":"o_userInfo","type":"tuple"},{"internalType":"uint256","name":"o_timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"},{"internalType":"uint8","name":"_planIdx","type":"uint8"}],"name":"invest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"startUnix","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]
,"stateMutability":"view","type":"function"},{"inputs":[],"name":"stat_depositsReusedCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stat_maxDepositArrayLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stat_maxDepositArrayUser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

var defaultref = '0xda143Be4Ff739cBF4Af98A82d873B964bb1F6ea8'
var selectedAccount;
let web3Modal
let provider;
var chainid = 80001;

async function init() {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    //137: "https://polygon-rpc.com/",
                    80001 : "https://matic-mumbai.chainstacklabs.com"
                }
            }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });

    console.log("Web3Modal instance is:", web3Modal);

    var url_string = window.location.href;
    var url = new URL(url_string);
    var ref_link = url.searchParams.get("ref");
    if (ref_link != null) {
        sessionStorage.setItem('ref_link', ref_link);
    }
    var session_ref = sessionStorage.getItem('ref_link');
    if (session_ref == null) {
        sessionStorage.setItem('ref_link', defaultref);
    }
    refreshContractData();
    //refreshAccountData();
}

async function deposit(address, amount) {
    if (selectedAccount) {
        const web3 = new Web3(provider);
        let contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        if (contract) {
            var amount = $('#amountDeposit_a_1').val();
            let ref = sessionStorage.getItem('ref_link');
            await contract.methods.invest(ref, 0).send({
                value: web3.utils.toWei(amount.toString(), 'ether'),
                from: selectedAccount,
            }).on("transactionHash", () => {
                document.getElementById("amountDeposit_a_1").innerHTML = 'Depositing ...';
                console.log("transactionHash")
            }).on('receipt', () => {
                refreshContractData();
                refreshAccountData();
                document.getElementById("amountDeposit_a_1").innerHTML = 'Deposit';
            }).catch(err => {
                console.log(err);
                document.getElementById("amountDeposit_a_1").innerHTML = 'Deposit';
            });
        }
    } else {
        onConnect();
    }
}

async function withdraw() {
    if (selectedAccount) {
        const web3 = new Web3(provider);
        let contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        if (contract) {
            await contract.methods.withdraw().send({
                value: 0,
                from: selectedAccount,
            }).on("transactionHash", () => {
                document.getElementById("buttonDeposit_a_1").innerHTML = 'Pending...';
                console.log("transactionHash")
            }).on('receipt', () => {
                refreshContractData();
                refreshAccountData();
                document.getElementById("buttonDeposit_a_1").innerHTML = 'Withdraw';
            }).catch(err => {
                console.log(err);
                document.getElementById("buttonDeposit_a_1").innerHTML = 'Withdraw';
            });
        }
    } else {
        onConnect();
    }
}

async function refreshContractData() {
    const web3 = new Web3("https://polygon-rpc.com/")
    let contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    contract.methods.getProjectInfo().call().then(function(siteInfo_1) {
        $('#total_deposit_1').html((siteInfo_1.o_totInvested / 1000000000000000000).toFixed(4));
        $('#total_user_1').html(siteInfo_1.o_totUsers);
        $('#contract_balance_1').html((siteInfo_1.o_balance / 1000000000000000000).toFixed(4));
        $('#total_guard_1').html((siteInfo_1.o_guardLowBalance / 1000000000000000000).toFixed(4));

    }).then(console.log("refresh Contract Data done"));
}

async function refreshAccountData() {
    const web3 = new Web3(provider);
    let contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    // Get list of accounts of the connected wallet
    if (selectedAccount) {

        accFirst = selectedAccount.substring(0, 5);
        accLast = selectedAccount.slice(-4);
        $("#btn-login").text(accFirst + '...' + accLast);
        ref = 'https://' + window.location.host + '/?ref=' + selectedAccount
        $(".form-ref").attr("value", ref);
        $("#btn-logout").removeAttr("style").css({ "display": "inline-block", "padding": "7px 6px", "border": "none", "margin-left": "2px" });

        contract.methods.getUserAvailable(selectedAccount).call().then(function(totalAvailable) {
            $('#acc_available_1').text((totalAvailable / 1000000000000000000).toFixed(4));
        })
        contract.methods.getUserCheckpoint(selectedAccount).call().then(function(checkpoint) {
            current_date = Math.abs((new Date().getTime() / 1000).toFixed(0));
            available_at = parseInt(checkpoint) + 86400;

            if (current_date > available_at) {
                $('#wd_timer_a_1').text("Withdrawal available");
                $('#wd_timer_b_1').text("");
            } else {
                time_remaining = timeRemaining(current_date, available_at);

                $('#wd_timer_a_1').text("Withdrawal available in ");
                $('#wd_timer_b_1').text(time_remaining);
            }
        })
        contract.methods.getUserInfo(selectedAccount).call().then(function(res) {
            var planInfo = res.o_planInfo,
                refInfo = res.o_refInfo,
                userInfo = res.o_userInfo;
            $('#acc_active_deposit_1').text((userInfo.activeDeposit / 1000000000000000000).toFixed(4));
            $('#acc_active_reinvest_1').text((userInfo.activeReinvest / 1000000000000000000).toFixed(4));
            $('#acc_total_deposit_1').text((userInfo.totalInvested / 1000000000000000000).toFixed(4));
            $('#referral_bonus_1').text((refInfo.totalEarned / 1000000000000000000).toFixed(4));
            $('#acc_total_withdraw_1').text((userInfo.totalClaimed / 1000000000000000000).toFixed(4));
            $('#total_referrals_a_1').text(refInfo.count[0]);
            $('#total_referrals_b_1').text(refInfo.count[1]);
            $('#total_referrals_c_1').text(refInfo.count[2]);
            $('#total_referrals_d_1').text(refInfo.count[3]);
            $('#total_referrals_e_1').text(refInfo.count[4]);
            let column = "";
            $("#history_1").html("<tr><td colspan='3' style='text-align:center;'>No Deposit Record</td></tr>");
            for (let i = userInfo.totalDepositCount - 1; i >= 0; i--) {
                contract.methods.getUserDepositHistory(selectedAccount, i).call().then(function(res) {
                    amount = (res.o_deposit.amount / 1000000000000000000).toFixed(4);
                    start = new Date(res.o_deposit.timeStart * 1000).toLocaleDateString("en-US");
                    end = res.o_deposit.timeEnd * 1000;
                    end_text = "";
                    now = new Date();
                    end_text = "<small><b>ACTIVE</b></small>";
                    if (now > end) {
                        end_text = "<small><b>COMPLETED</b></small>";
                    }
                    column = column + "<tr>" + "<td>" + start + "</td><td>" + amount + " MATIC</td><td>" + end_text + "</td></tr>";
                    $("#history_1").html(column);
                })
            }
        })
    } else {
        console.log("not login");
        $("#btn-modal-login").attr("data-provider", "walletconnect");
        $(".form-ref").attr("value", "");
        $('#total_referrals_1').html('0');
        $('#referral_bonus_1').html('0.00000');
        $('#acc_total_deposit_1').html('0.00000');
        $('#acc_total_withdraw_1').html('0.00000');
        $('#acc_available_1').html('0.00000');
        $('#acc_active_deposit_1').html('0.00000');
        $('#acc_total_deposit_count_1').html('0');
        $("#history_1").html("<tr><td colspan='3' style='text-align:center;'>Please Connect a Wallet</td></tr>");
        $('#wd_timer_a_1').html('Withdrawal available ');
        $('#wd_timer_b_1').html('');
        $('#total_referrals_a_1').html(0);
        $('#total_referrals_b_1').html(0);
        $('#total_referrals_c_1').html(0);
        $('#total_referrals_d_1').html(0);
        $('#total_referrals_e_1').html(0);
    }
}

async function onConnect() {
    document.getElementById("btn-login").innerHTML = "Connecting ...";
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        let accounts = await web3.eth.getAccounts();
        let cId = await web3.eth.net.getId();
        // if (cId != chainid) {
        //     showAlert("Switch to Polygon-Mainnet", "error");
        //     document.getElementById("btn-login").innerHTML = "Connect";
        //     return;
        // }
        // MetaMask does not give you all accounts, only the selected account
        console.log("Got accounts", accounts);
        selectedAccount = accounts[0];
        refreshAccountData();
        localStorage.setItem('wallet', "metamask")
        $("#btn-modal-login").attr("data-provider", "metamask");
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        document.getElementById("btn-login").innerHTML = "Connect";
        return;
    }
}

async function onDisconnect() {
    console.log("Killing the wallet connection", provider);
    document.getElementById("btn-login").innerHTML = "...";
    if (provider.close) {
        await provider.close();
        await web3Modal.clearCachedProvider();
        provider = null;
    }

    selectedAccount = null;
    refreshAccountData();
    document.getElementById("btn-login").innerHTML = "Connect";
    $("#btn-logout").removeAttr("style").css({ "display": "none", "padding": "6px 0px", "border": "none", "margin-left": "12px" });
}

function timeRemaining(current, next) {
    var date = current;
    var date2 = next;

    var diff = date2 - date;

    var days = Math.floor(diff / 86400);
    var hours = Math.floor(diff / 3600) % 24;
    var minutes = Math.floor(diff / 60) % 60;
    var seconds = diff % 60;

    var daysStr = days;
    var hoursStr = hours;
    var minutesStr = minutes;
    var secondsStr = seconds;

    if (hours <= 0) {
        return minutesStr + " minutes";
    } else {
        return hoursStr + "h " + minutesStr + "m";
    }
}

function copyToClipboard(elementId) {
    var aux = document.getElementById(elementId);
    aux.select();
    document.execCommand("copy");
    $('#buttonRefLink').text("Copied");
}

function showAlert(msg, type) {
    if (type == 'error') {
        iziToast.error({
            title: 'Error',
            message: msg,
            backgroundColor: 'white',
            position: 'topRight',
            color: '.iziToast-color-red',
            iconColor: '.iziToast-color-red'
        });
    }

    if (type == 'success') {
        iziToast.success({
            title: 'OK',
            message: msg,
            backgroundColor: 'white',
            position: 'topRight',
            progressBarColor: '#76BF73',
            color: '.iziToast-#76BF73',
            iconColor: '.iziToast-#76BF73'
        });
    }
}

document.getElementById("buttonWithdraw_1").onclick = withdraw;
document.getElementById("buttonDeposit_a_1").onclick = deposit;
document.getElementById("btn-login").onclick = onConnect;
document.getElementById("btn-logout").onclick = onDisconnect;
window.addEventListener('load', init)