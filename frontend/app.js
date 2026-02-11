// Network configurations
const NETWORKS = {
    1001: {
        name: 'Kaia Testnet (Kairos)',
        chainId: '0x3e9',
        rpcUrls: ['https://public-en-kairos.node.kaia.io'],
        blockExplorerUrls: ['https://kairos.kaiascope.com'],
        nativeCurrency: {
            name: 'KAIA',
            symbol: 'KAIA',
            decimals: 18
        }
    },
    8217: {
        name: 'Kaia Mainnet (Cypress)',
        chainId: '0x2019',
        rpcUrls: ['https://public-en-cypress.node.kaia.io'],
        blockExplorerUrls: ['https://kaiascope.com'],
        nativeCurrency: {
            name: 'KAIA',
            symbol: 'KAIA',
            decimals: 18
        }
    },
    97: {
        name: 'BSC Testnet',
        chainId: '0x61',
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
        blockExplorerUrls: ['https://testnet.bscscan.com'],
        nativeCurrency: {
            name: 'BNB',
            symbol: 'tBNB',
            decimals: 18
        }
    },
    56: {
        name: 'BSC Mainnet',
        chainId: '0x38',
        rpcUrls: ['https://bsc-dataseed.binance.org'],
        blockExplorerUrls: ['https://bscscan.com'],
        nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18
        }
    }
};

// Global state
let provider = null;
let signer = null;
let currentAccount = null;
let currentChainId = null;
let connectedToken = null; // 연결된 토큰 컨트랙트
let connectedMasterMinter = null; // 연결된 MasterMinter 컨트랙트

// DOM Elements
const connectWalletBtn = document.getElementById('connectWallet');
const walletInfo = document.getElementById('walletInfo');
const connectedAddressSpan = document.getElementById('connectedAddress');
const currentNetworkSpan = document.getElementById('currentNetwork');
const networkSelect = document.getElementById('networkSelect');
const switchNetworkBtn = document.getElementById('switchNetwork');
const deployButton = document.getElementById('deployButton');
const useCurrentAddressCheckbox = document.getElementById('useCurrentAddress');
const deploymentStatus = document.getElementById('deploymentStatus');
const statusMessages = document.getElementById('statusMessages');
const deploymentResult = document.getElementById('deploymentResult');

// Event Listeners - 페이지 로드 후 초기화
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    // ethers.js 로드 확인
    if (typeof ethers === 'undefined') {
        console.error('ethers.js가 로드되지 않았습니다.');
        alert('ethers.js 라이브러리 로딩에 실패했습니다. 페이지를 새로고침해주세요.');
        return;
    }

    // Check if MetaMask is installed
    if (typeof window.ethereum === 'undefined') {
        alert('MetaMask가 필요합니다. https://metamask.io 에서 설치해주세요.');
    }

    // 이벤트 리스너 등록
    connectWalletBtn.addEventListener('click', connectWallet);
    switchNetworkBtn.addEventListener('click', switchNetwork);
    deployButton.addEventListener('click', deployContract);
    useCurrentAddressCheckbox.addEventListener('change', toggleAddressInputs);
    networkSelect.addEventListener('change', updateDeployButton);

    // 민팅 관련 이벤트 리스너
    document.getElementById('connectToken').addEventListener('click', connectTokenContract);
    document.getElementById('configureControllerBtn').addEventListener('click', configureController);
    document.getElementById('checkControllerBtn').addEventListener('click', checkControllerInfo);
    document.getElementById('checkMinterBtn').addEventListener('click', checkMinterInfo);
    document.getElementById('configureMinterBtn').addEventListener('click', configureMinter);
    document.getElementById('estimateGasBtn').addEventListener('click', estimateMintGas);
    document.getElementById('mintBtn').addEventListener('click', mintTokens);
    document.getElementById('updatePauserBtn').addEventListener('click', updatePauser);
    document.getElementById('updateBlacklisterBtn').addEventListener('click', updateBlacklister);
    document.getElementById('updateRescuerBtn').addEventListener('click', updateRescuer);
    document.getElementById('updateMasterMinterBtn').addEventListener('click', updateMasterMinter);
    document.getElementById('pauseBtn').addEventListener('click', pauseContract);
    document.getElementById('unpauseBtn').addEventListener('click', unpauseContract);
    document.getElementById('refreshBalanceBtn').addEventListener('click', refreshTokenInfo);
}

// Connect Wallet
async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        alert('MetaMask가 설치되어 있지 않습니다. https://metamask.io 에서 설치해주세요.');
        return;
    }

    try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        currentAccount = accounts[0];

        // Get chain ID
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        currentChainId = parseInt(chainId, 16);

        // Initialize ethers provider and signer
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();

        // Update UI
        updateWalletUI();
        networkSelect.disabled = false;
        switchNetworkBtn.disabled = false;

        // Listen for account changes
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', handleChainChanged);

        console.log('Wallet connected:', currentAccount);
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('지갑 연결에 실패했습니다: ' + error.message);
    }
}

// Update Wallet UI
function updateWalletUI() {
    connectedAddressSpan.textContent = currentAccount;

    const networkInfo = NETWORKS[currentChainId];
    currentNetworkSpan.textContent = networkInfo ? networkInfo.name : `Unknown (Chain ID: ${currentChainId})`;

    walletInfo.classList.remove('hidden');
    connectWalletBtn.textContent = '연결됨';
    connectWalletBtn.disabled = true;

    updateDeployButton();
}

// Handle Account Changes
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // User disconnected wallet
        resetWalletUI();
    } else {
        currentAccount = accounts[0];
        updateWalletUI();
    }
}

