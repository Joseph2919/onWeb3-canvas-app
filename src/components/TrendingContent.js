import React, { useEffect, useState } from 'react';
import { getSolanaKeypair } from '../utils/SolanaWallet';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import PuzzleGame from './components/PuzzleGame';

const TrendingContent = () => {
  const [recipientPublicKey, setRecipientPublicKey] = useState('');
  const [status, setStatus] = useState('');
  const [walletPublicKey, setWalletPublicKey] = useState('');
  const [walletKeypair, setWalletKeypair] = useState(null);
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);


  useEffect(() => {
    const keypair = getSolanaKeypair();
    setWalletPublicKey(keypair.publicKey.toString());
    setWalletKeypair(keypair);

    console.log('Public Key:', keypair.publicKey.toString());
  }, []);

  const handleClaimAirdrop = async () => {
    if (!walletPublicKey || !walletKeypair) {
      setStatus('Wallet not initialized.');
      return;
    }
    try {
      setStatus('Claiming airdrop...');

      if (isPuzzleSolved) {
        // Airdrop logic goes here
        setStatus('Airdrop successful!');
      } else {
        setStatus('Solve the puzzle to claim the airdrop.');
      };

      // Update the connection URL to Testnet
      const connection = new Connection('https://api.testnet.solana.com', 'confirmed');
      const recipient = new PublicKey(recipientPublicKey);

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: new PublicKey(walletPublicKey),
          toPubkey: recipient,
          lamports: 1000000, // Amount to airdrop (in lamports)
        })
      );

      const signature = await connection.sendTransaction(transaction, [walletKeypair]);
      await connection.confirmTransaction(signature, 'confirmed');

      setStatus('Airdrop successful! Transaction Signature: ' + signature);
    } catch (error) {
      console.error('Error claiming airdrop:', error);
      setStatus('Airdrop failed: ' + error.message);
    }
  };

  return (
    <div className="trending-content">
      <h2>Claim Airdrop</h2>
      <PuzzleGame onSolve={setIsPuzzleSolved} />
      <input
        type="text"
        placeholder="Enter Recipient Public Key"
        value={recipientPublicKey}
        onChange={(e) => setRecipientPublicKey(e.target.value)}
        className="public-key-input"
      />
      <button onClick={handleClaimAirdrop} className="claim-button">
        Claim Airdrop
      </button>
      <p>{status}</p>
    </div>
  );
};

export default TrendingContent;
