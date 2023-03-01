import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import Contract from 'web3-eth-contract';
import { ethers } from 'ethers'
import Constants from '../config';
import abiSet from '../constant/tokenabi';
import {addressSet} from '../constant/addressSet'

const contractAddress = addressSet.contractAddress;
const contractAbi =  abiSet.contractAbi;
const tokenContractAddress = addressSet.tokenContractAddress;
const tokenabi = abiSet.tokenabi;

const Web3 = require('web3');


let walletProvider = null;
let walletAddress = "";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: "460f40a260564ac4a4f4b3fffb032dad", // required
      bridge: "https://bridge.walletconnect.org"
    }
  }
};

const web3Modal = new Web3Modal({
  network: "testnet", // optional
  cacheProvider: false, // optional
  disableInjectedProvider: false,
  providerOptions // required
});

export const getWalletProvider = () => {
  return walletProvider;
}
export const getWalletAddres = () => {
  return walletAddress
}

export const setupNetwork = async () => {
  const provider = window.ethereum
  if (provider) {
    const chainId = Constants.ChainID
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: Constants.CHAIN_NAME[chainId],
            nativeCurrency: Constants.NATIVE_CURRENCY[chainId],
            rpcUrls: [Constants.Node],
            blockExplorerUrls: [Constants.BASE_BSC_SCAN_URLS[chainId]],
          },
        ],
      })
      return true
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error)
      return false
    }
  } else {
      console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
      return false
  }
}

export const connectWallet = async () => {
  try {
    await web3Modal.clearCachedProvider()
    const provider = await web3Modal.connect()
    window.web3 = new Web3(provider)

    window.web3.eth.extend({
      methods: [
        {
          name: "chainId",
          call: "eth_chainId",
          outputFormatter: window.web3.utils.hexToNumber
        }
      ]
    });

    const chainId = await window.web3.eth.chainId();
    if (chainId !== Constants.ChainID) { //56: mainnet, 97: testnet
      const res = await setupNetwork();
      if (!res) {
        return {
          address: "",
          status: "Add network"
        }
      }
    }

    provider.on("chainChanged", (chainId) => {
      setupNetwork();
    });

    const accounts = await window.web3.eth.getAccounts();
    const address = accounts[0];

    window.localStorage.setItem(Constants.WalletLocalStorageKey, address);

    walletProvider = provider;
    walletAddress = address;
    //console.log("Connected WalletAddress: ", walletAddress)
    if (accounts.length > 0) {
      return {
        address: walletAddress,
        status: "Success"
      }
    } else {
      return {
        address: "",
        status: "Connect to wallet"
      }
    }
  } catch (err) {
    return {
      address: "",
      status: err.message
    }
  }
}

export const disconnectWallet = async () => {
  await web3Modal.clearCachedProvider()
  if (walletProvider?.disconnect && typeof walletProvider.disconnect === 'function') {
    await walletProvider.disconnect()
  }
  window.localStorage.removeItem(Constants.WalletLocalStorageKey);
  walletProvider = null
}

export const checkWalletIsConnected = async () => {
  const { ethereum } = window

  if (!ethereum) {
    console.log('Make sure Metamask is installed!')
    return
  } else {
    console.log('Wallet exists,ready to go')
  }

  const accounts = await ethereum.request({ method: 'eth_accounts' })

  if (accounts.length !== 0) {
    const account = accounts[0]
    return account
  } else {
    console.log('no auth. account found')
  }
}

export const isWalletConnected = () => {
  if (walletProvider !== null && walletProvider !== undefined) return true;
  return false;
}

export const approveTokens = async () => {
  try {
    const { ethereum } = window

    if (ethereum) {
      let amountToStake = 100 //@TODO userinput here

      console.log('started')
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()

      const WaveTokenContract = new ethers.Contract(
        tokenContractAddress,
        tokenabi,
        signer,
      )

      console.log('initalize token approval')
      let tokenApproval = await WaveTokenContract.approve(
        contractAddress,
        5e10,
      )

      console.log('Approving Tokens...please wait')

      await tokenApproval.wait()

      console.log('tokens approved!')
    } else {
      console.log('Ethereum object doesnt exist')
    }
  } catch (err) {
    console.log(err)
  }
}