// Handle Chain Changes
function handleChainChanged(chainId) {
    // Reload page on chain change (recommended by MetaMask)
    window.location.reload();
}

// Reset Wallet UI
function resetWalletUI() {
    currentAccount = null;
    provider = null;
    signer = null;
    walletInfo.classList.add('hidden');
    connectWalletBtn.textContent = '지갑 연결';
    connectWalletBtn.disabled = false;
    networkSelect.disabled = true;
    switchNetworkBtn.disabled = true;
    deployButton.disabled = true;
}

// Switch Network
async function switchNetwork() {
    const selectedChainId = parseInt(networkSelect.value);

    if (!selectedChainId) {
        alert('네트워크를 선택해주세요.');
        return;
    }

    if (selectedChainId === currentChainId) {
        alert('이미 선택된 네트워크에 연결되어 있습니다.');
        return;
    }

    const networkConfig = NETWORKS[selectedChainId];

    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: networkConfig.chainId }],
        });
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [networkConfig],
                });
            } catch (addError) {
                console.error('Error adding network:', addError);
                alert('네트워크 추가에 실패했습니다: ' + addError.message);
            }
        } else {
            console.error('Error switching network:', switchError);
            alert('네트워크 전환에 실패했습니다: ' + switchError.message);
        }
    }
}

// Toggle Address Inputs
function toggleAddressInputs() {
    const isChecked = useCurrentAddressCheckbox.checked;
    // Proxy Owner는 제외 (배포자와 달라야 함)
    const addressInputs = [
        'ownerAddress',
        'masterMinterAddress',
        'pauserAddress',
        'blacklisterAddress',
        'rescuerAddress'
    ];

    addressInputs.forEach(id => {
        const input = document.getElementById(id);
        if (isChecked) {
            input.value = currentAccount;
            input.disabled = true;
        } else {
            input.disabled = false;
            if (input.value === currentAccount) {
                input.value = '';
            }
        }
    });

    // Proxy Owner는 항상 활성화 상태 유지 및 안내
    const proxyOwnerInput = document.getElementById('proxyOwnerAddress');
    proxyOwnerInput.disabled = false;
    if (isChecked && !proxyOwnerInput.value) {
        proxyOwnerInput.placeholder = '⚠️ 현재 주소와 다른 주소를 입력하세요';
    } else if (!isChecked) {
        proxyOwnerInput.placeholder = '0x...';
    }
}

// Update Deploy Button
function updateDeployButton() {
    const selectedChainId = parseInt(networkSelect.value);
    const isCorrectNetwork = selectedChainId === currentChainId;
    const isWalletConnected = currentAccount !== null;

    deployButton.disabled = !(isWalletConnected && isCorrectNetwork && selectedChainId);
}

// Add Status Message
function addStatusMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `status-message ${type}`;
    messageDiv.textContent = `${new Date().toLocaleTimeString()} - ${message}`;
    statusMessages.appendChild(messageDiv);
    statusMessages.scrollTop = statusMessages.scrollHeight;
}

