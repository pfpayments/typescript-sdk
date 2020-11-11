'use strict';
import { AbstractAccountUpdate } from "../models/AbstractAccountUpdate";
import { AbstractApplicationUserUpdate } from "../models/AbstractApplicationUserUpdate";
import { AbstractCustomerActive } from "../models/AbstractCustomerActive";
import { AbstractCustomerAddressActive } from "../models/AbstractCustomerAddressActive";
import { AbstractCustomerCommentActive } from "../models/AbstractCustomerCommentActive";
import { AbstractHumanUserUpdate } from "../models/AbstractHumanUserUpdate";
import { AbstractPaymentLinkUpdate } from "../models/AbstractPaymentLinkUpdate";
import { AbstractRefundCommentActive } from "../models/AbstractRefundCommentActive";
import { AbstractSpaceUpdate } from "../models/AbstractSpaceUpdate";
import { AbstractTokenUpdate } from "../models/AbstractTokenUpdate";
import { AbstractTransactionCommentActive } from "../models/AbstractTransactionCommentActive";
import { AbstractTransactionInvoiceCommentActive } from "../models/AbstractTransactionInvoiceCommentActive";
import { AbstractTransactionPending } from "../models/AbstractTransactionPending";
import { AbstractWebhookListenerUpdate } from "../models/AbstractWebhookListenerUpdate";
import { AbstractWebhookUrlUpdate } from "../models/AbstractWebhookUrlUpdate";
import { Account } from "../models/Account";
import { AccountState } from "../models/AccountState";
import { AccountType } from "../models/AccountType";
import { Address } from "../models/Address";
import { AddressCreate } from "../models/AddressCreate";
import { ChargeAttemptEnvironment } from "../models/ChargeAttemptEnvironment";
import { ChargeAttemptState } from "../models/ChargeAttemptState";
import { ChargeFlow } from "../models/ChargeFlow";
import { ChargeFlowLevelConfiguration } from "../models/ChargeFlowLevelConfiguration";
import { ChargeFlowLevelConfigurationType } from "../models/ChargeFlowLevelConfigurationType";
import { ChargeFlowLevelState } from "../models/ChargeFlowLevelState";
import { ChargeState } from "../models/ChargeState";
import { ChargeType } from "../models/ChargeType";
import { ClientError } from "../models/ClientError";
import { ClientErrorType } from "../models/ClientErrorType";
import { CompletionLineItem } from "../models/CompletionLineItem";
import { CompletionLineItemCreate } from "../models/CompletionLineItemCreate";
import { Condition } from "../models/Condition";
import { ConditionType } from "../models/ConditionType";
import { ConnectorInvocationStage } from "../models/ConnectorInvocationStage";
import { CreationEntityState } from "../models/CreationEntityState";
import { CriteriaOperator } from "../models/CriteriaOperator";
import { Customer } from "../models/Customer";
import { CustomerAddress } from "../models/CustomerAddress";
import { CustomerAddressType } from "../models/CustomerAddressType";
import { CustomerComment } from "../models/CustomerComment";
import { CustomerPostalAddress } from "../models/CustomerPostalAddress";
import { CustomerPostalAddressCreate } from "../models/CustomerPostalAddressCreate";
import { CustomersPresence } from "../models/CustomersPresence";
import { DataCollectionType } from "../models/DataCollectionType";
import { DatabaseTranslatedString } from "../models/DatabaseTranslatedString";
import { DatabaseTranslatedStringItem } from "../models/DatabaseTranslatedStringItem";
import { DeliveryIndicationDecisionReason } from "../models/DeliveryIndicationDecisionReason";
import { DeliveryIndicationState } from "../models/DeliveryIndicationState";
import { DocumentTemplate } from "../models/DocumentTemplate";
import { DocumentTemplateType } from "../models/DocumentTemplateType";
import { DocumentTemplateTypeGroup } from "../models/DocumentTemplateTypeGroup";
import { EntityExportRequest } from "../models/EntityExportRequest";
import { EntityQuery } from "../models/EntityQuery";
import { EntityQueryFilter } from "../models/EntityQueryFilter";
import { EntityQueryFilterType } from "../models/EntityQueryFilterType";
import { EntityQueryOrderBy } from "../models/EntityQueryOrderBy";
import { EntityQueryOrderByType } from "../models/EntityQueryOrderByType";
import { Environment } from "../models/Environment";
import { FailureCategory } from "../models/FailureCategory";
import { FailureReason } from "../models/FailureReason";
import { Feature } from "../models/Feature";
import { FeatureCategory } from "../models/FeatureCategory";
import { Gender } from "../models/Gender";
import { HumanUser } from "../models/HumanUser";
import { Label } from "../models/Label";
import { LabelDescriptor } from "../models/LabelDescriptor";
import { LabelDescriptorCategory } from "../models/LabelDescriptorCategory";
import { LabelDescriptorGroup } from "../models/LabelDescriptorGroup";
import { LabelDescriptorType } from "../models/LabelDescriptorType";
import { LegalOrganizationForm } from "../models/LegalOrganizationForm";
import { LineItem } from "../models/LineItem";
import { LineItemAttribute } from "../models/LineItemAttribute";
import { LineItemAttributeCreate } from "../models/LineItemAttributeCreate";
import { LineItemCreate } from "../models/LineItemCreate";
import { LineItemReduction } from "../models/LineItemReduction";
import { LineItemReductionCreate } from "../models/LineItemReductionCreate";
import { LineItemType } from "../models/LineItemType";
import { LocalizedString } from "../models/LocalizedString";
import { ManualTask } from "../models/ManualTask";
import { ManualTaskAction } from "../models/ManualTaskAction";
import { ManualTaskActionStyle } from "../models/ManualTaskActionStyle";
import { ManualTaskState } from "../models/ManualTaskState";
import { ManualTaskType } from "../models/ManualTaskType";
import { OneClickPaymentMode } from "../models/OneClickPaymentMode";
import { PaymentConnector } from "../models/PaymentConnector";
import { PaymentConnectorConfiguration } from "../models/PaymentConnectorConfiguration";
import { PaymentConnectorFeature } from "../models/PaymentConnectorFeature";
import { PaymentContract } from "../models/PaymentContract";
import { PaymentContractState } from "../models/PaymentContractState";
import { PaymentContractType } from "../models/PaymentContractType";
import { PaymentInformationHash } from "../models/PaymentInformationHash";
import { PaymentInformationHashType } from "../models/PaymentInformationHashType";
import { PaymentLink } from "../models/PaymentLink";
import { PaymentLinkProtectionMode } from "../models/PaymentLinkProtectionMode";
import { PaymentLinkUpdate } from "../models/PaymentLinkUpdate";
import { PaymentMethod } from "../models/PaymentMethod";
import { PaymentMethodBrand } from "../models/PaymentMethodBrand";
import { PaymentMethodConfiguration } from "../models/PaymentMethodConfiguration";
import { PaymentPrimaryRiskTaker } from "../models/PaymentPrimaryRiskTaker";
import { PaymentProcessor } from "../models/PaymentProcessor";
import { PaymentProcessorConfiguration } from "../models/PaymentProcessorConfiguration";
import { PaymentTerminal } from "../models/PaymentTerminal";
import { PaymentTerminalAddress } from "../models/PaymentTerminalAddress";
import { PaymentTerminalConfiguration } from "../models/PaymentTerminalConfiguration";
import { PaymentTerminalConfigurationState } from "../models/PaymentTerminalConfigurationState";
import { PaymentTerminalConfigurationVersion } from "../models/PaymentTerminalConfigurationVersion";
import { PaymentTerminalConfigurationVersionState } from "../models/PaymentTerminalConfigurationVersionState";
import { PaymentTerminalLocation } from "../models/PaymentTerminalLocation";
import { PaymentTerminalLocationState } from "../models/PaymentTerminalLocationState";
import { PaymentTerminalLocationVersion } from "../models/PaymentTerminalLocationVersion";
import { PaymentTerminalLocationVersionState } from "../models/PaymentTerminalLocationVersionState";
import { PaymentTerminalState } from "../models/PaymentTerminalState";
import { PaymentTerminalType } from "../models/PaymentTerminalType";
import { Permission } from "../models/Permission";
import { Refund } from "../models/Refund";
import { RefundComment } from "../models/RefundComment";
import { RefundCreate } from "../models/RefundCreate";
import { RefundState } from "../models/RefundState";
import { RefundType } from "../models/RefundType";
import { RenderedDocument } from "../models/RenderedDocument";
import { ResourcePath } from "../models/ResourcePath";
import { ResourceState } from "../models/ResourceState";
import { RestAddressFormat } from "../models/RestAddressFormat";
import { RestAddressFormatField } from "../models/RestAddressFormatField";
import { RestCountry } from "../models/RestCountry";
import { RestCountryState } from "../models/RestCountryState";
import { RestCurrency } from "../models/RestCurrency";
import { RestLanguage } from "../models/RestLanguage";
import { Role } from "../models/Role";
import { SalesChannel } from "../models/SalesChannel";
import { Scope } from "../models/Scope";
import { ServerError } from "../models/ServerError";
import { ShopifyAdditionalLineItemData } from "../models/ShopifyAdditionalLineItemData";
import { ShopifyIntegration } from "../models/ShopifyIntegration";
import { ShopifyIntegrationPaymentAppVersion } from "../models/ShopifyIntegrationPaymentAppVersion";
import { ShopifyIntegrationSubscriptionAppVersion } from "../models/ShopifyIntegrationSubscriptionAppVersion";
import { ShopifyTransactionState } from "../models/ShopifyTransactionState";
import { Space } from "../models/Space";
import { SpaceAddress } from "../models/SpaceAddress";
import { SpaceAddressCreate } from "../models/SpaceAddressCreate";
import { SpaceView } from "../models/SpaceView";
import { StaticValue } from "../models/StaticValue";
import { Tax } from "../models/Tax";
import { TaxCreate } from "../models/TaxCreate";
import { TenantDatabase } from "../models/TenantDatabase";
import { Token } from "../models/Token";
import { TokenVersion } from "../models/TokenVersion";
import { TokenVersionState } from "../models/TokenVersionState";
import { TokenVersionType } from "../models/TokenVersionType";
import { TokenizationMode } from "../models/TokenizationMode";
import { Transaction } from "../models/Transaction";
import { TransactionAwareEntity } from "../models/TransactionAwareEntity";
import { TransactionComment } from "../models/TransactionComment";
import { TransactionCompletionBehavior } from "../models/TransactionCompletionBehavior";
import { TransactionCompletionMode } from "../models/TransactionCompletionMode";
import { TransactionCompletionRequest } from "../models/TransactionCompletionRequest";
import { TransactionCompletionState } from "../models/TransactionCompletionState";
import { TransactionEnvironmentSelectionStrategy } from "../models/TransactionEnvironmentSelectionStrategy";
import { TransactionGroup } from "../models/TransactionGroup";
import { TransactionGroupState } from "../models/TransactionGroupState";
import { TransactionInvoiceComment } from "../models/TransactionInvoiceComment";
import { TransactionInvoiceReplacement } from "../models/TransactionInvoiceReplacement";
import { TransactionInvoiceState } from "../models/TransactionInvoiceState";
import { TransactionLineItemUpdateRequest } from "../models/TransactionLineItemUpdateRequest";
import { TransactionState } from "../models/TransactionState";
import { TransactionUserInterfaceType } from "../models/TransactionUserInterfaceType";
import { TransactionVoidMode } from "../models/TransactionVoidMode";
import { TransactionVoidState } from "../models/TransactionVoidState";
import { TwoFactorAuthenticationType } from "../models/TwoFactorAuthenticationType";
import { User } from "../models/User";
import { UserAccountRole } from "../models/UserAccountRole";
import { UserSpaceRole } from "../models/UserSpaceRole";
import { UserType } from "../models/UserType";
import { WebhookIdentity } from "../models/WebhookIdentity";
import { WebhookListener } from "../models/WebhookListener";
import { WebhookListenerEntity } from "../models/WebhookListenerEntity";
import { WebhookUrl } from "../models/WebhookUrl";
import { AccountCreate } from "../models/AccountCreate";
import { AccountUpdate } from "../models/AccountUpdate";
import { ApplicationUser } from "../models/ApplicationUser";
import { ApplicationUserCreate } from "../models/ApplicationUserCreate";
import { ApplicationUserUpdate } from "../models/ApplicationUserUpdate";
import { Charge } from "../models/Charge";
import { ChargeAttempt } from "../models/ChargeAttempt";
import { ChargeFlowLevel } from "../models/ChargeFlowLevel";
import { ChargeFlowLevelPaymentLink } from "../models/ChargeFlowLevelPaymentLink";
import { ConnectorInvocation } from "../models/ConnectorInvocation";
import { CustomerActive } from "../models/CustomerActive";
import { CustomerAddressActive } from "../models/CustomerAddressActive";
import { CustomerAddressCreate } from "../models/CustomerAddressCreate";
import { CustomerCommentActive } from "../models/CustomerCommentActive";
import { CustomerCommentCreate } from "../models/CustomerCommentCreate";
import { CustomerCreate } from "../models/CustomerCreate";
import { DeliveryIndication } from "../models/DeliveryIndication";
import { HumanUserCreate } from "../models/HumanUserCreate";
import { HumanUserUpdate } from "../models/HumanUserUpdate";
import { PaymentLinkActive } from "../models/PaymentLinkActive";
import { PaymentLinkCreate } from "../models/PaymentLinkCreate";
import { PaymentTerminalContactAddress } from "../models/PaymentTerminalContactAddress";
import { RefundCommentActive } from "../models/RefundCommentActive";
import { RefundCommentCreate } from "../models/RefundCommentCreate";
import { ShopifyTransaction } from "../models/ShopifyTransaction";
import { SpaceCreate } from "../models/SpaceCreate";
import { SpaceUpdate } from "../models/SpaceUpdate";
import { TokenCreate } from "../models/TokenCreate";
import { TokenUpdate } from "../models/TokenUpdate";
import { TransactionCommentActive } from "../models/TransactionCommentActive";
import { TransactionCommentCreate } from "../models/TransactionCommentCreate";
import { TransactionCompletion } from "../models/TransactionCompletion";
import { TransactionCreate } from "../models/TransactionCreate";
import { TransactionInvoice } from "../models/TransactionInvoice";
import { TransactionInvoiceCommentActive } from "../models/TransactionInvoiceCommentActive";
import { TransactionInvoiceCommentCreate } from "../models/TransactionInvoiceCommentCreate";
import { TransactionLineItemVersion } from "../models/TransactionLineItemVersion";
import { TransactionPending } from "../models/TransactionPending";
import { TransactionVoid } from "../models/TransactionVoid";
import { WebhookListenerCreate } from "../models/WebhookListenerCreate";
import { WebhookListenerUpdate } from "../models/WebhookListenerUpdate";
import { WebhookUrlCreate } from "../models/WebhookUrlCreate";
import { WebhookUrlUpdate } from "../models/WebhookUrlUpdate";
import { ApplicationUserCreateWithMacKey } from "../models/ApplicationUserCreateWithMacKey";

