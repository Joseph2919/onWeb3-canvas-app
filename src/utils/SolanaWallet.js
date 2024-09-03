
import { Keypair } from '@solana/web3.js';
import * as bip39 from 'bip39';
import { derivePath } from 'ed25519-hd-key';

export const getSolanaKeypair = () => {
    const mnemonic = process.env.REACT_APP_SOLANA_MNEMONIC;
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const derivationPath = "m/44'/501'/0'/0'";  
    const derivedSeed = derivePath(derivationPath, seed).key;
    return Keypair.fromSeed(derivedSeed);
};