// Deploy Contract
async function deployContract() {
    // Validate form
    const tokenName = document.getElementById('tokenName').value.trim();
    const tokenSymbol = document.getElementById('tokenSymbol').value.trim();
    const tokenCurrency = document.getElementById('tokenCurrency').value.trim();
    const ownerAddress = document.getElementById('ownerAddress').value.trim();
    const proxyOwnerAddress = document.getElementById('proxyOwnerAddress').value.trim();
    const masterMinterOwnerAddress = document.getElementById('masterMinterAddress').value.trim();
    const pauserAddress = document.getElementById('pauserAddress').value.trim();
    const blacklisterAddress = document.getElementById('blacklisterAddress').value.trim();
    const rescuerAddress = document.getElementById('rescuerAddress').value.trim();

    if (!tokenName || !tokenSymbol || !tokenCurrency) {
        alert('토큰 정보를 모두 입력해주세요.');
        return;
    }

    if (!ownerAddress || !proxyOwnerAddress || !masterMinterOwnerAddress ||
        !pauserAddress || !blacklisterAddress || !rescuerAddress) {
        alert('모든 역할 주소를 입력해주세요.');
        return;
    }

    // Validate addresses
    const addresses = [ownerAddress, proxyOwnerAddress, masterMinterOwnerAddress,
                       pauserAddress, blacklisterAddress, rescuerAddress];
    for (const addr of addresses) {
        if (!ethers.isAddress(addr)) {
            alert(`유효하지 않은 주소입니다: ${addr}`);
            return;
        }
    }

    // 중요: Proxy Owner는 배포자와 달라야 함
    if (proxyOwnerAddress.toLowerCase() === currentAccount.toLowerCase()) {
        alert('⚠️ 중요: Proxy Owner 주소는 현재 배포 주소와 달라야 합니다.\n\n' +
              '이유: Proxy의 Admin은 Implementation 함수를 호출할 수 없습니다.\n' +
              '배포 후 initialize를 호출하려면 Admin이 아닌 주소에서 호출해야 합니다.\n\n' +
              '해결 방법:\n' +
              '1. "모든 역할에 현재 연결된 주소 사용" 체크 해제\n' +
              '2. Proxy Owner에 다른 주소 입력 (별도 관리 지갑 권장)\n' +
              '3. 다른 역할들은 현재 주소를 사용해도 됩니다.');
        return;
    }

    // Check if contracts are loaded
    if (!CONTRACTS.FiatToken.bytecode || !CONTRACTS.AdminUpgradeabilityProxy.bytecode) {
        alert('컨트랙트가 로드되지 않았습니다. contracts.js 파일을 확인해주세요.\n\n' +
              '다음 단계를 수행하세요:\n' +
              '1. nvm install 22.18.0 && nvm use\n' +
              '2. yarn compile\n' +
              '3. node scripts/generate-frontend-contracts.js');
        return;
    }

    // Show deployment status
    deploymentStatus.classList.remove('hidden');
    deploymentResult.classList.add('hidden');
    statusMessages.innerHTML = '';
    deployButton.disabled = true;

    try {
        // Step 1: Deploy FiatToken Implementation
        addStatusMessage('FiatToken Implementation 배포 중...');
        const FiatTokenFactory = new ethers.ContractFactory(
            CONTRACTS.FiatToken.abi,
            CONTRACTS.FiatToken.bytecode,
            signer
        );
        const fiatTokenImpl = await FiatTokenFactory.deploy();
        await fiatTokenImpl.waitForDeployment();
        const fiatTokenImplAddress = await fiatTokenImpl.getAddress();
        addStatusMessage(`✓ FiatToken Implementation 배포 완료: ${fiatTokenImplAddress}`, 'success');

        // Step 2: Deploy AdminUpgradeabilityProxy
        addStatusMessage('Proxy 배포 중...');
        const ProxyFactory = new ethers.ContractFactory(
            CONTRACTS.AdminUpgradeabilityProxy.abi,
            CONTRACTS.AdminUpgradeabilityProxy.bytecode,
            signer
        );
        const proxy = await ProxyFactory.deploy(fiatTokenImplAddress);
        await proxy.waitForDeployment();
        const proxyAddress = await proxy.getAddress();
        addStatusMessage(`✓ Proxy 배포 완료: ${proxyAddress}`, 'success');

        // Step 3: Proxy Admin을 최종 proxyOwner 주소로 즉시 변경
        // 이렇게 하면 현재 배포자는 더 이상 admin이 아니므로 initialize 호출 가능
        addStatusMessage('Proxy Admin을 최종 소유자로 변경 중...');
        const proxyAsAdmin = new ethers.Contract(
            proxyAddress,
            CONTRACTS.AdminUpgradeabilityProxy.abi,
            signer
        );
        const changeAdminTx = await proxyAsAdmin.changeAdmin(proxyOwnerAddress);
        await changeAdminTx.wait();
        addStatusMessage(`✓ Proxy Admin 변경 완료: ${proxyOwnerAddress}`, 'success');

        // Step 4: Deploy MasterMinter
        addStatusMessage('MasterMinter 배포 중...');
        const MasterMinterFactory = new ethers.ContractFactory(
            CONTRACTS.MasterMinter.abi,
            CONTRACTS.MasterMinter.bytecode,
            signer
        );
        const masterMinter = await MasterMinterFactory.deploy(proxyAddress);
        await masterMinter.waitForDeployment();
        const masterMinterContractAddress = await masterMinter.getAddress();
        addStatusMessage(`✓ MasterMinter 배포 완료: ${masterMinterContractAddress}`, 'success');

        // Step 5: Initialize FiatToken through Proxy
        // 이제 현재 주소는 admin이 아니므로 initialize 호출 가능
        // masterMinter를 MasterMinter 컨트랙트 주소로 설정
        addStatusMessage('FiatToken 초기화 중...');
        const fiatToken = new ethers.Contract(
            proxyAddress,
            CONTRACTS.FiatToken.abi,
            signer
        );

        const initTx = await fiatToken.initialize(
            tokenName,
            tokenSymbol,
            tokenCurrency,
            6, // decimals (fixed)
            masterMinterContractAddress, // MasterMinter 컨트랙트 주소
            pauserAddress,
            blacklisterAddress,
            ownerAddress,
            rescuerAddress
        );
        await initTx.wait();
        addStatusMessage('✓ FiatToken 초기화 완료', 'success');

        // Step 6: Transfer MasterMinter ownership to the designated master minter owner
        addStatusMessage('MasterMinter 소유권 이전 중...');
        const transferOwnerTx = await masterMinter.transferOwnership(masterMinterOwnerAddress);
        await transferOwnerTx.wait();
        addStatusMessage(`✓ MasterMinter 소유권 이전 완료: ${masterMinterOwnerAddress}`, 'success');

        // Show results
        document.getElementById('implementationAddress').textContent = fiatTokenImplAddress;
        document.getElementById('proxyAddress').textContent = proxyAddress;
        document.getElementById('tokenAddress').textContent = proxyAddress;

        // MasterMinter 주소도 표시
        const masterMinterResultDiv = document.createElement('div');
        masterMinterResultDiv.className = 'result-item';
        masterMinterResultDiv.innerHTML = `<strong>MasterMinter 주소:</strong><code>${masterMinterContractAddress}</code>`;
        document.getElementById('deploymentResult').appendChild(masterMinterResultDiv);

        // 민팅 섹션에 토큰 주소와 MasterMinter 주소 자동 입력
        document.getElementById('mintTokenAddress').value = proxyAddress;
        if (document.getElementById('masterMinterContractAddress')) {
            document.getElementById('masterMinterContractAddress').value = masterMinterContractAddress;
        }

        deploymentResult.classList.remove('hidden');
        addStatusMessage('🎉 모든 배포가 완료되었습니다!', 'success');
        addStatusMessage('💡 아래 "토큰 관리" 섹션에서 토큰을 연결하여 Controller와 Minter를 관리할 수 있습니다.', 'info');

    } catch (error) {
        console.error('Deployment error:', error);
        addStatusMessage(`❌ 배포 실패: ${error.message}`, 'error');
        alert('배포에 실패했습니다. 콘솔과 상태 메시지를 확인해주세요.');
    } finally {
        deployButton.disabled = false;
    }
}

// ==================== 민팅 관련 함수들 ====================

