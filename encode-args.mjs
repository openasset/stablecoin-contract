import { AbiCoder } from 'ethers';

const abiCoder = AbiCoder.defaultAbiCoder();
const encoded = abiCoder.encode(
  ['address'],
  ['0x59273a4C287415F5AE99D19A86dE4f351521f157']
);

console.log('Constructor Arguments (ABI-encoded):');
console.log(encoded.slice(2)); // Remove 0x prefix