class ObjectSerializer {

    /* tslint:disable:no-unused-variable */
    static primitives: Array<string> = [
        "string",
        "boolean",
        "double",
        "integer",
        "long",
        "float",
        "number",
        "any"
    ];

    static enumsMap: {[index: string]: any} = {
        "AccountState": AccountState,
        "AccountType": AccountType,
        "ChargeAttemptEnvironment": ChargeAttemptEnvironment,
        "ChargeAttemptState": ChargeAttemptState,
        "ChargeFlowLevelState": ChargeFlowLevelState,
        "ChargeState": ChargeState,
        "ChargeType": ChargeType,
        "ClientErrorType": ClientErrorType,
        "ConnectorInvocationStage": ConnectorInvocationStage,
        "CreationEntityState": CreationEntityState,
        "CriteriaOperator": CriteriaOperator,
        "CustomerAddressType": CustomerAddressType,
        "CustomersPresence": CustomersPresence,
        "DataCollectionType": DataCollectionType,
        "DeliveryIndicationState": DeliveryIndicationState,
        "EntityQueryFilterType": EntityQueryFilterType,
        "EntityQueryOrderByType": EntityQueryOrderByType,
        "Environment": Environment,
        "FailureCategory": FailureCategory,
        "Gender": Gender,
        "LabelDescriptorCategory": LabelDescriptorCategory,
        "LineItemType": LineItemType,
        "ManualTaskActionStyle": ManualTaskActionStyle,
        "ManualTaskState": ManualTaskState,
        "OneClickPaymentMode": OneClickPaymentMode,
        "PaymentContractState": PaymentContractState,
        "PaymentLinkProtectionMode": PaymentLinkProtectionMode,
        "PaymentPrimaryRiskTaker": PaymentPrimaryRiskTaker,
        "PaymentTerminalConfigurationState": PaymentTerminalConfigurationState,
        "PaymentTerminalConfigurationVersionState": PaymentTerminalConfigurationVersionState,
        "PaymentTerminalLocationState": PaymentTerminalLocationState,
        "PaymentTerminalLocationVersionState": PaymentTerminalLocationVersionState,
        "PaymentTerminalState": PaymentTerminalState,
        "RefundState": RefundState,
        "RefundType": RefundType,
        "ResourceState": ResourceState,
        "RestAddressFormatField": RestAddressFormatField,
        "ShopifyAdditionalLineItemData": ShopifyAdditionalLineItemData,
        "ShopifyIntegrationPaymentAppVersion": ShopifyIntegrationPaymentAppVersion,
        "ShopifyIntegrationSubscriptionAppVersion": ShopifyIntegrationSubscriptionAppVersion,
        "ShopifyTransactionState": ShopifyTransactionState,
        "TokenVersionState": TokenVersionState,
        "TokenizationMode": TokenizationMode,
        "TransactionCompletionBehavior": TransactionCompletionBehavior,
        "TransactionCompletionMode": TransactionCompletionMode,
        "TransactionCompletionState": TransactionCompletionState,
        "TransactionEnvironmentSelectionStrategy": TransactionEnvironmentSelectionStrategy,
        "TransactionGroupState": TransactionGroupState,
        "TransactionInvoiceState": TransactionInvoiceState,
        "TransactionState": TransactionState,
        "TransactionUserInterfaceType": TransactionUserInterfaceType,
        "TransactionVoidMode": TransactionVoidMode,
        "TransactionVoidState": TransactionVoidState,
        "UserType": UserType,
    }