// 토큰 & MasterMinter 연결
async function connectTokenContract() {
    const tokenAddress = document.getElementById('mintTokenAddress').value.trim();
    const masterMinterAddress = document.getElementById('masterMinterContractAddress').value.trim();

    if (!tokenAddress || !masterMinterAddress) {
        alert('토큰 주소와 MasterMinter 주소를 모두 입력해주세요.');
        return;
    }

    if (!ethers.isAddress(tokenAddress) || !ethers.isAddress(masterMinterAddress)) {
        alert('유효하지 않은 주소입니다.');
        return;
    }

    if (!signer) {
        alert('먼저 지갑을 연결해주세요.');
        return;
    }

    try {
        connectedToken = new ethers.Contract(
            tokenAddress,
            CONTRACTS.FiatToken.abi,
            signer
        );

        connectedMasterMinter = new ethers.Contract(
            masterMinterAddress,
            CONTRACTS.MasterMinter.abi,
            signer
        );

        // 토큰 정보 가져오기
        await refreshTokenInfo();

        // 버튼 활성화
        document.getElementById('configureControllerBtn').disabled = false;
        document.getElementById('checkControllerBtn').disabled = false;
        document.getElementById('checkMinterBtn').disabled = false;
        document.getElementById('configureMinterBtn').disabled = false;
        document.getElementById('estimateGasBtn').disabled = false;
        document.getElementById('mintBtn').disabled = false;
        document.getElementById('updatePauserBtn').disabled = false;
        document.getElementById('updateBlacklisterBtn').disabled = false;
        document.getElementById('updateRescuerBtn').disabled = false;
        document.getElementById('updateMasterMinterBtn').disabled = false;
        document.getElementById('pauseBtn').disabled = false;
        document.getElementById('unpauseBtn').disabled = false;
        document.getElementById('refreshBalanceBtn').disabled = false;

        alert('토큰과 MasterMinter가 성공적으로 연결되었습니다!');
    } catch (error) {
        console.error('Error connecting contracts:', error);
        alert('연결에 실패했습니다: ' + error.message);
    }
}

// 토큰 정보 새로고침
async function refreshTokenInfo() {
    if (!connectedToken || !connectedMasterMinter) {
        alert('먼저 토큰과 MasterMinter를 연결해주세요.');
        return;
    }

    try {
        const name = await connectedToken.name();
        const symbol = await connectedToken.symbol();
        const totalSupply = await connectedToken.totalSupply();
        const balance = await connectedToken.balanceOf(currentAccount);
        const decimals = await connectedToken.decimals();

        // 권한 주소들 가져오기
        const owner = await connectedToken.owner();
        const masterMinter = await connectedToken.masterMinter();
        const pauser = await connectedToken.pauser();
        const blacklister = await connectedToken.blacklister();
        const rescuer = await connectedToken.rescuer();

        // MasterMinter 정보 가져오기
        const masterMinterOwner = await connectedMasterMinter.owner();
        const controlledMinter = await connectedMasterMinter.getWorker(currentAccount);
        const isController = controlledMinter !== ethers.ZeroAddress;

        // 현재 주소의 Minter 여부 및 발행 가능량
        const isMinter = await connectedToken.isMinter(currentAccount);
        const minterAllowance = await connectedToken.minterAllowance(currentAccount);

        // 기본 토큰 정보 표시
        document.getElementById('tokenInfoName').textContent = name;
        document.getElementById('tokenInfoSymbol').textContent = symbol;
        document.getElementById('tokenInfoSupply').textContent = ethers.formatUnits(totalSupply, decimals) + ' ' + symbol;
        document.getElementById('tokenInfoBalance').textContent = ethers.formatUnits(balance, decimals) + ' ' + symbol;

        // 권한 주소 표시
        document.getElementById('tokenOwner').textContent = owner;
        document.getElementById('tokenMasterMinter').textContent = masterMinter;
        document.getElementById('tokenPauser').textContent = pauser;
        document.getElementById('tokenBlacklister').textContent = blacklister;
        document.getElementById('tokenRescuer').textContent = rescuer;

        // MasterMinter 및 Controller 정보 표시
        document.getElementById('masterMinterOwner').textContent = masterMinterOwner;
        document.getElementById('isController').textContent = isController ? '✅ 예' : '❌ 아니오';
        document.getElementById('controlledMinter').textContent = isController ? controlledMinter : 'N/A';

        // 현재 주소의 Minter 정보 표시
        document.getElementById('tokenIsMinter').textContent = isMinter ? '✅ 예' : '❌ 아니오';
        document.getElementById('tokenMinterAllowance').textContent = isMinter
            ? ethers.formatUnits(minterAllowance, decimals) + ' ' + symbol
            : '0 ' + symbol;

        document.getElementById('tokenInfo').classList.remove('hidden');
    } catch (error) {
        console.error('Error fetching token info:', error);
        alert('토큰 정보를 가져오는데 실패했습니다: ' + error.message);
    }
}

