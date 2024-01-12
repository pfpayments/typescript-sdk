"use strict";

import { expect } from "chai";
import http from "http";

import { PostFinanceCheckout } from "../index";

import {
    ApiConfig,
    FakeCardData,
    HttpStatus_Ok,
    TestCardPaymentMethodConfigurationId,
    TestCustomerId,
    getTransactionCreate
} from "./constants";

const transactionService = new PostFinanceCheckout.api.TransactionService(ApiConfig);
const cardProcessingService = new PostFinanceCheckout.api.CardProcessingService(ApiConfig);
const tokenService = new PostFinanceCheckout.api.TokenService(ApiConfig);
const transactionCompletionService = new PostFinanceCheckout.api.TransactionCompletionService(ApiConfig);


describe("TransactionService", () => {
    describe("create()", () => {
        it("should create transaction with given properties", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .done((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const transaction = response.body;
                    expect(transaction.state).to.equal(PostFinanceCheckout.model.TransactionState.PENDING);
                    done();
                });
        });
    });

    describe("confirm()", () => {
        it("should mark transaction as confirmed", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const transaction = response.body;

                    const transactionPending = new PostFinanceCheckout.model.TransactionPending();
                    transactionPending.id = transaction.id as number;
                    transactionPending.version = transaction.version as number;

                    return transactionService.confirm(ApiConfig.space_id, transactionPending);
                })
                .done((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const transaction = response.body;
                    expect(transaction.state).to.equal(PostFinanceCheckout.model.TransactionState.CONFIRMED);
                    done();
                });
        });
    });

    describe("create() with COMPLETE_DEFERRED transaction behaviour", () => {
        it("should make transaction Authorized when we pay with card details", (done) => {
            const transaction = getTransactionCreate();
            transaction.tokenizationMode = PostFinanceCheckout.model.TokenizationMode.FORCE_CREATION;
            transaction.customersPresence = PostFinanceCheckout.model.CustomersPresence.NOT_PRESENT;
            transaction.completionBehavior = PostFinanceCheckout.model.TransactionCompletionBehavior.COMPLETE_DEFERRED;

            transactionService.create(ApiConfig.space_id, transaction)
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const processedTransactionId = response.body.id as number;
                    return cardProcessingService.process(ApiConfig.space_id, processedTransactionId,
                        TestCardPaymentMethodConfigurationId,
                        FakeCardData);
                })
                .done((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    expect(response.body.state).to.equal(PostFinanceCheckout.model.TransactionState.AUTHORIZED);
                    done();
                });
        });
    });

    describe("create() with COMPLETE_IMMEDIATELY transaction behaviour", () => {
        it("should make transaction Filfilled when we pay with card details", (done) => {
            const cardPaidTransaction = getTransactionCreate();
            cardPaidTransaction.tokenizationMode = PostFinanceCheckout.model.TokenizationMode.FORCE_CREATION;
            cardPaidTransaction.customersPresence = PostFinanceCheckout.model.CustomersPresence.NOT_PRESENT;
            cardPaidTransaction.completionBehavior = PostFinanceCheckout.model.TransactionCompletionBehavior.COMPLETE_IMMEDIATELY;

            transactionService.create(ApiConfig.space_id, cardPaidTransaction)
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const processedTransactionId = response.body.id as number;
                    return cardProcessingService.process(ApiConfig.space_id, processedTransactionId,
                        TestCardPaymentMethodConfigurationId,
                        FakeCardData);
                })
                .done((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    expect(response.body.state).to.equal(PostFinanceCheckout.model.TransactionState.FULFILL);
                    done();
                });
        });
    });

    describe("count()", () => {
        it("should count transactions matching given criteria", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const transaction = response.body;

                    const criteria: PostFinanceCheckout.model.EntityQueryFilter = {
                        fieldName: "id",
                        value: transaction.id,
                        type: PostFinanceCheckout.model.EntityQueryFilterType.LEAF,
                        operator: PostFinanceCheckout.model.CriteriaOperator.EQUALS
                    };

                    return transactionService.count(ApiConfig.space_id, criteria);
                })
                .done((response: { response: http.IncomingMessage, body: number }) => {
                    const transactionCount: number = response.body;
                    expect(transactionCount).to.equal(1);
                    done();
                });
        });
    });

    describe("createTransactionCredentials()", () => {
        it("should create valid transaction credentials token", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const transactionId = response.body.id as number;
                    return transactionService.createTransactionCredentials(ApiConfig.space_id, transactionId);
                })
                .done((response: { response: http.IncomingMessage, body: string }) => {
                    expect(response.body.startsWith(`${ApiConfig.space_id}-`)).to.be.true;
                    done();
                });
        });
    });

    describe("fetchPaymentMethods()", () => {
        it("should fetch payment methods available for the transaction", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const transactionId = response.body.id as number;
                    return transactionService.fetchPaymentMethods(ApiConfig.space_id, transactionId, "payment_page");
                })
                .done((response: { response: http.IncomingMessage, body: Array<PostFinanceCheckout.model.PaymentMethodConfiguration> }) => {
                    const paymentMethods: Array<PostFinanceCheckout.model.PaymentMethodConfiguration> = response.body;
                    expect(paymentMethods).to.be.an("array");
                    done();
                });
        });
    });

    describe("read()", () => {
        it("shoud read transaction details", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const transactionId = response.body.id as number;
                    return transactionService.read(ApiConfig.space_id, transactionId);
                })
                .done((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const transaction = response.body;
                    expect(transaction.state).to.equal(PostFinanceCheckout.model.TransactionState.PENDING);
                    done();
                });
        });
    });

    describe("readWithCredentials()", () => {
        it("should fail when credentials are bad", (done) => {
            transactionService.readWithCredentials("invalid_token")
                .done(undefined, (errorResponse) => {
                    done();
                });
        });

        it("should read transaction when valid credentials token is provided", (done) => {
            let newTransactionId = -1;

            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    newTransactionId = response.body.id as number;

                    return transactionService.createTransactionCredentials(ApiConfig.space_id, newTransactionId);
                })
                .then((response: { response: http.IncomingMessage, body: string }) => {
                    const token = response.body;
                    return transactionService.readWithCredentials(token);
                })
                .done((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    expect(response.body.id).to.equal(newTransactionId);
                    done();
                });
        });
    });

    describe("search()", () => {
        it("should find transaction by id", (done) => {
            let transaction: PostFinanceCheckout.model.Transaction;

            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    transaction = response.body;

                    const criteria: PostFinanceCheckout.model.EntityQuery = {
                        filter: {
                            fieldName: "id",
                            value: transaction.id,
                            type: PostFinanceCheckout.model.EntityQueryFilterType.LEAF,
                            operator: PostFinanceCheckout.model.CriteriaOperator.EQUALS
                        }
                    };

                    return transactionService.search(ApiConfig.space_id, criteria);
                })
                .done((response: { response: http.IncomingMessage, body: Array<PostFinanceCheckout.model.Transaction> }) => {
                    const transactionSearch: Array<PostFinanceCheckout.model.Transaction> = response.body;

                    transactionSearch.forEach((entry) => {
                        expect(entry.id).to.equal(transaction.id);
                    });

                    done();
                });
        });
    });

    describe("update()", () => {
        it("should successfully update existing transaction", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const transaction = response.body;

                    const update = new PostFinanceCheckout.model.TransactionPending();
                    update.id = transaction.id as number;
                    update.version = transaction.version as number;
                    update.language = "es-US";

                    return transactionService.update(ApiConfig.space_id, update);
                })
                .done((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const transaction = response.body;
                    expect(transaction.language).to.equal("es-US");
                    done();
                });
        });
    });

    describe("processWithoutUserInteraction()", () => {
        it("should correctly process created transaction without need for user interaction", (done) => {
            let transactionId = -1;

            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    transactionId = response.body.id as number;

                    return transactionService.processWithoutUserInteraction(ApiConfig.space_id, transactionId);
                })
                .done((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const processedTransactionId = response.body.id;
                    expect(processedTransactionId).to.equal(transactionId);
                    done();
                });
        });
    });

    describe("fetchOneClickTokensWithCredentials()", () => {
        it("should return one-click payment tokens (if any) for provided transaction", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const transactionId = response.body.id as number;
                    return transactionService.createTransactionCredentials(ApiConfig.space_id, transactionId);
                })
                .then((response: { response: http.IncomingMessage, body: string }) => {
                    const token = response.body;
                    return transactionService.fetchOneClickTokensWithCredentials(token);
                })
                .done((response: { response: http.IncomingMessage, body: Array<PostFinanceCheckout.model.TokenVersion> }) => {
                    const tokenVersions = response.body;
                    expect(tokenVersions).to.have.all.members([]);
                    done();
                });
        });
    });

    describe("fetchPaymentMethodsWithCredentials()", () => {
        it("should return payment methods for token credentials", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                    const transactionId = response.body.id as number;
                    return transactionService.createTransactionCredentials(ApiConfig.space_id, transactionId);
                })
                .then((response: { response: http.IncomingMessage, body: string }) => {
                    const token = response.body;
                    const integrationMode = "payment_page";
                    return transactionService.fetchPaymentMethodsWithCredentials(token, integrationMode);
                })
                .done((response: { response: http.IncomingMessage, body: Array<PostFinanceCheckout.model.PaymentMethodConfiguration> }) => {
                    const methods = response.body;
                    expect(methods).to.be.an("array").that.is.not.empty;
                    done();
                });
        });
    });

    describe("processOneClickTokenAndRedirectWithCredentials()", () => {
        let token: PostFinanceCheckout.model.Token;
        let firstTransactionId = -1;
        let secondTransactionId = -1;

        it("should create URL that can be used to authorize 2nd transaction after we have created token for 1st authorized transaction",
            (done) => {
                const cardPaidTransaction = getTransactionCreate();
                cardPaidTransaction.tokenizationMode = PostFinanceCheckout.model.TokenizationMode.FORCE_CREATION_WITH_ONE_CLICK_PAYMENT;
                cardPaidTransaction.customersPresence = PostFinanceCheckout.model.CustomersPresence.NOT_PRESENT;
                cardPaidTransaction.completionBehavior = PostFinanceCheckout.model.TransactionCompletionBehavior.COMPLETE_DEFERRED;
                cardPaidTransaction.customerId = TestCustomerId + "";

                transactionService.create(ApiConfig.space_id, cardPaidTransaction)
                    .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                        // authorize 1st transaction with card

                        firstTransactionId = response.body.id as number;
                        return cardProcessingService.process(ApiConfig.space_id, firstTransactionId,
                            TestCardPaymentMethodConfigurationId,
                            FakeCardData);
                    })
                    .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                        // create token for authorized transaction

                        const transactionId = response.body.id as number;
                        return tokenService.createToken(ApiConfig.space_id, transactionId);
                    })
                    .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Token }) => {
                        // make token one-click-payment enabled

                        const token = response.body;

                        return tokenService.update(ApiConfig.space_id, {
                            id: token.id as number,
                            version: token.version as number,
                            enabledForOneClickPayment: true
                        });
                    })
                    .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Token }) => {
                        // create 2nd transaction

                        token = response.body;

                        const newTransaction = getTransactionCreate();
                        newTransaction.tokenizationMode = PostFinanceCheckout.model.TokenizationMode.FORCE_CREATION_WITH_ONE_CLICK_PAYMENT;
                        newTransaction.customersPresence = PostFinanceCheckout.model.CustomersPresence.NOT_PRESENT;
                        newTransaction.completionBehavior = PostFinanceCheckout.model.TransactionCompletionBehavior.COMPLETE_DEFERRED;
                        newTransaction.customerId = TestCustomerId + "";

                        return transactionService.create(ApiConfig.space_id, newTransaction);
                    })
                    .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                        // create creds token for 2nd transaction

                        secondTransactionId = response.body.id as number;
                        return transactionService.createTransactionCredentials(ApiConfig.space_id, secondTransactionId);
                    })
                    .then((response: { response: http.IncomingMessage, body: string }) => {
                        // create authorization URL for  transaction and creds token

                        const transactionCredentials = response.body;
                        const tokenId = token.id as number;
                        return transactionService.processOneClickTokenAndRedirectWithCredentials(transactionCredentials, tokenId);
                    })
                    .then((response: { response: http.IncomingMessage, body: string }) => {
                        const paymentUrl = response.body;

                        expect(paymentUrl.includes("securityToken")).to.be.true;

                        // check 2nd transaction
                        return transactionService.read(ApiConfig.space_id, secondTransactionId);
                    })
                    .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.Transaction }) => {
                        expect(response.body.state).to.equal(PostFinanceCheckout.model.TransactionState.AUTHORIZED);

                        // cleanup after our flow - complete 2nd transaction
                        return transactionCompletionService.completeOnline(ApiConfig.space_id, secondTransactionId);
                    })
                    .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.TransactionCompletion }) => {
                        expect(response.body.state).to.equal(PostFinanceCheckout.model.TransactionCompletionState.SUCCESSFUL);

                        // cleanup after our flow - complete 1st transaction
                        return transactionCompletionService.completeOnline(ApiConfig.space_id, firstTransactionId);
                    })
                    .then((response: { response: http.IncomingMessage, body: PostFinanceCheckout.model.TransactionCompletion }) => {
                        expect(response.body.state).to.equal(PostFinanceCheckout.model.TransactionCompletionState.SUCCESSFUL);

                        const tokenId = token.id as number;

                        // cleanup after our flow - delete token
                        return tokenService._delete(ApiConfig.space_id, tokenId);
                    })
                    .done((response: { response: http.IncomingMessage }) => {
                        expect(response.response.statusCode).to.equal(HttpStatus_Ok);
                        done();
                    });
            });
    });
});
