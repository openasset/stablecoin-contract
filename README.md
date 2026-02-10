# FiatToken 스테이블코인 스마트 컨트랙트

EVM 호환 블록체인에서 사용할 수 있는 스테이블코인 스마트 컨트랙트 및 배포 도구입니다.

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [주요 기능](#주요-기능)
- [개발 환경 설정](#개발-환경-설정)
- [개발](#개발)
- [프론트엔드 배포 도구](#프론트엔드-배포-도구)
- [아키텍처](#아키텍처)
- [역할 및 권한](#역할-및-권한)
- [보안 고려사항](#보안-고려사항)

---

## 프로젝트 소개

이 프로젝트는 Circle의 USDC를 기반으로 한 스테이블코인 스마트 컨트랙트입니다. OpenZeppelin의 Proxy Upgrade Pattern을 사용하여 업그레이드 가능한 구조로 설계되었습니다.

### 지원 네트워크

- Kaia Testnet (Kairos)
- Kaia Mainnet (Cypress)
- BSC Testnet
- BSC Mainnet
- 기타 EVM 호환 블록체인

---

## 주요 기능

### 1. ERC20 호환
표준 ERC20 토큰 인터페이스를 구현합니다.

### 2. 업그레이드 가능 (Upgradable)
- Proxy Pattern을 사용하여 컨트랙트 로직 업그레이드 가능
- Implementation 교체를 통한 기능 추가/수정 가능

### 3. 일시 중지 (Pausable)
- 심각한 버그나 보안 문제 발생 시 전체 컨트랙트 일시 중지 가능
- 일시 중지 중에는 모든 토큰 전송 불가

### 4. 블랙리스트 (Blacklist)
- 특정 주소를 블랙리스트에 등록하여 토큰 전송/수신 차단
- 규제 준수 및 사기 방지를 위한 기능

### 5. 민팅/소각 (Minting/Burning)
- Controller-Minter 구조를 통한 토큰 발행
- 각 Minter별 발행 한도 설정 가능
- 여러 Minter 동시 운영 가능

### 6. 역할 기반 접근 제어
- Owner, Proxy Owner, Master Minter, Pauser, Blacklister, Rescuer 등 세분화된 권한 관리

---

## 개발 환경 설정

### 필수 요구사항

- **Node.js**: 22.18.0
- **Yarn**: 4.0.0
- **Foundry**: f625d0f

### 설치 방법

```bash
# 1. 저장소 클론
git clone <repository-url>
cd stablecoin-contracts

# 2. Node 버전 설정
nvm install 22.18.0
nvm use

# 3. 의존성 설치
yarn install
```

---

## 개발

### 컨트랙트 컴파일

```bash
# 컨트랙트 컴파일 및 TypeScript 타입 생성
yarn compile

# 재컴파일 없이 타입만 생성
yarn hardhat typechain
```

### 테스트

```bash
# 모든 테스트 실행
yarn test

# 특정 파일 테스트
yarn test path/to/test/file.ts

# 테스트 커버리지 확인
yarn coverage
```

### 코드 품질 검사

```bash
# 전체 정적 검사
yarn static-check

# 개별 검사
yarn typecheck      # TypeScript 타입 체크
yarn lint          # JavaScript/TypeScript 린트
yarn solhint       # Solidity 린트

# 자동 포맷팅
yarn fmt
```

### 컨트랙트 크기 확인

```bash
yarn contract-size
```

---

## 프론트엔드 배포 도구

웹 브라우저를 통해 FiatToken을 쉽게 배포하고 관리할 수 있는 프론트엔드 도구를 제공합니다.

### 프론트엔드 준비

```bash
# 1. 컨트랙트 컴파일
yarn compile

# 2. 프론트엔드용 컨트랙트 ABI 및 바이트코드 생성
yarn generate-frontend

# 또는 한 번에 실행
yarn prepare-frontend
```

### 프론트엔드 실행

```bash
# 로컬 서버 시작 (포트 8000)
yarn serve-frontend

# 브라우저에서 접속
# http://localhost:8000
```

### 프론트엔드 기능

#### 1. 배포 기능
- **지갑 연결**: MetaMask를 통한 지갑 연결
- **네트워크 선택**: Kaia, BSC Testnet/Mainnet 선택
- **토큰 정보 입력**: 이름, 심볼, 통화 설정 (Decimals는 6으로 고정)
- **역할 주소 설정**: Owner, Proxy Owner, Master Minter, Pauser, Blacklister, Rescuer 설정
- **자동 배포**:
  1. FiatToken Implementation 배포
  2. AdminUpgradeabilityProxy 배포
  3. Proxy Admin 변경
  4. MasterMinter 컨트랙트 배포
  5. FiatToken 초기화
  6. MasterMinter 소유권 이전

#### 2. 토큰 관리 기능

**토큰 연결**
- 배포된 토큰 및 MasterMinter 컨트랙트 연결
- 현재 주소의 권한 및 역할 확인

**Controller 관리** (MasterMinter Owner 권한 필요)
- Controller와 Minter 연결 설정
- Controller별 Minter 할당

**Controller → Minter 조회**
- 특정 Controller가 관리하는 Minter 조회
- Minter의 발행 가능량 확인

**Minter 조회**
- 특정 주소의 Minter 여부 확인
- 발행 가능량 확인

**Minter 설정** (Controller 권한 필요)
- Controller로 설정된 주소가 자신이 관리하는 Minter의 발행 한도 설정

**민팅 테스트 (디버깅)**
- 특정 Minter 주소로 민팅 가능 여부 사전 검증
- Gas 추정 및 예상 비용 계산
- 실패 시 구체적인 에러 원인 분석:
  - Proxy Admin 여부 확인
  - Minter 권한 확인
  - 발행 한도 확인
  - 일시 중지 상태 확인
  - 블랙리스트 상태 확인

**토큰 발행** (Minter 권한 필요)
- Minter로 설정된 주소만 토큰 발행 가능
- 설정된 발행 한도 내에서만 발행

**역할 주소 변경** (Owner 권한 필요)
- Pauser 주소 변경
- Blacklister 주소 변경
- Rescuer 주소 변경
- Master Minter 주소 변경

**기타 관리 기능**
- 컨트랙트 일시 중지/재개
- 블랙리스트 추가
- 잔액 새로고침

---

## 아키텍처

### Proxy Upgrade Pattern

```
사용자
  ↓
AdminUpgradeabilityProxy (불변)
  ↓ delegatecall
FiatToken Implementation (업그레이드 가능)
```

**특징:**
- Proxy 컨트랙트는 배포 후 주소 변경 불가
- Implementation 교체를 통한 로직 업그레이드
- Storage는 Proxy에 저장되어 업그레이드 시에도 유지

### Controller-Minter 구조

```
MasterMinter Owner
  ↓
MasterMinter 컨트랙트
  ↓
Controllers (여러 개)
  ↓
Minters (각 Controller당 1개, 중복 가능)
  ↓
토큰 발행
```

**특징:**
- 하나의 Controller는 정확히 하나의 Minter 관리
- 여러 Controller가 동일한 Minter를 관리 가능
- Controller를 통한 발행 한도 동적 조정

### 컨트랙트 구성

```
contracts/
├── fiat/
│   ├── FiatToken.sol              # 메인 토큰 로직
│   ├── Pausable.sol               # 일시 중지 기능
│   ├── Blacklistable.sol          # 블랙리스트 기능
│   ├── Rescuable.sol              # 토큰 복구 기능
│   └── Ownable.sol                # 소유권 관리
├── minting/
│   ├── MasterMinter.sol           # Controller 관리
│   ├── MintController.sol         # Minter 관리
│   └── Controller.sol             # Controller-Worker 구조
└── upgradeability/
    ├── AdminUpgradeabilityProxy.sol  # Proxy 컨트랙트
    └── UpgradeabilityProxy.sol       # Base Proxy
```

---

## 역할 및 권한

### 1. Owner
**권한:**
- Pauser 주소 변경 (`updatePauser`)
- Blacklister 주소 변경 (`updateBlacklister`)
- Rescuer 주소 변경 (`updateRescuer`)
- Master Minter 주소 변경 (`updateMasterMinter`)
- Owner 주소 변경 (`transferOwnership`)

**제한:**
- Proxy Owner는 변경 불가

### 2. Proxy Owner
**권한:**
- Proxy Admin 변경 (`changeAdmin`)
- Implementation 업그레이드 (`upgradeTo`, `upgradeToAndCall`)
- Implementation 주소 조회 (`implementation`)

**제한:**
- Implementation 함수 호출 불가 (보안상 제한)

### 3. Master Minter (실제로는 MasterMinter 컨트랙트)
**권한:**
- Minter 추가/제거 (Controller를 통해)
- Minter별 발행 한도 설정 (Controller를 통해)

### 4. MasterMinter Owner
**권한:**
- Controller 설정 (`configureController`)
- Controller 제거 (`removeController`)

### 5. Controller
**권한:**
- 자신이 관리하는 Minter의 발행 한도 설정 (`configureMinter`)
- 자신이 관리하는 Minter 제거 (`removeMinter`)

### 6. Minter
**권한:**
- 토큰 발행 (`mint`)
- 자신의 토큰 소각 (`burn`)

**제한:**
- 설정된 발행 한도 내에서만 발행 가능
- 일시 중지 상태에서는 발행 불가
- 블랙리스트 등록 시 발행 불가

### 7. Pauser
**권한:**
- 컨트랙트 일시 중지 (`pause`)
- 컨트랙트 재개 (`unpause`)

### 8. Blacklister
**권한:**
- 주소 블랙리스트 등록 (`blacklist`)
- 주소 블랙리스트 해제 (`unBlacklist`)

### 9. Rescuer
**권한:**
- 잘못 전송된 ERC20 토큰 복구 (`rescueERC20`)

---

## 보안 고려사항

### 1. Proxy Admin 제한
**문제:**
- Proxy Admin은 Implementation 함수를 호출할 수 없습니다.
- AdminUpgradeabilityProxy의 `_willFallback()` 함수에서 차단됩니다.

**해결:**
```solidity
// AdminUpgradeabilityProxy.sol:162-167
function _willFallback() internal override {
    if (msg.sender == _admin()) {
        revert FallbackCalledByAdmin();  // Admin 차단
    }
    super._willFallback();
}
```

**영향:**
- Proxy Admin은 관리 함수만 호출 가능 (admin, implementation, changeAdmin, upgradeTo 등)
- Proxy Admin을 Minter로 설정하면 민팅 불가
- 배포 시 Proxy Owner와 배포자 주소를 다르게 설정해야 함

### 2. 권한 분리
각 역할은 명확히 분리되어 있으며, 하나의 주소에 모든 권한을 부여하지 않는 것을 권장합니다.

**권장 구조:**
```
Owner 지갑 (콜드 월렛)
  - Owner, Pauser, Blacklister, Rescuer

Proxy Owner 지갑 (멀티시그)
  - Proxy Admin (업그레이드 권한)

MasterMinter Owner 지갑
  - Controller 관리

Controller 지갑 (여러 개)
  - 각각 하나의 Minter 관리

Minter 지갑 (여러 개)
  - 토큰 발행
```

### 3. 블랙리스트
블랙리스트에 등록된 주소는:
- 토큰 전송 불가 (sender)
- 토큰 수신 불가 (receiver)
- 토큰 발행 불가 (Minter인 경우)

### 4. Decimals 고정
FiatToken의 decimals는 **6으로 고정**되어 있습니다.
- 1 토큰 = 1,000,000 (wei 단위)
- USDC와 동일한 decimals 사용

---

## 자주 묻는 질문 (FAQ)

### Q1: Proxy Admin이 Minter인데 민팅이 안 됩니다.
**A:** Proxy Admin은 보안상 Implementation 함수를 호출할 수 없습니다. 다른 주소를 Minter로 사용하거나, Proxy Admin을 변경해야 합니다.

### Q2: Controller를 변경하면 기존 Minter는 어떻게 되나요?
**A:** Controller-Minter 연결이 해제되지만, Minter 자체는 여전히 FiatToken에서 활성화 상태입니다. 발행 권한을 완전히 제거하려면 `removeMinter()`를 호출해야 합니다.

### Q3: 하나의 Controller가 여러 Minter를 관리할 수 있나요?
**A:** 아니요, 하나의 Controller는 정확히 하나의 Minter만 관리합니다. 하지만 여러 Controller가 동일한 Minter를 관리할 수는 있습니다.

### Q4: Master Minter를 변경하면 어떻게 되나요?
**A:** FiatToken의 Master Minter 주소가 변경됩니다. 기존 MasterMinter 컨트랙트의 Controller-Minter 구조는 새 Master Minter로 마이그레이션해야 합니다.

### Q5: 배포 후 역할 주소를 변경할 수 있나요?
**A:** 네, Owner 권한이 있으면 Pauser, Blacklister, Rescuer, Master Minter 주소를 변경할 수 있습니다. 단, Proxy Owner는 Proxy Owner만 변경할 수 있습니다.

---

## 관련 문서

- [FiatToken 설계 문서](./doc/tokendesign.md)
- [MasterMinter 설계 문서](./doc/masterminter.md)
- [배포 프로세스](./doc/deployment.md)
- [업그레이드 가이드](./doc/upgrade.md)

---

## 라이선스

Apache-2.0

---

## 기여

이슈 및 풀 리퀘스트는 환영합니다.

---

## 연락처

문의사항이 있으시면 이슈를 등록해 주세요.