// Controller 설정
async function configureController() {
    if (!connectedMasterMinter) {
        alert('먼저 MasterMinter를 연결해주세요.');
        return;
    }

    const controllerAddress = document.getElementById('controllerAddress').value.trim();
    const workerAddress = document.getElementById('workerAddress').value.trim();

    if (!controllerAddress || !workerAddress) {
        alert('Controller 주소와 Minter 주소를 입력해주세요.');
        return;
    }

    if (!ethers.isAddress(controllerAddress) || !ethers.isAddress(workerAddress)) {
        alert('유효하지 않은 주소입니다.');
        return;
    }

    try {
        addMintStatusMessage('Controller 설정 중...');
        const tx = await connectedMasterMinter.configureController(controllerAddress, workerAddress);
        await tx.wait();

        addMintStatusMessage('✓ Controller 설정 완료!', 'success');
        addMintStatusMessage(`Controller: ${controllerAddress}`, 'success');
        addMintStatusMessage(`Minter: ${workerAddress}`, 'success');

        document.getElementById('mintStatus').classList.remove('hidden');

        // 정보 새로고침
        await refreshTokenInfo();
    } catch (error) {
        console.error('Error configuring controller:', error);
        addMintStatusMessage('❌ Controller 설정 실패: ' + error.message, 'error');
        alert('Controller 설정에 실패했습니다. MasterMinter Owner 권한이 있는지 확인해주세요.');
    }
}

// Controller → Minter 조회
async function checkControllerInfo() {
    if (!connectedMasterMinter || !connectedToken) {
        alert('먼저 토큰과 MasterMinter를 연결해주세요.');
        return;
    }

    const checkAddress = document.getElementById('checkControllerAddress').value.trim();

    if (!checkAddress) {
        alert('조회할 Controller 주소를 입력해주세요.');
        return;
    }

    if (!ethers.isAddress(checkAddress)) {
        alert('유효하지 않은 주소입니다.');
        return;
    }

    try {
        const minter = await connectedMasterMinter.getWorker(checkAddress);
        const decimals = await connectedToken.decimals();
        const symbol = await connectedToken.symbol();

        if (minter === ethers.ZeroAddress) {
            document.getElementById('checkControllerMinter').textContent = '❌ Controller가 아닙니다';
            document.getElementById('checkControllerMinterAllowance').textContent = 'N/A';
        } else {
            const minterAllowance = await connectedToken.minterAllowance(minter);
            document.getElementById('checkControllerMinter').textContent = minter;
            document.getElementById('checkControllerMinterAllowance').textContent =
                ethers.formatUnits(minterAllowance, decimals) + ' ' + symbol;
        }

        document.getElementById('controllerCheckResult').classList.remove('hidden');
    } catch (error) {
        console.error('Error checking controller info:', error);
        alert('Controller 정보 조회에 실패했습니다: ' + error.message);
    }
}

// Minter 설정 (Controller 기반)
async function configureMinter() {
    if (!connectedMasterMinter) {
        alert('먼저 MasterMinter를 연결해주세요.');
        return;
    }

    const allowance = document.getElementById('minterAllowance').value.trim();

    if (!allowance) {
        alert('발행 한도를 입력해주세요.');
        return;
    }

    try {
        // 현재 주소가 관리하는 Minter 확인
        const minter = await connectedMasterMinter.getWorker(currentAccount);

        if (minter === ethers.ZeroAddress) {
            alert('현재 주소는 Controller가 아닙니다. 먼저 Controller로 설정되어야 합니다.');
            return;
        }

        const allowanceWei = ethers.parseUnits(allowance, 6);

        addMintStatusMessage('Minter 설정 중...');
        const tx = await connectedMasterMinter.configureMinter(allowanceWei);
        await tx.wait();

        addMintStatusMessage('✓ Minter 설정 완료!', 'success');
        addMintStatusMessage(`Minter: ${minter}`, 'success');
        addMintStatusMessage('발행 한도: ' + allowance, 'success');

        document.getElementById('mintStatus').classList.remove('hidden');

        // 정보 새로고침
        await refreshTokenInfo();
    } catch (error) {
        console.error('Error configuring minter:', error);
        addMintStatusMessage('❌ Minter 설정 실패: ' + error.message, 'error');
        alert('Minter 설정에 실패했습니다. Controller 권한이 있는지 확인해주세요.');
    }
}

// 토큰 발행
async function mintTokens() {
    if (!connectedToken) {
        alert('먼저 토큰을 연결해주세요.');
        return;
    }

    const toAddress = document.getElementById('mintToAddress').value.trim();
    const amount = document.getElementById('mintAmount').value.trim();

    if (!toAddress || !amount) {
        alert('받을 주소와 발행량을 입력해주세요.');
        return;
    }

    if (!ethers.isAddress(toAddress)) {
        alert('유효하지 않은 주소입니다.');
        return;
    }

    try {
        const amountWei = ethers.parseUnits(amount, 6);

        addMintStatusMessage('토큰 발행 중...');
        const tx = await connectedToken.mint(toAddress, amountWei);
        await tx.wait();

        addMintStatusMessage('✓ 토큰 발행 완료!', 'success');
        addMintStatusMessage('받는 주소: ' + toAddress, 'success');
        addMintStatusMessage('발행량: ' + amount, 'success');

        document.getElementById('mintStatus').classList.remove('hidden');

        // 잔액 새로고침
        await refreshTokenInfo();
    } catch (error) {
        console.error('Error minting tokens:', error);
        addMintStatusMessage('❌ 토큰 발행 실패: ' + error.message, 'error');
        alert('토큰 발행에 실패했습니다. Minter 권한과 발행 한도를 확인해주세요.');
    }
}

// 일시 중지
async function pauseContract() {
    if (!connectedToken) {
        alert('먼저 토큰을 연결해주세요.');
        return;
    }

    try {
        addMintStatusMessage('컨트랙트 일시 중지 중...');
        const tx = await connectedToken.pause();
        await tx.wait();

        addMintStatusMessage('✓ 컨트랙트가 일시 중지되었습니다.', 'success');
        document.getElementById('mintStatus').classList.remove('hidden');
    } catch (error) {
        console.error('Error pausing contract:', error);
        addMintStatusMessage('❌ 일시 중지 실패: ' + error.message, 'error');
        alert('컨트랙트 일시 중지에 실패했습니다. Pauser 권한이 있는지 확인해주세요.');
    }
}

