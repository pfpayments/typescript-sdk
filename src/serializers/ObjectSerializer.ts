'use strict';
import { AbstractAccountUpdate } from "../models/AbstractAccountUpdate";
import { AbstractApplicationUserUpdate } from "../models/AbstractApplicationUserUpdate";
import { AbstractCustomerActive } from "../models/AbstractCustomerActive";
import { AbstractCustomerAddressActive } from "../models/AbstractCustomerAddressActive";
import { AbstractCustomerCommentActive } from "../models/AbstractCustomerCommentActive";
import { AbstractHumanUserUpdate } from "../models/AbstractHumanUserUpdate";
import { AbstractPaymentLinkUpdate } from "../models/AbstractPaymentLinkUpdate";
import { AbstractRefundCommentActive } from "../models/AbstractRefundCommentActive";
import { AbstractShopifySubscriptionProductUpdate } from "../models/AbstractShopifySubscriptionProductUpdate";
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
import { AnalyticsQuery } from "../models/AnalyticsQuery";
import { AnalyticsQueryExecution } from "../models/AnalyticsQueryExecution";
import { AnalyticsQueryExecutionState } from "../models/AnalyticsQueryExecutionState";
import { AnalyticsQueryResultBatch } from "../models/AnalyticsQueryResultBatch";
import { AnalyticsSchemaColumn } from "../models/AnalyticsSchemaColumn";
import { AnalyticsSchemaTable } from "../models/AnalyticsSchemaTable";
import { AuthenticatedCardDataCreate } from "../models/AuthenticatedCardDataCreate";
import { BankAccount } from "../models/BankAccount";
import { BankAccountEnvironment } from "../models/BankAccountEnvironment";
import { BankAccountState } from "../models/BankAccountState";
import { BankAccountType } from "../models/BankAccountType";
import { BankTransaction } from "../models/BankTransaction";
import { BankTransactionFlowDirection } from "../models/BankTransactionFlowDirection";
import { BankTransactionSource } from "../models/BankTransactionSource";
import { BankTransactionState } from "../models/BankTransactionState";
import { BankTransactionType } from "../models/BankTransactionType";
import { CardAuthenticationResponse } from "../models/CardAuthenticationResponse";
import { CardAuthenticationVersion } from "../models/CardAuthenticationVersion";
import { CardCryptogram } from "../models/CardCryptogram";
import { CardCryptogramCreate } from "../models/CardCryptogramCreate";
import { CardCryptogramType } from "../models/CardCryptogramType";
import { CardholderAuthentication } from "../models/CardholderAuthentication";
import { CardholderAuthenticationCreate } from "../models/CardholderAuthenticationCreate";
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
import { CurrencyBankAccount } from "../models/CurrencyBankAccount";
import { Customer } from "../models/Customer";
import { CustomerAddress } from "../models/CustomerAddress";
import { CustomerAddressType } from "../models/CustomerAddressType";
import { CustomerComment } from "../models/CustomerComment";
import { CustomerPostalAddress } from "../models/CustomerPostalAddress";
import { CustomerPostalAddressCreate } from "../models/CustomerPostalAddressCreate";
import { CustomersPresence } from "../models/CustomersPresence";
import { DataCollectionType } from "../models/DataCollectionType";
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
import { ExternalTransferBankTransaction } from "../models/ExternalTransferBankTransaction";
import { FailureCategory } from "../models/FailureCategory";
import { FailureReason } from "../models/FailureReason";
import { Feature } from "../models/Feature";
import { FeatureCategory } from "../models/FeatureCategory";
import { Gender } from "../models/Gender";
import { HumanUser } from "../models/HumanUser";
import { InternalTransferBankTransaction } from "../models/InternalTransferBankTransaction";
import { InvoiceReconciliationRecordInvoiceLink } from "../models/InvoiceReconciliationRecordInvoiceLink";
import { InvoiceReconciliationRecordRejectionStatus } from "../models/InvoiceReconciliationRecordRejectionStatus";
import { InvoiceReconciliationRecordState } from "../models/InvoiceReconciliationRecordState";
import { InvoiceReconciliationRecordType } from "../models/InvoiceReconciliationRecordType";
import { InvoiceReimbursement } from "../models/InvoiceReimbursement";
import { InvoiceReimbursementState } from "../models/InvoiceReimbursementState";
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
import { PaymentAdjustment } from "../models/PaymentAdjustment";
import { PaymentAdjustmentType } from "../models/PaymentAdjustmentType";
import { PaymentConnector } from "../models/PaymentConnector";
import { PaymentConnectorConfiguration } from "../models/PaymentConnectorConfiguration";
import { PaymentConnectorFeature } from "../models/PaymentConnectorFeature";
import { PaymentContract } from "../models/PaymentContract";
import { PaymentContractState } from "../models/PaymentContractState";
import { PaymentContractType } from "../models/PaymentContractType";
import { PaymentInformationHash } from "../models/PaymentInformationHash";
import { PaymentInformationHashType } from "../models/PaymentInformationHashType";
import { PaymentInitiationAdviceFile } from "../models/PaymentInitiationAdviceFile";
import { PaymentInitiationAdviceFileState } from "../models/PaymentInitiationAdviceFileState";
import { PaymentLink } from "../models/PaymentLink";
import { PaymentLinkAddressHandlingMode } from "../models/PaymentLinkAddressHandlingMode";
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
import { PaymentTerminalDccTransactionSum } from "../models/PaymentTerminalDccTransactionSum";
import { PaymentTerminalLocation } from "../models/PaymentTerminalLocation";
import { PaymentTerminalLocationState } from "../models/PaymentTerminalLocationState";
import { PaymentTerminalLocationVersion } from "../models/PaymentTerminalLocationVersion";
import { PaymentTerminalLocationVersionState } from "../models/PaymentTerminalLocationVersionState";
import { PaymentTerminalReceiptType } from "../models/PaymentTerminalReceiptType";
import { PaymentTerminalState } from "../models/PaymentTerminalState";
import { PaymentTerminalTransactionSum } from "../models/PaymentTerminalTransactionSum";
import { PaymentTerminalTransactionSummary } from "../models/PaymentTerminalTransactionSummary";
import { PaymentTerminalTransactionSummaryFetchRequest } from "../models/PaymentTerminalTransactionSummaryFetchRequest";
import { PaymentTerminalType } from "../models/PaymentTerminalType";
import { Permission } from "../models/Permission";
import { RecurringIndicator } from "../models/RecurringIndicator";
import { Refund } from "../models/Refund";
import { RefundComment } from "../models/RefundComment";
import { RefundCreate } from "../models/RefundCreate";
import { RefundState } from "../models/RefundState";
import { RefundType } from "../models/RefundType";
import { RenderedDocument } from "../models/RenderedDocument";
import { RenderedTerminalReceipt } from "../models/RenderedTerminalReceipt";
import { RenderedTerminalTransactionSummary } from "../models/RenderedTerminalTransactionSummary";
import { ResourcePath } from "../models/ResourcePath";
import { ResourceState } from "../models/ResourceState";
import { RestAddressFormat } from "../models/RestAddressFormat";
import { RestAddressFormatField } from "../models/RestAddressFormatField";
import { RestCountry } from "../models/RestCountry";
import { RestCountryState } from "../models/RestCountryState";
import { RestCurrency } from "../models/RestCurrency";
import { RestLanguage } from "../models/RestLanguage";
import { Role } from "../models/Role";
import { RoleState } from "../models/RoleState";
import { SalesChannel } from "../models/SalesChannel";
import { Scope } from "../models/Scope";
import { ServerError } from "../models/ServerError";
import { ShopifyAdditionalLineItemData } from "../models/ShopifyAdditionalLineItemData";
import { ShopifyIntegration } from "../models/ShopifyIntegration";
import { ShopifyIntegrationPaymentAppVersion } from "../models/ShopifyIntegrationPaymentAppVersion";
import { ShopifyIntegrationSubscriptionAppVersion } from "../models/ShopifyIntegrationSubscriptionAppVersion";
import { ShopifyRecurringOrderState } from "../models/ShopifyRecurringOrderState";
import { ShopifyRecurringOrderUpdateRequest } from "../models/ShopifyRecurringOrderUpdateRequest";
import { ShopifySubscriber } from "../models/ShopifySubscriber";
import { ShopifySubscriberActive } from "../models/ShopifySubscriberActive";
import { ShopifySubscriberCreation } from "../models/ShopifySubscriberCreation";
import { ShopifySubscriberState } from "../models/ShopifySubscriberState";
import { ShopifySubscription } from "../models/ShopifySubscription";
import { ShopifySubscriptionAddressCreate } from "../models/ShopifySubscriptionAddressCreate";
import { ShopifySubscriptionBillingIntervalUnit } from "../models/ShopifySubscriptionBillingIntervalUnit";
import { ShopifySubscriptionCreationRequest } from "../models/ShopifySubscriptionCreationRequest";
import { ShopifySubscriptionModelBillingConfiguration } from "../models/ShopifySubscriptionModelBillingConfiguration";
import { ShopifySubscriptionModelItem } from "../models/ShopifySubscriptionModelItem";
import { ShopifySubscriptionModelTaxLine } from "../models/ShopifySubscriptionModelTaxLine";
import { ShopifySubscriptionProduct } from "../models/ShopifySubscriptionProduct";
import { ShopifySubscriptionProductPricingOption } from "../models/ShopifySubscriptionProductPricingOption";
import { ShopifySubscriptionProductState } from "../models/ShopifySubscriptionProductState";
import { ShopifySubscriptionState } from "../models/ShopifySubscriptionState";
import { ShopifySubscriptionSuspension } from "../models/ShopifySubscriptionSuspension";
import { ShopifySubscriptionSuspensionCreate } from "../models/ShopifySubscriptionSuspensionCreate";
import { ShopifySubscriptionSuspensionInitiator } from "../models/ShopifySubscriptionSuspensionInitiator";
import { ShopifySubscriptionSuspensionState } from "../models/ShopifySubscriptionSuspensionState";
import { ShopifySubscriptionSuspensionType } from "../models/ShopifySubscriptionSuspensionType";
import { ShopifySubscriptionUpdateAddressesRequest } from "../models/ShopifySubscriptionUpdateAddressesRequest";
import { ShopifySubscriptionUpdateRequest } from "../models/ShopifySubscriptionUpdateRequest";
import { ShopifySubscriptionVersion } from "../models/ShopifySubscriptionVersion";
import { ShopifySubscriptionVersionItem } from "../models/ShopifySubscriptionVersionItem";
import { ShopifySubscriptionVersionItemPriceStrategy } from "../models/ShopifySubscriptionVersionItemPriceStrategy";
import { ShopifySubscriptionVersionState } from "../models/ShopifySubscriptionVersionState";
import { ShopifySubscriptionWeekday } from "../models/ShopifySubscriptionWeekday";
import { ShopifyTaxLine } from "../models/ShopifyTaxLine";
import { ShopifyTransactionState } from "../models/ShopifyTransactionState";
import { Space } from "../models/Space";
import { SpaceAddress } from "../models/SpaceAddress";
import { SpaceAddressCreate } from "../models/SpaceAddressCreate";
import { SpaceView } from "../models/SpaceView";
import { StaticValue } from "../models/StaticValue";
import { Tax } from "../models/Tax";
import { TaxCreate } from "../models/TaxCreate";
import { TenantDatabase } from "../models/TenantDatabase";
import { TerminalReceiptFetchRequest } from "../models/TerminalReceiptFetchRequest";
import { TerminalReceiptFormat } from "../models/TerminalReceiptFormat";
import { Token } from "../models/Token";
import { TokenVersion } from "../models/TokenVersion";
import { TokenVersionState } from "../models/TokenVersionState";
import { TokenVersionType } from "../models/TokenVersionType";
import { TokenizationMode } from "../models/TokenizationMode";
import { TokenizedCardData } from "../models/TokenizedCardData";
import { TokenizedCardDataCreate } from "../models/TokenizedCardDataCreate";
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
import { TransactionLineItemVersionCreate } from "../models/TransactionLineItemVersionCreate";
import { TransactionLineItemVersionState } from "../models/TransactionLineItemVersionState";
import { TransactionState } from "../models/TransactionState";
import { TransactionUserInterfaceType } from "../models/TransactionUserInterfaceType";
import { TransactionVoidMode } from "../models/TransactionVoidMode";
import { TransactionVoidState } from "../models/TransactionVoidState";
import { TwoFactorAuthenticationType } from "../models/TwoFactorAuthenticationType";
import { User } from "../models/User";
import { UserAccountRole } from "../models/UserAccountRole";
import { UserSpaceRole } from "../models/UserSpaceRole";
import { UserType } from "../models/UserType";
import { WalletType } from "../models/WalletType";
import { WebAppConfirmationRequest } from "../models/WebAppConfirmationRequest";
import { WebAppConfirmationResponse } from "../models/WebAppConfirmationResponse";
import { WebhookIdentity } from "../models/WebhookIdentity";
import { WebhookListener } from "../models/WebhookListener";
import { WebhookListenerEntity } from "../models/WebhookListenerEntity";
import { WebhookUrl } from "../models/WebhookUrl";
import { AccountCreate } from "../models/AccountCreate";
import { AccountUpdate } from "../models/AccountUpdate";
import { ApplicationUser } from "../models/ApplicationUser";
import { ApplicationUserCreate } from "../models/ApplicationUserCreate";
import { ApplicationUserUpdate } from "../models/ApplicationUserUpdate";
import { AuthenticatedCardData } from "../models/AuthenticatedCardData";
import { Charge } from "../models/Charge";
import { ChargeAttempt } from "../models/ChargeAttempt";
import { ChargeBankTransaction } from "../models/ChargeBankTransaction";
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
import { InvoiceReconciliationRecord } from "../models/InvoiceReconciliationRecord";
import { InvoiceReimbursementWithRefundReference } from "../models/InvoiceReimbursementWithRefundReference";
import { PaymentLinkActive } from "../models/PaymentLinkActive";
import { PaymentLinkCreate } from "../models/PaymentLinkCreate";
import { RefundBankTransaction } from "../models/RefundBankTransaction";
import { RefundCommentActive } from "../models/RefundCommentActive";
import { RefundCommentCreate } from "../models/RefundCommentCreate";
import { RefundRecoveryBankTransaction } from "../models/RefundRecoveryBankTransaction";
import { ShopifyRecurringOrder } from "../models/ShopifyRecurringOrder";
import { ShopifySubscriptionAddress } from "../models/ShopifySubscriptionAddress";
import { ShopifySubscriptionProductCreate } from "../models/ShopifySubscriptionProductCreate";
import { ShopifySubscriptionProductUpdate } from "../models/ShopifySubscriptionProductUpdate";
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
        "AnalyticsQueryExecutionState": AnalyticsQueryExecutionState,
        "BankAccountEnvironment": BankAccountEnvironment,
        "BankAccountState": BankAccountState,
        "BankTransactionFlowDirection": BankTransactionFlowDirection,
        "BankTransactionState": BankTransactionState,
        "CardAuthenticationResponse": CardAuthenticationResponse,
        "CardAuthenticationVersion": CardAuthenticationVersion,
        "CardCryptogramType": CardCryptogramType,
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
        "InvoiceReconciliationRecordRejectionStatus": InvoiceReconciliationRecordRejectionStatus,
        "InvoiceReconciliationRecordState": InvoiceReconciliationRecordState,
        "InvoiceReimbursementState": InvoiceReimbursementState,
        "LabelDescriptorCategory": LabelDescriptorCategory,
        "LineItemType": LineItemType,
        "ManualTaskActionStyle": ManualTaskActionStyle,
        "ManualTaskState": ManualTaskState,
        "OneClickPaymentMode": OneClickPaymentMode,
        "PaymentContractState": PaymentContractState,
        "PaymentInitiationAdviceFileState": PaymentInitiationAdviceFileState,
        "PaymentLinkAddressHandlingMode": PaymentLinkAddressHandlingMode,
        "PaymentLinkProtectionMode": PaymentLinkProtectionMode,
        "PaymentPrimaryRiskTaker": PaymentPrimaryRiskTaker,
        "PaymentTerminalConfigurationState": PaymentTerminalConfigurationState,
        "PaymentTerminalConfigurationVersionState": PaymentTerminalConfigurationVersionState,
        "PaymentTerminalLocationState": PaymentTerminalLocationState,
        "PaymentTerminalLocationVersionState": PaymentTerminalLocationVersionState,
        "PaymentTerminalState": PaymentTerminalState,
        "RecurringIndicator": RecurringIndicator,
        "RefundState": RefundState,
        "RefundType": RefundType,
        "ResourceState": ResourceState,
        "RestAddressFormatField": RestAddressFormatField,
        "RoleState": RoleState,
        "ShopifyAdditionalLineItemData": ShopifyAdditionalLineItemData,
        "ShopifyIntegrationPaymentAppVersion": ShopifyIntegrationPaymentAppVersion,
        "ShopifyIntegrationSubscriptionAppVersion": ShopifyIntegrationSubscriptionAppVersion,
        "ShopifyRecurringOrderState": ShopifyRecurringOrderState,
        "ShopifySubscriberState": ShopifySubscriberState,
        "ShopifySubscriptionBillingIntervalUnit": ShopifySubscriptionBillingIntervalUnit,
        "ShopifySubscriptionProductPricingOption": ShopifySubscriptionProductPricingOption,
        "ShopifySubscriptionProductState": ShopifySubscriptionProductState,
        "ShopifySubscriptionState": ShopifySubscriptionState,
        "ShopifySubscriptionSuspensionInitiator": ShopifySubscriptionSuspensionInitiator,
        "ShopifySubscriptionSuspensionState": ShopifySubscriptionSuspensionState,
        "ShopifySubscriptionSuspensionType": ShopifySubscriptionSuspensionType,
        "ShopifySubscriptionVersionItemPriceStrategy": ShopifySubscriptionVersionItemPriceStrategy,
        "ShopifySubscriptionVersionState": ShopifySubscriptionVersionState,
        "ShopifySubscriptionWeekday": ShopifySubscriptionWeekday,
        "ShopifyTransactionState": ShopifyTransactionState,
        "TerminalReceiptFormat": TerminalReceiptFormat,
        "TokenVersionState": TokenVersionState,
        "TokenizationMode": TokenizationMode,
        "TransactionCompletionBehavior": TransactionCompletionBehavior,
        "TransactionCompletionMode": TransactionCompletionMode,
        "TransactionCompletionState": TransactionCompletionState,
        "TransactionEnvironmentSelectionStrategy": TransactionEnvironmentSelectionStrategy,
        "TransactionGroupState": TransactionGroupState,
        "TransactionInvoiceState": TransactionInvoiceState,
        "TransactionLineItemVersionState": TransactionLineItemVersionState,
        "TransactionState": TransactionState,
        "TransactionUserInterfaceType": TransactionUserInterfaceType,
        "TransactionVoidMode": TransactionVoidMode,
        "TransactionVoidState": TransactionVoidState,
        "UserType": UserType,
        "WalletType": WalletType,
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
                "AbstractShopifySubscriptionProductUpdate": AbstractShopifySubscriptionProductUpdate,
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
                "AnalyticsQuery": AnalyticsQuery,
                "AnalyticsQueryExecution": AnalyticsQueryExecution,
                "AnalyticsQueryResultBatch": AnalyticsQueryResultBatch,
                "AnalyticsSchemaColumn": AnalyticsSchemaColumn,
                "AnalyticsSchemaTable": AnalyticsSchemaTable,
                "AuthenticatedCardDataCreate": AuthenticatedCardDataCreate,
                "BankAccount": BankAccount,
                "BankAccountType": BankAccountType,
                "BankTransaction": BankTransaction,
                "BankTransactionSource": BankTransactionSource,
                "BankTransactionType": BankTransactionType,
                "CardCryptogram": CardCryptogram,
                "CardCryptogramCreate": CardCryptogramCreate,
                "CardholderAuthentication": CardholderAuthentication,
                "CardholderAuthenticationCreate": CardholderAuthenticationCreate,
                "ChargeFlow": ChargeFlow,
                "ChargeFlowLevelConfiguration": ChargeFlowLevelConfiguration,
                "ChargeFlowLevelConfigurationType": ChargeFlowLevelConfigurationType,
                "ClientError": ClientError,
                "CompletionLineItem": CompletionLineItem,
                "CompletionLineItemCreate": CompletionLineItemCreate,
                "Condition": Condition,
                "ConditionType": ConditionType,
                "CurrencyBankAccount": CurrencyBankAccount,
                "Customer": Customer,
                "CustomerAddress": CustomerAddress,
                "CustomerComment": CustomerComment,
                "CustomerPostalAddress": CustomerPostalAddress,
                "CustomerPostalAddressCreate": CustomerPostalAddressCreate,
                "DeliveryIndicationDecisionReason": DeliveryIndicationDecisionReason,
                "DocumentTemplate": DocumentTemplate,
                "DocumentTemplateType": DocumentTemplateType,
                "DocumentTemplateTypeGroup": DocumentTemplateTypeGroup,
                "EntityExportRequest": EntityExportRequest,
                "EntityQuery": EntityQuery,
                "EntityQueryFilter": EntityQueryFilter,
                "EntityQueryOrderBy": EntityQueryOrderBy,
                "ExternalTransferBankTransaction": ExternalTransferBankTransaction,
                "FailureReason": FailureReason,
                "Feature": Feature,
                "FeatureCategory": FeatureCategory,
                "HumanUser": HumanUser,
                "InternalTransferBankTransaction": InternalTransferBankTransaction,
                "InvoiceReconciliationRecordInvoiceLink": InvoiceReconciliationRecordInvoiceLink,
                "InvoiceReconciliationRecordType": InvoiceReconciliationRecordType,
                "InvoiceReimbursement": InvoiceReimbursement,
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
                "PaymentAdjustment": PaymentAdjustment,
                "PaymentAdjustmentType": PaymentAdjustmentType,
                "PaymentConnector": PaymentConnector,
                "PaymentConnectorConfiguration": PaymentConnectorConfiguration,
                "PaymentConnectorFeature": PaymentConnectorFeature,
                "PaymentContract": PaymentContract,
                "PaymentContractType": PaymentContractType,
                "PaymentInformationHash": PaymentInformationHash,
                "PaymentInformationHashType": PaymentInformationHashType,
                "PaymentInitiationAdviceFile": PaymentInitiationAdviceFile,
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
                "PaymentTerminalDccTransactionSum": PaymentTerminalDccTransactionSum,
                "PaymentTerminalLocation": PaymentTerminalLocation,
                "PaymentTerminalLocationVersion": PaymentTerminalLocationVersion,
                "PaymentTerminalReceiptType": PaymentTerminalReceiptType,
                "PaymentTerminalTransactionSum": PaymentTerminalTransactionSum,
                "PaymentTerminalTransactionSummary": PaymentTerminalTransactionSummary,
                "PaymentTerminalTransactionSummaryFetchRequest": PaymentTerminalTransactionSummaryFetchRequest,
                "PaymentTerminalType": PaymentTerminalType,
                "Permission": Permission,
                "Refund": Refund,
                "RefundComment": RefundComment,
                "RefundCreate": RefundCreate,
                "RenderedDocument": RenderedDocument,
                "RenderedTerminalReceipt": RenderedTerminalReceipt,
                "RenderedTerminalTransactionSummary": RenderedTerminalTransactionSummary,
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
                "ShopifyRecurringOrderUpdateRequest": ShopifyRecurringOrderUpdateRequest,
                "ShopifySubscriber": ShopifySubscriber,
                "ShopifySubscriberActive": ShopifySubscriberActive,
                "ShopifySubscriberCreation": ShopifySubscriberCreation,
                "ShopifySubscription": ShopifySubscription,
                "ShopifySubscriptionAddressCreate": ShopifySubscriptionAddressCreate,
                "ShopifySubscriptionCreationRequest": ShopifySubscriptionCreationRequest,
                "ShopifySubscriptionModelBillingConfiguration": ShopifySubscriptionModelBillingConfiguration,
                "ShopifySubscriptionModelItem": ShopifySubscriptionModelItem,
                "ShopifySubscriptionModelTaxLine": ShopifySubscriptionModelTaxLine,
                "ShopifySubscriptionProduct": ShopifySubscriptionProduct,
                "ShopifySubscriptionSuspension": ShopifySubscriptionSuspension,
                "ShopifySubscriptionSuspensionCreate": ShopifySubscriptionSuspensionCreate,
                "ShopifySubscriptionUpdateAddressesRequest": ShopifySubscriptionUpdateAddressesRequest,
                "ShopifySubscriptionUpdateRequest": ShopifySubscriptionUpdateRequest,
                "ShopifySubscriptionVersion": ShopifySubscriptionVersion,
                "ShopifySubscriptionVersionItem": ShopifySubscriptionVersionItem,
                "ShopifyTaxLine": ShopifyTaxLine,
                "Space": Space,
                "SpaceAddress": SpaceAddress,
                "SpaceAddressCreate": SpaceAddressCreate,
                "SpaceView": SpaceView,
                "StaticValue": StaticValue,
                "Tax": Tax,
                "TaxCreate": TaxCreate,
                "TenantDatabase": TenantDatabase,
                "TerminalReceiptFetchRequest": TerminalReceiptFetchRequest,
                "Token": Token,
                "TokenVersion": TokenVersion,
                "TokenVersionType": TokenVersionType,
                "TokenizedCardData": TokenizedCardData,
                "TokenizedCardDataCreate": TokenizedCardDataCreate,
                "Transaction": Transaction,
                "TransactionAwareEntity": TransactionAwareEntity,
                "TransactionComment": TransactionComment,
                "TransactionCompletionRequest": TransactionCompletionRequest,
                "TransactionGroup": TransactionGroup,
                "TransactionInvoiceComment": TransactionInvoiceComment,
                "TransactionInvoiceReplacement": TransactionInvoiceReplacement,
                "TransactionLineItemVersionCreate": TransactionLineItemVersionCreate,
                "TwoFactorAuthenticationType": TwoFactorAuthenticationType,
                "User": User,
                "UserAccountRole": UserAccountRole,
                "UserSpaceRole": UserSpaceRole,
                "WebAppConfirmationRequest": WebAppConfirmationRequest,
                "WebAppConfirmationResponse": WebAppConfirmationResponse,
                "WebhookIdentity": WebhookIdentity,
                "WebhookListener": WebhookListener,
                "WebhookListenerEntity": WebhookListenerEntity,
                "WebhookUrl": WebhookUrl,
                "AccountCreate": AccountCreate,
                "AccountUpdate": AccountUpdate,
                "ApplicationUser": ApplicationUser,
                "ApplicationUserCreate": ApplicationUserCreate,
                "ApplicationUserUpdate": ApplicationUserUpdate,
                "AuthenticatedCardData": AuthenticatedCardData,
                "Charge": Charge,
                "ChargeAttempt": ChargeAttempt,
                "ChargeBankTransaction": ChargeBankTransaction,
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
                "InvoiceReconciliationRecord": InvoiceReconciliationRecord,
                "InvoiceReimbursementWithRefundReference": InvoiceReimbursementWithRefundReference,
                "PaymentLinkActive": PaymentLinkActive,
                "PaymentLinkCreate": PaymentLinkCreate,
                "RefundBankTransaction": RefundBankTransaction,
                "RefundCommentActive": RefundCommentActive,
                "RefundCommentCreate": RefundCommentCreate,
                "RefundRecoveryBankTransaction": RefundRecoveryBankTransaction,
                "ShopifyRecurringOrder": ShopifyRecurringOrder,
                "ShopifySubscriptionAddress": ShopifySubscriptionAddress,
                "ShopifySubscriptionProductCreate": ShopifySubscriptionProductCreate,
                "ShopifySubscriptionProductUpdate": ShopifySubscriptionProductUpdate,
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