/**
 * This script extracts compiled contract ABIs and bytecode
 * and generates the frontend/contracts.js file
 *
 * Usage:
 * 1. First compile contracts: yarn compile
 * 2. Run this script: node scripts/generate-frontend-contracts.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTRACTS_TO_EXTRACT = [
    {
        name: 'FiatToken',
        path: 'artifacts/hardhat/contracts/fiat/FiatToken.sol/FiatToken.json'
    },
    {
        name: 'AdminUpgradeabilityProxy',
        path: 'artifacts/hardhat/contracts/upgradeability/AdminUpgradeabilityProxy.sol/AdminUpgradeabilityProxy.json'
    },
    {
        name: 'MasterMinter',
        path: 'artifacts/hardhat/contracts/minting/MasterMinter.sol/MasterMinter.json'
    }
];

const OUTPUT_FILE = path.join(__dirname, '../frontend/contracts.js');

console.log('🔍 Extracting contract data...\n');

const contracts = {};

try {
    for (const contract of CONTRACTS_TO_EXTRACT) {
        const contractPath = path.join(__dirname, '..', contract.path);

        console.log(`Reading ${contract.name}...`);

        if (!fs.existsSync(contractPath)) {
            throw new Error(`Contract artifact not found: ${contractPath}\nPlease run 'yarn compile' first.`);
        }

        const contractJson = JSON.parse(fs.readFileSync(contractPath, 'utf8'));

        contracts[contract.name] = {
            abi: contractJson.abi,
            bytecode: contractJson.bytecode
        };

        console.log(`✓ ${contract.name} extracted`);
    }

    // Generate JavaScript file
    console.log('\n📝 Generating frontend/contracts.js...');

    const output = `// Auto-generated file - DO NOT EDIT MANUALLY
// Generated on: ${new Date().toISOString()}
//
// To regenerate this file:
// 1. yarn compile
// 2. node scripts/generate-frontend-contracts.js

const CONTRACTS = ${JSON.stringify(contracts, null, 2)};
`;

    fs.writeFileSync(OUTPUT_FILE, output, 'utf8');

    console.log(`✓ contracts.js generated successfully at: ${OUTPUT_FILE}`);
    console.log('\n✅ Done! You can now use the frontend deployer.');

} catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
}