// 재개
async function unpauseContract() {
    if (!connectedToken) {
        alert('먼저 토큰을 연결해주세요.');
        return;
    }

    try {
        addMintStatusMessage('컨트랙트 재개 중...');
        const tx = await connectedToken.unpause();
        await tx.wait();

        addMintStatusMessage('✓ 컨트랙트가 재개되었습니다.', 'success');
        document.getElementById('mintStatus').classList.remove('hidden');
    } catch (error) {
        console.error('Error unpausing contract:', error);
        addMintStatusMessage('❌ 재개 실패: ' + error.message, 'error');
        alert('컨트랙트 재개에 실패했습니다. Pauser 권한이 있는지 확인해주세요.');
    }
}

// ==================== 역할 주소 변경 함수들 ====================

// 역할 업데이트 상태 메시지 추가
function addRoleUpdateMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `status-message ${type}`;
    messageDiv.textContent = `${new Date().toLocaleTimeString()} - ${message}`;
    const container = document.getElementById('roleUpdateMessages');
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

// Pauser 변경
async function updatePauser() {
    if (!connectedToken) {
        alert('먼저 토큰을 연결해주세요.');
        return;
    }

    const newPauserAddress = document.getElementById('newPauserAddress').value.trim();

    if (!newPauserAddress) {
        alert('새 Pauser 주소를 입력해주세요.');
        return;
    }

    if (!ethers.isAddress(newPauserAddress)) {
        alert('유효하지 않은 주소입니다.');
        return;
    }

    try {
        document.getElementById('roleUpdateStatus').classList.remove('hidden');
        addRoleUpdateMessage('Pauser 변경 중...');

        const tx = await connectedToken.updatePauser(newPauserAddress);
        await tx.wait();

        addRoleUpdateMessage(`✓ Pauser 변경 완료: ${newPauserAddress}`, 'success');

        // 토큰 정보 새로고침
        await refreshTokenInfo();

        // 입력 필드 초기화
        document.getElementById('newPauserAddress').value = '';
    } catch (error) {
        console.error('Error updating pauser:', error);
        addRoleUpdateMessage('❌ Pauser 변경 실패: ' + error.message, 'error');
        alert('Pauser 변경에 실패했습니다. Owner 권한이 있는지 확인해주세요.');
    }
}

// Blacklister 변경
async function updateBlacklister() {
    if (!connectedToken) {
        alert('먼저 토큰을 연결해주세요.');
        return;
    }

    const newBlacklisterAddress = document.getElementById('newBlacklisterAddress').value.trim();

    if (!newBlacklisterAddress) {
        alert('새 Blacklister 주소를 입력해주세요.');
        return;
    }

    if (!ethers.isAddress(newBlacklisterAddress)) {
        alert('유효하지 않은 주소입니다.');
        return;
    }

    try {
        document.getElementById('roleUpdateStatus').classList.remove('hidden');
        addRoleUpdateMessage('Blacklister 변경 중...');

        const tx = await connectedToken.updateBlacklister(newBlacklisterAddress);
        await tx.wait();

        addRoleUpdateMessage(`✓ Blacklister 변경 완료: ${newBlacklisterAddress}`, 'success');

        // 토큰 정보 새로고침
        await refreshTokenInfo();

        // 입력 필드 초기화
        document.getElementById('newBlacklisterAddress').value = '';
    } catch (error) {
        console.error('Error updating blacklister:', error);
        addRoleUpdateMessage('❌ Blacklister 변경 실패: ' + error.message, 'error');
        alert('Blacklister 변경에 실패했습니다. Owner 권한이 있는지 확인해주세요.');
    }
}

// Rescuer 변경
async function updateRescuer() {
    if (!connectedToken) {
        alert('먼저 토큰을 연결해주세요.');
        return;
    }

    const newRescuerAddress = document.getElementById('newRescuerAddress').value.trim();

    if (!newRescuerAddress) {
        alert('새 Rescuer 주소를 입력해주세요.');
        return;
    }

    if (!ethers.isAddress(newRescuerAddress)) {
        alert('유효하지 않은 주소입니다.');
        return;
    }

    try {
        document.getElementById('roleUpdateStatus').classList.remove('hidden');
        addRoleUpdateMessage('Rescuer 변경 중...');

        const tx = await connectedToken.updateRescuer(newRescuerAddress);
        await tx.wait();

        addRoleUpdateMessage(`✓ Rescuer 변경 완료: ${newRescuerAddress}`, 'success');

        // 토큰 정보 새로고침
        await refreshTokenInfo();

        // 입력 필드 초기화
        document.getElementById('newRescuerAddress').value = '';
    } catch (error) {
        console.error('Error updating rescuer:', error);
        addRoleUpdateMessage('❌ Rescuer 변경 실패: ' + error.message, 'error');
        alert('Rescuer 변경에 실패했습니다. Owner 권한이 있는지 확인해주세요.');
    }
}

