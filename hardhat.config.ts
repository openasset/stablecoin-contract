/**
 * Copyright 2024 Circle Internet Financial, LTD. All rights reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import dotenv from "dotenv";

import type { HardhatUserConfig } from "hardhat/config";
import HardhatContractSizer from "@solidstate/hardhat-contract-sizer";

// Hardhat extensions
import "@nomicfoundation/hardhat-ethers";

dotenv.config();

const hardhatConfig: HardhatUserConfig = {
  plugins: [HardhatContractSizer],
  solidity: {
    version: "0.8.30",
    settings: {
      optimizer: {
        enabled: true,
        runs: parseInt(process.env.OPTIMIZER_RUNS || "10000000"),
      },
    },
  },
  paths: {
    artifacts: "./artifacts/hardhat",
    cache: "./cache/hardhat",
  },
  contractSizer: {
    strict: true,
    except: [/^contracts\/test\//, /^scripts\//, /^test\//],
  },
};

export default hardhatConfig;
