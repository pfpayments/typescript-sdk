/* tslint:disable */
/* eslint-disable */
/**
 * PostFinance TypeScript SDK
 *
 * This library allows to interact with the PostFinance payment service.
 *
 * Copyright owner: Wallee AG
 * Website: https://www.postfinance.ch/en/private.html
 * Developer email: ecosystem-team@wallee.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Configuration, DefaultConfig} from '../src/runtime'
import {HttpBearerAuth} from '../src/auth/HttpBearerAuth'
import {AuthenticatedCardRequest} from '../src/models'

export const SPACE_ID = 72979
export const APPLICATION_USER_ID = 123441
export const AUTHENTICATION_KEY = "oWVGn42ks+yIbuHt8w09kyQRUEgIuYxqd/F59LO/lF0="
export const TEST_CARD_PAYMENT_METHOD_CONFIGURATION_ID = 340868
export const TEST_CUSTOMER_ID = 1234

export const MOCK_CARD_DATA: AuthenticatedCardRequest = {
  cardData: {
    primaryAccountNumber: "4111111111111111",
    expiryDate: "2026-12"
  },
  paymentMethodConfiguration: TEST_CARD_PAYMENT_METHOD_CONFIGURATION_ID
}

export const HttpBearerAuthConfig =
    new HttpBearerAuth(
        APPLICATION_USER_ID,
        AUTHENTICATION_KEY)

/*
 Singleton instance for Configuration with a global timeout.
 To ensure the configuration is static (shared and single across the application),
 a single instance is used within all the instances (shared state across the application).

 For more details on how `DefaultConfig` is initialized in 'runtime', see:
` export const DefaultConfig = new Configuration();`
 */
export const DefaultConfiguration: Configuration = DefaultConfig
DefaultConfiguration.httpBearerAuth = HttpBearerAuthConfig

// Set up of DefaultConfiguration timeout all over the classes
// DefaultConfiguration.requestTimeout = 33