// Master Minter 변경
async function updateMasterMinter() {
    if (!connectedToken) {
        alert('먼저 토큰을 연결해주세요.');
        return;
    }

    const newMasterMinterAddress = document.getElementById('newMasterMinterAddress').value.trim();

    if (!newMasterMinterAddress) {
        alert('새 Master Minter 주소를 입력해주세요.');
        return;
    }

    if (!ethers.isAddress(newMasterMinterAddress)) {
        alert('유효하지 않은 주소입니다.');
        return;
    }

    if (!confirm('⚠️ 경고: Master Minter를 변경하면 기존의 모든 Controller-Minter 구조가 새 Master Minter로 이전되어야 합니다.\n계속하시겠습니까?')) {
        return;
    }

    try {
        document.getElementById('roleUpdateStatus').classList.remove('hidden');
        addRoleUpdateMessage('Master Minter 변경 중...');

        const tx = await connectedToken.updateMasterMinter(newMasterMinterAddress);
        await tx.wait();

        addRoleUpdateMessage(`✓ Master Minter 변경 완료: ${newMasterMinterAddress}`, 'success');
        addRoleUpdateMessage('⚠️ 주의: MasterMinter 컨트랙트를 새로 배포하고 연결해야 합니다.', 'info');

        // 토큰 정보 새로고침
        await refreshTokenInfo();

        // 입력 필드 초기화
        document.getElementById('newMasterMinterAddress').value = '';
    } catch (error) {
        console.error('Error updating master minter:', error);
        addRoleUpdateMessage('❌ Master Minter 변경 실패: ' + error.message, 'error');
        alert('Master Minter 변경에 실패했습니다. Owner 권한이 있는지 확인해주세요.');
    }
}

