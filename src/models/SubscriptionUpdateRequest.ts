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
import { mapValues } from '../runtime';
import type { SubscriptionComponentReferenceConfiguration } from './SubscriptionComponentReferenceConfiguration';
import {
    SubscriptionComponentReferenceConfigurationFromJSON,
    SubscriptionComponentReferenceConfigurationFromJSONTyped,
    SubscriptionComponentReferenceConfigurationToJSON,
} from './SubscriptionComponentReferenceConfiguration';

/**
 * 
 * @export
 * @interface SubscriptionUpdateRequest
 */
export interface SubscriptionUpdateRequest {
    /**
     * The configurations of the subscription's components.
     * @type {Set<SubscriptionComponentReferenceConfiguration>}
     * @memberof SubscriptionUpdateRequest
     */
    componentConfigurations?: Set<SubscriptionComponentReferenceConfiguration>;
    /**
     * The product to subscribe to.
     * @type {number}
     * @memberof SubscriptionUpdateRequest
     */
    product?: number;
    /**
     * The three-letter code (ISO 4217 format) of the currency used to invoice the customer. Must be one of the currencies supported by the product.
     * @type {string}
     * @memberof SubscriptionUpdateRequest
     */
    currency?: string;
    /**
     * Whether the subscriptions' termination periods should be respected.
     * @type {boolean}
     * @memberof SubscriptionUpdateRequest
     */
    respectTerminationPeriod?: boolean;
}

/**
 * Check if a given object implements the SubscriptionUpdateRequest interface.
 */
export function instanceOfSubscriptionUpdateRequest(value: object): value is SubscriptionUpdateRequest {
    return true;
}

export function SubscriptionUpdateRequestFromJSON(json: any): SubscriptionUpdateRequest {
    return SubscriptionUpdateRequestFromJSONTyped(json, false);
}

export function SubscriptionUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'componentConfigurations': json['componentConfigurations'] == null ? undefined : (new Set((json['componentConfigurations'] as Array<any>).map(SubscriptionComponentReferenceConfigurationFromJSON))),
        'product': json['product'] == null ? undefined : json['product'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'respectTerminationPeriod': json['respectTerminationPeriod'] == null ? undefined : json['respectTerminationPeriod'],
    };
}

export function SubscriptionUpdateRequestToJSON(value?: SubscriptionUpdateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'componentConfigurations': value['componentConfigurations'] == null ? undefined : (Array.from(value['componentConfigurations'] as Set<any>).map(SubscriptionComponentReferenceConfigurationToJSON)),
        'product': value['product'],
        'currency': value['currency'],
        'respectTerminationPeriod': value['respectTerminationPeriod'],
    };
}