export const createBets= async () => {
  try {
    const { ethereum } = window

    if (ethereum) {
      let betAmount = '0.001' //@TODO userinput here, in total AVAX. Has to be a string

      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const bettingContract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer,
      )

      const betType = 0 //@TODO Userinput here. 0 is long, 1 is short.

      const betDuration = 0 //@TODO Userinput here. Timeunit is 1=  1 hour. Minimum of 1h.

      const stockpicked = 0 ////@TODO this enum is used for the stocks: enum Stocks{TSLA,AAPL, AMZN,GOLD,NFLX,GOOGL, META}. So Tsla is 0, AAPL 1 and so on

      const payoutRatio = 100 //@TODO The Payout Ratio. 100 is 1:1. 1 is 0.01 : 1. 1000 is 10:1

      const expirationDate = 1662220020 //@TODO UNIX Timestamp of when the bet is supposed to expire / become unavailable (if desired, otherwise use 0)

      let BetCreationTransaction = await bettingContract.createBet(
        betType,
        betDuration,
        stockpicked,
        payoutRatio,
        expirationDate,
        { value: ethers.utils.parseEther(betAmount) },
      )

      console.log(
        `Bet created, see transaction: https://rinkeby.etherscan.io/tx/${BetCreationTransaction.hash}`,
      )
    } else {
      console.log('Ethereum object doesnt exist')
    }
  } catch (err) {
    console.log(err)
  }
}

export const acceptBet = async () => {
  try {
    const { ethereum } = window

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const bettingContract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer,
      )

      const betId = 0 //@TODO check View functions. The ID of the Bet Instance to accept.
      const betAmount = '0.1' // You calculate the betAmount necessary by getting the BetAmount from the view function and multiply as follows:   betAmount == (runningBets[_betIDToAccept].betAmount / 100) *  runningBets[_betIDToAccept].PayoutRatio,

      let betAcceptanceCreation = await bettingContract.acceptBet(betId, {
        value: ethers.utils.parseEther(betAmount),
      })

      console.log(
        `Bet accepted, see transaction: https://rinkeby.etherscan.io/tx/${betAcceptanceCreation.hash}`,
      )
    } else {
      console.log('Ethereum object doesnt exist')
    }
  } catch (err) {
    console.log(err)
  }
}

export   const withdrawBet = async () => {
  try {
    const { ethereum } = window

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const bettingContract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer,
      )

      const betId = 0 //@TODO check View functions. The ID of the Bet Instance to withdraw. See Open Betmaker View Function

      let betAcceptanceCreation = await bettingContract.withdrawBet(betId)

      console.log(
        `Bet withdrawn, see transaction: https://rinkeby.etherscan.io/tx/${betAcceptanceCreation.hash}`,
      )
    } else {
      console.log('Ethereum object doesnt exist')
    }
  } catch (err) {
    console.log(err)
  }
}

export   const resolveBet = async () => {
  try {
    const { ethereum } = window

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const bettingContract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer,
      )

      const betId = 0 //@TODO check View functions. The ID of the Bet Instance to resolve. See Open Betmaker View Function

      let betAcceptanceCreation = await bettingContract.resolveBet(betId)

      console.log(
        `Bet resolved, see transaction: https://rinkeby.etherscan.io/tx/${betAcceptanceCreation.hash}`,
      )
    } else {
      console.log('Ethereum object doesnt exist')
    }
  } catch (err) {
    console.log(err)
  }
}

export   const viewOpenbets = async () => {
  try {
    const { ethereum } = window

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const bettingContract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer,
      )

      let openBetsArray = await bettingContract.ViewAllOpenBets() //output array to parse into UI.
    } else {
      console.log('Ethereum object doesnt exist')
    }
  } catch (err) {
    console.log(err)
  }
}

export   const viewAllRunningBetsBetTaker = async () => {
  try {
    const { ethereum } = window

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const bettingContract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer,
      )

      let runningBetsArrayBetTaker = await bettingContract.viewAllRunningBetsBetTaker(
        await signer.getAddress(),
      ) //output array to parse into UI.
    } else {
      console.log('Ethereum object doesnt exist')
    }
  } catch (err) {
    console.log(err)
  }
}

export   const viewAllResolvedBetsUser = async () => {
  try {
    const { ethereum } = window

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const bettingContract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer,
      )

      let resolvedBetsUserArray = await bettingContract.viewAllResolvedBetsPlayer(
        await signer.getAddress(),
      ) //output array to parse into UI.
    } else {
      console.log('Ethereum object doesnt exist')
    }
  } catch (err) {
    console.log(err)
  }
}

const ContractUtils = {
  getWalletProvider,
  getWalletAddres,
  connectWallet,
  disconnectWallet,
  checkWalletIsConnected,
  isWalletConnected,
  approveTokens,
  createBets,
  acceptBet,
  withdrawBet,
  resolveBet,
  viewOpenbets,
  viewAllRunningBetsBetTaker,
  viewAllResolvedBetsUser,
};

export default ContractUtils;