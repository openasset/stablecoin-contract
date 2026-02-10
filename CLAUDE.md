# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

이 저장소는 Circle의 스테이블코인 스마트 컨트랙트를 포함하고 있으며, EVM 호환 블록체인에서 작동합니다. 모든 컨트랙트는 Solidity로 작성되었고 Hardhat 프레임워크로 관리됩니다.

## 개발 환경

- **Node 버전**: 22.18.0 (`.nvmrc` 참고, `nvm use` 사용)
- **Yarn 버전**: 4.0.0
- **Solidity 버전**: 0.8.30
- **주요 프레임워크**: Hardhat 3.x

## 주요 명령어

### 컴파일 및 타입 생성
```bash
yarn compile              # 컨트랙트 컴파일 및 TypeScript 타입 생성
yarn hardhat typechain    # 재컴파일 없이 타입만 생성
```

### 테스트
```bash
yarn test                 # 모든 테스트 실행
yarn test [파일경로]      # 특정 파일의 테스트만 실행
```

### 코드 품질 검사
```bash
yarn static-check         # 전체 정적 분석 실행 (typecheck + lint + fmt:check + solhint)
yarn typecheck            # TypeScript 타입 체크
yarn lint                 # JavaScript/TypeScript 린트
yarn lint --fix           # 린트 문제 자동 수정
yarn solhint              # Solidity 코드 린트
yarn fmt                  # 코드 자동 포맷팅
yarn fmt:check            # 포맷팅 확인만 수행
```

### 컨트랙트 분석
```bash
yarn contract-size        # 컨트랙트 크기 확인 (테스트 제외)
```

## 아키텍처

### Proxy 업그레이드 패턴

FiatToken은 OpenZeppelin의 Proxy Upgrade Pattern을 사용합니다:

- **Implementation Contract**: `contracts/fiat/FiatToken.sol` - 주요 기능 로직 포함
- **Proxy Contract**: `contracts/upgradeability/AdminUpgradeabilityProxy.sol` - 함수 호출을 implementation으로 위임

이 패턴을 통해 새로운 implementation 컨트랙트를 배포하고 프록시가 이를 가리키도록 업데이트하여 FiatToken 기능을 업그레이드할 수 있습니다.

### 컨트랙트 구조

```
contracts/
├── fiat/                     # 핵심 FiatToken 컨트랙트 및 기능
│   ├── FiatToken.sol        # 메인 토큰 컨트랙트
│   ├── AbstractFiatToken.sol
│   ├── Ownable.sol
│   ├── Pausable.sol
│   ├── Blacklistable.sol
│   ├── Rescuable.sol
│   ├── EIP712Domain.sol
│   ├── EIP2612.sol          # Permit 기능
│   └── EIP3009.sol          # TransferWithAuthorization 기능
├── minting/                  # Minting 관리 시스템
│   ├── MasterMinter.sol     # 여러 controller를 통해 minter 관리
│   ├── MintController.sol
│   └── Controller.sol
├── upgradeability/           # Proxy 업그레이드 메커니즘
│   ├── AdminUpgradeabilityProxy.sol
│   ├── UpgradeabilityProxy.sol
│   └── Proxy.sol
├── util/                     # 유틸리티 함수
│   ├── EIP712.sol
│   ├── ECRecover.sol
│   ├── SignatureChecker.sol
│   └── MessageHashUtils.sol
└── interface/
    └── IERC1271.sol
```

### FiatToken 주요 기능

1. **ERC20 호환**: 표준 ERC20 인터페이스 구현
2. **Pausable**: 전체 컨트랙트를 일시 중지할 수 있음 (`pauser` 주소가 제어)
3. **Upgradable**: 프록시를 통한 업그레이드 가능 (`proxyOwner` 주소가 제어)
4. **Blacklist**: 특정 주소를 블랙리스트에 추가하여 전송/수신 차단 (`blacklister` 주소가 제어)
5. **Minting/Burning**:
   - 여러 minter를 동시에 지원
   - `masterMinter`가 minter 목록과 각 minter의 mint allowance를 관리
   - Mint allowance는 ERC20 allowance와 유사하게 작동
6. **Ownable**: `owner`가 `pauser`, `blacklister`, `masterMinter` 주소 변경 가능 (단, `proxyOwner`는 변경 불가)

### 역할 기반 접근 제어

- **owner**: pauser, blacklister, masterMinter 주소 관리
- **proxyOwner**: 프록시 업그레이드 및 proxyOwner 주소 변경
- **pauser**: 컨트랙트 일시 중지/재개
- **blacklister**: 주소 블랙리스트 관리
- **masterMinter**: minter 추가/제거 및 mint allowance 설정
- **minters**: 할당된 allowance 내에서 토큰 발행

### 상태 최적화

FiatToken은 가스 효율성을 위해 상태를 최적화합니다:
- `balanceAndBlacklistStates` 매핑은 단일 uint256에 잔액(255비트)과 블랙리스트 상태(1비트)를 함께 저장

## 컴파일 설정

- **Optimizer**: 기본적으로 10,000,000 runs로 활성화 (`OPTIMIZER_RUNS` 환경 변수로 조정 가능)
- **Artifacts 경로**: `./artifacts/hardhat`
- **Cache 경로**: `./cache/hardhat`

## 중요 사항

- 코드 수정 후 반드시 `yarn static-check` 실행하여 품질 검사 통과 확인
- 컨트랙트 수정 시 가스 최적화 고려
- 보안 취약점(command injection, reentrancy 등) 주의
- Apache-2.0 라이선스 헤더를 모든 새 파일에 포함
