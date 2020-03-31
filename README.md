[![Build Status](https://travis-ci.org/pfpayments/typescript-sdk.svg?branch=master)](https://travis-ci.org/pfpayments/typescript-sdk)

# PostFinance Checkout TypeScript Library

The PostFinance Checkout TypeScript library wraps around the PostFinance Checkout API. This library facilitates your interaction with various services such as transactions, accounts, and subscriptions.


## Documentation

[PostFinance Checkout Web Service API](https://checkout.postfinance.ch/doc/api/web-service)

## Requirements

- npm 6+

## Installation

## NPM install (recommended)
```sh
npm install postfinancecheckout
```

## Usage
The library needs to be configured with your account's space id, user id, and secret key which are available in your [PostFinance Checkout
account dashboard](https://checkout.postfinance.ch/account/select). Set `space_id`, `user_id`, and `api_secret` to their values.

### Configuring a Service

```typescript
'use strict';
import { PostFinanceCheckout } from 'postfinancecheckout';

let macVersion: number = 1;
let spaceId: number = 405;
let userId: number = 512;
let apiSecret: string = 'FKrO76r5VwJtBrqZawBspljbBNOxp5veKQQkOnZxucQ=';

let config = {
    mac_version: macVersion,
    space_id: spaceId,
    user_id: userId,
    api_secret: apiSecret
}

// Transaction Service
let transactionService: PostFinanceCheckout.api.TransactionService = new PostFinanceCheckout.api.TransactionService(config);

```

To get started with sending transactions, please review the example below:

```typescript
'use strict';
import { PostFinanceCheckout } from 'postfinancecheckout';

let macVersion: number = 1;
let spaceId: number = 405;
let userId: number = 512;
let apiSecret: string = 'FKrO76r5VwJtBrqZawBspljbBNOxp5veKQQkOnZxucQ=';

let config = {
    mac_version: macVersion,
    space_id: spaceId,
    user_id: userId,
    api_secret: apiSecret
}

// Transaction Service
let transactionService: PostFinanceCheckout.api.TransactionService = new PostFinanceCheckout.api.TransactionService(config);

// TransactionPaymentPage Service
let transactionPaymentPageService: PostFinanceCheckout.api.TransactionPaymentPageService = new PostFinanceCheckout.api.TransactionPaymentPageService(config);

// LineItem of type PRODUCT
let lineItem: PostFinanceCheckout.model.LineItemCreate = new PostFinanceCheckout.model.LineItemCreate();
lineItem.name='Red T-Shirt';
lineItem.uniqueId='5412';
lineItem.sku='red-t-shirt-123';
lineItem.quantity=1;
lineItem.amountIncludingTax=3.50;
lineItem.type=PostFinanceCheckout.model.LineItemType.PRODUCT;

// Transaction
let transaction: PostFinanceCheckout.model.TransactionCreate = new PostFinanceCheckout.model.TransactionCreate();
transaction.lineItems=[lineItem];
transaction.autoConfirmationEnabled=true;
transaction.currency='EUR';

transactionService.create(spaceId, transaction).then(function (response) {
    let transactionCreate: PostFinanceCheckout.model.Transaction = response.body;
    transactionPaymentPageService.paymentPageUrl(spaceId, <number> transactionCreate.id).then(function (response) {
        let pageUrl: string = response.body;
        // window.location.href = pageUrl;
    });
});

```

## License

Please see the [license file](https://github.com/pfpayments/typescript-sdk/blob/master/LICENSE) for more information.