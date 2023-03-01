export const BSC_BLOCK_TIME = 3

const MAINNET = 56
const TESTNET = 97

const ChainID = MAINNET;

export const CHAIN_NAME = {
    [MAINNET]: 'BSC Mainnet',
    [TESTNET]: 'BSC Testnet',
}

export const BASE_BSC_SCAN_URLS = {
    [MAINNET]: 'https://bscscan.com',
    [TESTNET]: 'https://testnet.bscscan.com',
}

export const NODE = {
    [MAINNET]: 'https://bsc-dataseed.binance.org',
    [TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
}

export const SortOption = {
    CLASSES: 'Class',
    LEVEL: 'Level',
    GENDER: 'Gender',
    UPPER: 'Headgear Upper',
    MID: 'Headgear Mid',
    LOWER: 'Headgear Lower'
}

export const NATIVE_CURRENCY = {
    [MAINNET]: {
        name: 'BNB',
        symbol: 'bnb',
        decimals: 18,
    },
    [TESTNET]: {
        name: 'BNB',
        symbol: 'bnb',
        decimals: 18,
    },
}
export const walletLocalStorageKey = "wallet";

const Constants = {
    ChainID,
    CHAIN_NAME,
    NATIVE_CURRENCY,
    Node: NODE[ChainID],
    WalletLocalStorageKey: walletLocalStorageKey,
    BASE_BSC_SCAN_URLS,
  };

export default Constants;