    static typeMap: {[index: string]: any} = {
                "AbstractAccountUpdate": AbstractAccountUpdate,
                "AbstractApplicationUserUpdate": AbstractApplicationUserUpdate,
                "AbstractCustomerActive": AbstractCustomerActive,
                "AbstractCustomerAddressActive": AbstractCustomerAddressActive,
                "AbstractCustomerCommentActive": AbstractCustomerCommentActive,
                "AbstractHumanUserUpdate": AbstractHumanUserUpdate,
                "AbstractPaymentLinkUpdate": AbstractPaymentLinkUpdate,
                "AbstractRefundCommentActive": AbstractRefundCommentActive,
                "AbstractSpaceUpdate": AbstractSpaceUpdate,
                "AbstractTokenUpdate": AbstractTokenUpdate,
                "AbstractTransactionCommentActive": AbstractTransactionCommentActive,
                "AbstractTransactionInvoiceCommentActive": AbstractTransactionInvoiceCommentActive,
                "AbstractTransactionPending": AbstractTransactionPending,
                "AbstractWebhookListenerUpdate": AbstractWebhookListenerUpdate,
                "AbstractWebhookUrlUpdate": AbstractWebhookUrlUpdate,
                "Account": Account,
                "Address": Address,
                "AddressCreate": AddressCreate,
                "ChargeFlow": ChargeFlow,
                "ChargeFlowLevelConfiguration": ChargeFlowLevelConfiguration,
                "ChargeFlowLevelConfigurationType": ChargeFlowLevelConfigurationType,
                "ClientError": ClientError,
                "CompletionLineItem": CompletionLineItem,
                "CompletionLineItemCreate": CompletionLineItemCreate,
                "Condition": Condition,
                "ConditionType": ConditionType,
                "Customer": Customer,
                "CustomerAddress": CustomerAddress,
                "CustomerComment": CustomerComment,
                "CustomerPostalAddress": CustomerPostalAddress,
                "CustomerPostalAddressCreate": CustomerPostalAddressCreate,
                "DatabaseTranslatedString": DatabaseTranslatedString,
                "DatabaseTranslatedStringItem": DatabaseTranslatedStringItem,
                "DeliveryIndicationDecisionReason": DeliveryIndicationDecisionReason,
                "DocumentTemplate": DocumentTemplate,
                "DocumentTemplateType": DocumentTemplateType,
                "DocumentTemplateTypeGroup": DocumentTemplateTypeGroup,
                "EntityExportRequest": EntityExportRequest,
                "EntityQuery": EntityQuery,
                "EntityQueryFilter": EntityQueryFilter,
                "EntityQueryOrderBy": EntityQueryOrderBy,
                "FailureReason": FailureReason,
                "Feature": Feature,
                "FeatureCategory": FeatureCategory,
                "HumanUser": HumanUser,
                "Label": Label,
                "LabelDescriptor": LabelDescriptor,
                "LabelDescriptorGroup": LabelDescriptorGroup,
                "LabelDescriptorType": LabelDescriptorType,
                "LegalOrganizationForm": LegalOrganizationForm,
                "LineItem": LineItem,
                "LineItemAttribute": LineItemAttribute,
                "LineItemAttributeCreate": LineItemAttributeCreate,
                "LineItemCreate": LineItemCreate,
                "LineItemReduction": LineItemReduction,
                "LineItemReductionCreate": LineItemReductionCreate,
                "LocalizedString": LocalizedString,
                "ManualTask": ManualTask,
                "ManualTaskAction": ManualTaskAction,
                "ManualTaskType": ManualTaskType,
                "PaymentConnector": PaymentConnector,
                "PaymentConnectorConfiguration": PaymentConnectorConfiguration,
                "PaymentConnectorFeature": PaymentConnectorFeature,
                "PaymentContract": PaymentContract,
                "PaymentContractType": PaymentContractType,
                "PaymentInformationHash": PaymentInformationHash,
                "PaymentInformationHashType": PaymentInformationHashType,
                "PaymentLink": PaymentLink,
                "PaymentLinkUpdate": PaymentLinkUpdate,
                "PaymentMethod": PaymentMethod,
                "PaymentMethodBrand": PaymentMethodBrand,
                "PaymentMethodConfiguration": PaymentMethodConfiguration,
                "PaymentProcessor": PaymentProcessor,
                "PaymentProcessorConfiguration": PaymentProcessorConfiguration,
                "PaymentTerminal": PaymentTerminal,
                "PaymentTerminalAddress": PaymentTerminalAddress,
                "PaymentTerminalConfiguration": PaymentTerminalConfiguration,
                "PaymentTerminalConfigurationVersion": PaymentTerminalConfigurationVersion,
                "PaymentTerminalLocation": PaymentTerminalLocation,
                "PaymentTerminalLocationVersion": PaymentTerminalLocationVersion,
                "PaymentTerminalType": PaymentTerminalType,
                "Permission": Permission,
                "Refund": Refund,
                "RefundComment": RefundComment,
                "RefundCreate": RefundCreate,
                "RenderedDocument": RenderedDocument,
                "ResourcePath": ResourcePath,
                "RestAddressFormat": RestAddressFormat,
                "RestCountry": RestCountry,
                "RestCountryState": RestCountryState,
                "RestCurrency": RestCurrency,
                "RestLanguage": RestLanguage,
                "Role": Role,
                "SalesChannel": SalesChannel,
                "Scope": Scope,
                "ServerError": ServerError,
                "ShopifyIntegration": ShopifyIntegration,
                "Space": Space,
                "SpaceAddress": SpaceAddress,
                "SpaceAddressCreate": SpaceAddressCreate,
                "SpaceView": SpaceView,
                "StaticValue": StaticValue,
                "Tax": Tax,
                "TaxCreate": TaxCreate,
                "TenantDatabase": TenantDatabase,
                "Token": Token,
                "TokenVersion": TokenVersion,
                "TokenVersionType": TokenVersionType,
                "Transaction": Transaction,
                "TransactionAwareEntity": TransactionAwareEntity,
                "TransactionComment": TransactionComment,
                "TransactionCompletionRequest": TransactionCompletionRequest,
                "TransactionGroup": TransactionGroup,
                "TransactionInvoiceComment": TransactionInvoiceComment,
                "TransactionInvoiceReplacement": TransactionInvoiceReplacement,
                "TransactionLineItemUpdateRequest": TransactionLineItemUpdateRequest,
                "TwoFactorAuthenticationType": TwoFactorAuthenticationType,
                "User": User,
                "UserAccountRole": UserAccountRole,
                "UserSpaceRole": UserSpaceRole,
                "WebhookIdentity": WebhookIdentity,
                "WebhookListener": WebhookListener,
                "WebhookListenerEntity": WebhookListenerEntity,
                "WebhookUrl": WebhookUrl,
                "AccountCreate": AccountCreate,
                "AccountUpdate": AccountUpdate,
                "ApplicationUser": ApplicationUser,
                "ApplicationUserCreate": ApplicationUserCreate,
                "ApplicationUserUpdate": ApplicationUserUpdate,
                "Charge": Charge,
                "ChargeAttempt": ChargeAttempt,
                "ChargeFlowLevel": ChargeFlowLevel,
                "ChargeFlowLevelPaymentLink": ChargeFlowLevelPaymentLink,
                "ConnectorInvocation": ConnectorInvocation,
                "CustomerActive": CustomerActive,
                "CustomerAddressActive": CustomerAddressActive,
                "CustomerAddressCreate": CustomerAddressCreate,
                "CustomerCommentActive": CustomerCommentActive,
                "CustomerCommentCreate": CustomerCommentCreate,
                "CustomerCreate": CustomerCreate,
                "DeliveryIndication": DeliveryIndication,
                "HumanUserCreate": HumanUserCreate,
                "HumanUserUpdate": HumanUserUpdate,
                "PaymentLinkActive": PaymentLinkActive,
                "PaymentLinkCreate": PaymentLinkCreate,
                "PaymentTerminalContactAddress": PaymentTerminalContactAddress,
                "RefundCommentActive": RefundCommentActive,
                "RefundCommentCreate": RefundCommentCreate,
                "ShopifyTransaction": ShopifyTransaction,
                "SpaceCreate": SpaceCreate,
                "SpaceUpdate": SpaceUpdate,
                "TokenCreate": TokenCreate,
                "TokenUpdate": TokenUpdate,
                "TransactionCommentActive": TransactionCommentActive,
                "TransactionCommentCreate": TransactionCommentCreate,
                "TransactionCompletion": TransactionCompletion,
                "TransactionCreate": TransactionCreate,
                "TransactionInvoice": TransactionInvoice,
                "TransactionInvoiceCommentActive": TransactionInvoiceCommentActive,
                "TransactionInvoiceCommentCreate": TransactionInvoiceCommentCreate,
                "TransactionLineItemVersion": TransactionLineItemVersion,
                "TransactionPending": TransactionPending,
                "TransactionVoid": TransactionVoid,
                "WebhookListenerCreate": WebhookListenerCreate,
                "WebhookListenerUpdate": WebhookListenerUpdate,
                "WebhookUrlCreate": WebhookUrlCreate,
                "WebhookUrlUpdate": WebhookUrlUpdate,
                "ApplicationUserCreateWithMacKey": ApplicationUserCreateWithMacKey,
    }

    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (ObjectSerializer.primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (ObjectSerializer.enumsMap[expectedType]) {
                return expectedType;
            }

            if (!ObjectSerializer.typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = ObjectSerializer.typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    return data[discriminatorProperty]; // use the type given in the discriminator
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (ObjectSerializer.primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toString();
        } else {
            if (ObjectSerializer.enumsMap[type]) {
                return data;
            }
            if (!ObjectSerializer.typeMap[type]) { // in case we dont know the type
                return data;
            }

            // get the map for the correct type.
            let attributeTypes = ObjectSerializer.typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (ObjectSerializer.primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (ObjectSerializer.enumsMap[type]) {// is Enum
                return data;
            }

            if (!ObjectSerializer.typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new ObjectSerializer.typeMap[type]();
            let attributeTypes = ObjectSerializer.typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export { ObjectSerializer }