// 민팅 상태 메시지 추가
function addMintStatusMessage(message, type) {
    if (type === void 0) { type = 'info'; }
    const messageDiv = document.createElement('div');
    messageDiv.className = 'status-message ' + type;
    const timeStr = new Date().toLocaleTimeString();
    messageDiv.textContent = timeStr + ' - ' + message;
    const container = document.getElementById('mintStatusMessages');
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

// Minter 정보 조회
async function checkMinterInfo() {
    if (!connectedToken) {
        alert('먼저 토큰을 연결해주세요.');
        return;
    }

    const checkAddress = document.getElementById('checkMinterAddress').value.trim();

    if (!checkAddress) {
        alert('조회할 주소를 입력해주세요.');
        return;
    }

    if (!ethers.isAddress(checkAddress)) {
        alert('유효하지 않은 주소입니다.');
        return;
    }

    try {
        const isMinter = await connectedToken.isMinter(checkAddress);
        const minterAllowance = await connectedToken.minterAllowance(checkAddress);
        const decimals = await connectedToken.decimals();
        const symbol = await connectedToken.symbol();

        document.getElementById('checkIsMinter').textContent = isMinter ? '✅ 예 (Minter입니다)' : '❌ 아니오 (Minter가 아닙니다)';
        document.getElementById('checkMinterAllowance').textContent = ethers.formatUnits(minterAllowance, decimals) + ' ' + symbol;

        document.getElementById('minterCheckResult').classList.remove('hidden');
    } catch (error) {
        console.error('Error checking minter info:', error);
        alert('Minter 정보 조회에 실패했습니다: ' + error.message);
    }
}

// 민팅 가스 추정 및 사전 검증
async function estimateMintGas() {
    if (!connectedToken) {
        alert('먼저 토큰을 연결해주세요.');
        return;
    }

    const minterAddress = document.getElementById('testMinterAddress').value.trim();
    const toAddress = document.getElementById('testMintToAddress').value.trim();
    const amount = document.getElementById('testMintAmount').value.trim();

    if (!minterAddress || !toAddress || !amount) {
        alert('모든 필드를 입력해주세요.');
        return;
    }

    if (!ethers.isAddress(minterAddress) || !ethers.isAddress(toAddress)) {
        alert('유효하지 않은 주소입니다.');
        return;
    }

    try {
        const amountWei = ethers.parseUnits(amount, 6);
        const decimals = await connectedToken.decimals();
        const symbol = await connectedToken.symbol();

        // 1. 먼저 Minter 상태 확인
        console.log('🔍 Minter 상태 확인 중...');
        const isMinter = await connectedToken.isMinter(minterAddress);
        const minterAllowance = await connectedToken.minterAllowance(minterAddress);
        const paused = await connectedToken.paused();
        const isBlacklisted = await connectedToken.isBlacklisted(minterAddress);
        const isToBlacklisted = await connectedToken.isBlacklisted(toAddress);

        // Proxy Admin 확인 (storage slot을 직접 읽기)
        // AdminUpgradeabilityProxy의 admin은 slot 0x10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b에 저장됨
        const tokenAddress = await connectedToken.getAddress();
        const adminSlot = '0x10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b';
        const adminData = await provider.getStorage(tokenAddress, adminSlot);
        const proxyAdmin = ethers.getAddress('0x' + adminData.slice(-40));

        console.log('Minter 정보:', {
            address: minterAddress,
            isMinter,
            allowance: ethers.formatUnits(minterAllowance, decimals),
            requestAmount: amount,
            paused,
            isBlacklisted,
            isToBlacklisted,
            proxyAdmin,
            isProxyAdmin: minterAddress.toLowerCase() === proxyAdmin.toLowerCase()
        });

        // 2. 사전 검증
        let validationErrors = [];

        // 가장 중요: Proxy Admin 체크
        if (minterAddress.toLowerCase() === proxyAdmin.toLowerCase()) {
            validationErrors.push(`❌ 치명적: 이 주소는 Proxy Admin입니다!`);
            validationErrors.push(`   → Proxy Admin은 Implementation 함수를 호출할 수 없습니다 (FallbackCalledByAdmin)`);
            validationErrors.push(`   → 다른 주소를 Minter로 사용하거나, Proxy Admin을 변경해야 합니다.`);
            validationErrors.push(`   → 현재 Proxy Admin: ${proxyAdmin}`);
        }

        if (!isMinter) {
            validationErrors.push('❌ 해당 주소는 Minter가 아닙니다.');
        }

        if (amountWei > minterAllowance) {
            validationErrors.push(`❌ 발행 한도 초과: 요청량 ${amount} > 허용량 ${ethers.formatUnits(minterAllowance, decimals)}`);
        }

        if (paused) {
            validationErrors.push('❌ 컨트랙트가 일시 중지 상태입니다.');
        }

        if (isBlacklisted) {
            validationErrors.push(`❌ Minter 주소(${minterAddress})가 블랙리스트에 등록되어 있습니다.`);
        }

        if (isToBlacklisted) {
            validationErrors.push(`❌ 받을 주소(${toAddress})가 블랙리스트에 등록되어 있습니다.`);
        }

        // 3. estimateGas 시도 (Minter 주소로 시뮬레이션)
        console.log('⛽ 가스 추정 중...');

        // Contract를 provider와 연결 (signer 없이)
        // 그러면 from 옵션을 자유롭게 지정 가능
        const tokenWithProvider = new ethers.Contract(
            tokenAddress,
            CONTRACTS.FiatToken.abi,
            provider // signer 대신 provider 사용
        );

        try {
            // 정적 호출로 mint 시뮬레이션 (실제 트랜잭션 없이 결과 예측)
            // from 옵션으로 Minter 주소에서 호출하는 것처럼 시뮬레이션
            await tokenWithProvider.mint.staticCall(toAddress, amountWei, { from: minterAddress });

            // 가스 추정 (from 옵션 지정)
            const gasEstimate = await tokenWithProvider.mint.estimateGas(toAddress, amountWei, { from: minterAddress });
            const feeData = await provider.getFeeData();
            const gasCost = gasEstimate * feeData.gasPrice;

            // 성공
            document.getElementById('estimateStatus').innerHTML = '<span style="color: green;">✅ 민팅 가능</span>';
            document.getElementById('estimateGas').textContent = gasEstimate.toString() + ' gas';
            document.getElementById('estimateCost').textContent = ethers.formatEther(gasCost) + ' ' + NETWORKS[currentChainId].nativeCurrency.symbol;
            document.getElementById('estimateError').style.display = 'none';

            console.log('✅ 가스 추정 성공:', {
                minterAddress,
                gasEstimate: gasEstimate.toString(),
                gasCost: ethers.formatEther(gasCost)
            });

        } catch (estimateError) {
            // 가스 추정 실패 - 구체적인 에러 분석
            console.error('❌ 가스 추정 실패:', estimateError);

            let errorMessage = estimateError.message;
            let errorReason = 'Unknown error';

            // 에러 데이터 파싱 (0x245308bb = FallbackCalledByAdmin)
            if (estimateError.data === '0x245308bb') {
                errorReason = 'FallbackCalledByAdmin: Proxy Admin은 Implementation 함수를 호출할 수 없습니다';
                validationErrors.push('❌ ' + errorReason);
            } else if (estimateError.data) {
                errorReason = estimateError.data.message || estimateError.data;
            } else if (estimateError.reason) {
                errorReason = estimateError.reason;
            } else if (estimateError.message.includes('NotMinter')) {
                errorReason = 'NotMinter: 해당 주소는 Minter가 아닙니다';
            } else if (estimateError.message.includes('MintAllowanceExceeded')) {
                errorReason = 'MintAllowanceExceeded: 발행 한도를 초과했습니다';
            } else if (estimateError.message.includes('Pausable: paused')) {
                errorReason = 'Pausable: paused - 컨트랙트가 일시 중지되었습니다';
            } else if (estimateError.message.includes('Blacklistable: account is blacklisted')) {
                errorReason = 'Blacklistable: account is blacklisted - 블랙리스트에 등록된 주소입니다';
            }

            if (!validationErrors.some(e => e.includes('FallbackCalledByAdmin'))) {
                validationErrors.push('❌ 가스 추정 실패: ' + errorReason);
            }

            document.getElementById('estimateStatus').innerHTML = '<span style="color: red;">❌ 민팅 불가</span>';
            document.getElementById('estimateGas').textContent = 'N/A';
            document.getElementById('estimateCost').textContent = 'N/A';
            document.getElementById('estimateError').style.display = 'block';

            // BigInt를 문자열로 변환하는 replacer 함수
            const replacer = (key, value) => {
                if (typeof value === 'bigint') {
                    return value.toString() + 'n';
                }
                return value;
            };

            document.getElementById('estimateErrorDetails').textContent =
                'Error: ' + errorMessage + '\n\n' +
                'Reason: ' + errorReason + '\n\n' +
                'Full Error:\n' + JSON.stringify(estimateError, replacer, 2);
        }

        // 검증 에러가 있으면 표시
        if (validationErrors.length > 0) {
            document.getElementById('estimateStatus').innerHTML = '<span style="color: red;">❌ 민팅 불가</span>';
            document.getElementById('estimateError').style.display = 'block';
            document.getElementById('estimateErrorDetails').textContent = validationErrors.join('\n');
        }

        document.getElementById('estimateResult').classList.remove('hidden');

    } catch (error) {
        console.error('Error in estimateMintGas:', error);
        alert('가스 추정에 실패했습니다: ' + error.message);

        document.getElementById('estimateStatus').innerHTML = '<span style="color: red;">❌ 에러 발생</span>';
        document.getElementById('estimateGas').textContent = 'N/A';
        document.getElementById('estimateCost').textContent = 'N/A';
        document.getElementById('estimateError').style.display = 'block';

        // BigInt를 문자열로 변환하는 replacer 함수
        const replacer = (key, value) => {
            if (typeof value === 'bigint') {
                return value.toString() + 'n';
            }
            return value;
        };

        document.getElementById('estimateErrorDetails').textContent = error.message + '\n\n' + JSON.stringify(error, replacer, 2);
        document.getElementById('estimateResult').classList.remove('hidden');
    }
}
