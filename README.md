# PostFinance Checkout TypeScript Library

The PostFinance Checkout TypeScript library wraps around the PostFinance Checkout API. This library facilitates your interaction with various services such as transactions, accounts, and subscriptions.


## Documentation

[PostFinance Checkout Web Service API](https://checkout.postfinance.ch/doc/api/web-service)

## Requirements

- npm 6+

## Installation
>**_NOTE:_** Highly recommended to use TypeScript SDK in server-side applications.<br>
Use front-end frameworks such as Angular at your own risk, as the application might be incompatible or cause a potential threat that the application user information (such as secret keys) might be revealed publicly in the browser.

## NPM install (recommended)
```sh
npm install postfinancecheckout
```

## Usage
The library needs to be configured with your account's space id, user id, and secret key which are available in your [PostFinance Checkout
account dashboard](https://checkout.postfinance.ch/account/select). Set `space_id`, `user_id`, and `api_secret` to their values. You can also add custom default headers to the configuration.

### Configuring a Service

```typescript
'use strict';
import { PostFinanceCheckout } from 'postfinancecheckout';

let spaceId: number = 405;
let userId: number = 512;
let apiSecret: string = 'FKrO76r5VwJtBrqZawBspljbBNOxp5veKQQkOnZxucQ=';

let config = {
    space_id: spaceId,
    user_id: userId,
    api_secret: apiSecret
    default_headers: {
        'x-meta-header-name-1': 'header-value-1',
        'x-meta-header-name-2': 'header-value-2'
    }
}

// Transaction Service
let transactionService: PostFinanceCheckout.api.TransactionService = new PostFinanceCheckout.api.TransactionService(config);

```

To get started with sending transactions, please review the example below:

```typescript
'use strict';
import { PostFinanceCheckout } from 'postfinancecheckout';

let spaceId: number = 405;
let userId: number = 512;
let apiSecret: string = 'FKrO76r5VwJtBrqZawBspljbBNOxp5veKQQkOnZxucQ=';

let config = {
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

transactionService.create(spaceId, transaction).then((response) => {
    let transactionCreate: PostFinanceCheckout.model.Transaction = response.body;
    transactionPaymentPageService.paymentPageUrl(spaceId, <number> transactionCreate.id).then(function (response) {
        let pageUrl: string = response.body;
        // window.location.href = pageUrl;
    });
});

```

### Configure connection timeout
Connection timeout determines how long the request can take, before cutting off the connection. Same value applies both to inner 'Read timeout' and 'Connection timeout' of a [NPM request module](https://www.npmjs.com/package/request).

Default connection timeout is 25s.


Connection timeout can be set 2 ways:

1. Via configuration property 'timeout' providing value in seconds.
```
let config = {
    ... other properties ...
    timeout: 15
}
let transactionService: PostFinanceCheckout.api.TransactionService = new PostFinanceCheckout.api.TransactionService(config);
```

2. Via service property 'timeout' providing value in seconds
```
let config = {
    ... properties ...
}
let transactionService: PostFinanceCheckout.api.TransactionService = new PostFinanceCheckout.api.TransactionService(config);
transactionService.timeout = 15;
```

## License

Please see the [license file](https://github.com/pfpayments/typescript-sdk/blob/master/LICENSE) for more information.