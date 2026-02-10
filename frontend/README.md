# FiatToken Deployer - 프론트엔드 배포 도구

이 프론트엔드 애플리케이션을 사용하면 웹 브라우저에서 직접 FiatToken을 EVM 호환 블록체인에 배포할 수 있습니다.

## 지원되는 네트워크

- **Kaia Testnet (Kairos)** - Chain ID: 1001
- **Kaia Mainnet (Cypress)** - Chain ID: 8217
- **BSC Testnet** - Chain ID: 97
- **BSC Mainnet** - Chain ID: 56

## 사전 요구사항

1. **MetaMask 설치**: [https://metamask.io](https://metamask.io)에서 브라우저 확장 프로그램 설치
2. **컨트랙트 컴파일**: 프론트엔드를 사용하기 전에 컨트랙트를 컴파일해야 합니다

## 설정 방법

### 1단계: 올바른 Node.js 버전 설치

```bash
# nvm이 설치되어 있다면
nvm install 22.18.0
nvm use

# 또는 직접 Node.js 22.18.0 설치
```

### 2단계: 의존성 설치

```bash
yarn install
```

### 3단계: 컨트랙트 컴파일 및 프론트엔드 준비

```bash
# 컨트랙트 컴파일 및 프론트엔드용 파일 생성 (한 번에)
yarn prepare-frontend

# 또는 단계별로
yarn compile
yarn generate-frontend
```

이 명령은 `frontend/contracts.js` 파일을 생성하며, 이 파일에는 배포에 필요한 ABI와 bytecode가 포함됩니다.

## 사용 방법

### 로컬에서 실행

프론트엔드는 순수 HTML/CSS/JavaScript로 작성되어 별도의 빌드 과정이 필요 없습니다.

#### 방법 1: 로컬 웹 서버 사용 (권장)

```bash
# Python이 설치되어 있다면
cd frontend
python3 -m http.server 8000

# Node.js http-server 사용
npx http-server frontend -p 8000
```

브라우저에서 `http://localhost:8000` 접속

#### 방법 2: 직접 HTML 파일 열기

`frontend/index.html` 파일을 브라우저에서 직접 열 수 있습니다. (일부 브라우저에서는 CORS 정책으로 인해 제한될 수 있음)

### 배포 프로세스

1. **지갑 연결**
   - "지갑 연결" 버튼 클릭
   - MetaMask에서 연결 승인

2. **네트워크 선택**
   - 드롭다운에서 배포할 네트워크 선택
   - "네트워크 전환" 버튼으로 MetaMask 네트워크 전환

3. **토큰 정보 입력**
   - 토큰 이름 (예: USD Coin)
   - 토큰 심볼 (예: USDC)
   - 통화 (예: USD)
   - Decimals는 6으로 고정

4. **역할 주소 설정**
   - "모든 역할에 현재 연결된 주소 사용" 체크박스를 선택하면 모든 역할이 현재 주소로 설정됩니다
   - 또는 각 역할별로 다른 주소를 수동으로 입력할 수 있습니다

5. **배포**
   - "FiatToken 배포하기" 버튼 클릭
   - MetaMask에서 트랜잭션 승인
   - 배포 완료 후 컨트랙트 주소 확인

## 역할 설명

- **Owner**: pauser, blacklister, masterMinter 주소를 변경할 수 있는 권한
- **Proxy Owner**: 컨트랙트를 업그레이드할 수 있는 권한
- **Master Minter**: minter를 추가/제거하고 발행 한도를 설정하는 권한
- **Pauser**: 컨트랙트를 일시 중지/재개하는 권한
- **Blacklister**: 주소를 블랙리스트에 추가/제거하는 권한
- **Rescuer**: 잘못 전송된 토큰을 복구하는 권한

## 배포 결과

배포가 완료되면 다음 정보가 표시됩니다:

- **Implementation 주소**: FiatToken 구현 컨트랙트 주소
- **Proxy 주소**: AdminUpgradeabilityProxy 주소
- **토큰 주소**: 실제 사용할 토큰 주소 (Proxy 주소와 동일)

⚠️ **중요**: 토큰과 상호작용할 때는 **Proxy 주소**(토큰 주소)를 사용해야 합니다.

## 주의사항

- 메인넷 배포 전에 반드시 테스트넷에서 먼저 테스트하세요
- 역할 주소는 신중하게 설정하세요 (특히 Proxy Owner)
- Proxy Owner를 잃어버리면 컨트랙트를 업그레이드할 수 없습니다
- 배포된 컨트랙트 주소는 안전하게 보관하세요

## 트러블슈팅

### "컨트랙트가 로드되지 않았습니다" 오류

```bash
yarn prepare-frontend
```

실행하여 컨트랙트를 컴파일하고 프론트엔드 파일을 생성하세요.

### MetaMask 연결 실패

- MetaMask가 설치되어 있는지 확인
- 브라우저 확장 프로그램이 활성화되어 있는지 확인
- 페이지를 새로고침 후 다시 시도

### 네트워크 전환 실패

- MetaMask에 해당 네트워크가 추가되지 않은 경우 자동으로 추가 요청이 표시됩니다
- 수동으로 네트워크를 추가하려면 MetaMask 설정에서 추가하세요

## 파일 구조

```
frontend/
├── index.html          # 메인 HTML 페이지
├── style.css           # 스타일시트
├── app.js              # 애플리케이션 로직
├── contracts.js        # 컴파일된 컨트랙트 ABI와 bytecode (자동 생성)
└── README.md           # 이 문서
```

## 라이선스

Apache-2.0
