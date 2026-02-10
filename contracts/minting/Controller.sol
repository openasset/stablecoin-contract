/**
 * Copyright 2023 Circle Internet Financial, LTD. All rights reserved.
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

pragma solidity 0.8.30;

import { Ownable } from "./Ownable.sol";

/**
 * @title Controller
 * @notice Generic implementation of the owner-controller-worker model.
 * One owner manages many controllers. Each controller manages one worker.
 * Workers may be reused across different controllers.
 */
contract Controller is Ownable {
    /**
     * @dev A controller manages a single worker address.
     * controllers[controller] = worker
     */
    mapping(address => address) internal controllers;

    error ControllerNotConfigured();
    error ControllerZeroAddress();
    error WorkerZeroAddress();

    event ControllerConfigured(
        address indexed _controller,
        address indexed _worker
    );
    event ControllerRemoved(address indexed _controller);

    /**
     * @notice Ensures that caller is the controller of a non-zero worker
     * address.
     */
    modifier onlyController() {
        if (controllers[msg.sender] == address(0)) {
            revert ControllerNotConfigured();
        }
        _;
    }

    /**
     * @notice Gets the worker at address _controller.
     */
    function getWorker(address _controller) external view returns (address) {
        return controllers[_controller];
    }

    // onlyOwner functions

    /**
     * @notice Configure a controller with the given worker.
     * @param _controller The controller to be configured with a worker.
     * @param _worker The worker to be set for the newly configured controller.
     * _worker must not be a non-zero address. To disable a worker,
     * use removeController instead.
     */
    function configureController(address _controller, address _worker)
        public
        onlyOwner
    {
        if (_controller == address(0)) {
            revert ControllerZeroAddress();
        }
        if (_worker == address(0)) {
            revert WorkerZeroAddress();
        }
        controllers[_controller] = _worker;
        emit ControllerConfigured(_controller, _worker);
    }

    /**
     * @notice disables a controller by setting its worker to address(0).
     * @param _controller The controller to disable.
     */
    function removeController(address _controller) public onlyOwner {
        if (_controller == address(0)) {
            revert ControllerZeroAddress();
        }
        if (controllers[_controller] == address(0)) {
            revert ControllerNotConfigured();
        }
        controllers[_controller] = address(0);
        emit ControllerRemoved(_controller);
    }
}
