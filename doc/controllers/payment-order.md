# Payment Order

```ts
const paymentOrderController = new PaymentOrderController(client);
```

## Class Name

`PaymentOrderController`

## Methods

* [Create Async Payment Order](../../doc/controllers/payment-order.md#create-async-payment-order)
* [List Payment Orders](../../doc/controllers/payment-order.md#list-payment-orders)
* [Create Payment Order](../../doc/controllers/payment-order.md#create-payment-order)
* [Get Payment Order](../../doc/controllers/payment-order.md#get-payment-order)
* [Update Payment Order](../../doc/controllers/payment-order.md#update-payment-order)


# Create Async Payment Order

Create a new payment order asynchronously

```ts
async createAsyncPaymentOrder(
  idempotencyKey?: string,
  body?: PaymentOrderAsyncCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AsyncResponse>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`PaymentOrderAsyncCreateRequest \| undefined`](../../doc/models/payment-order-async-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**202**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AsyncResponse`](../../doc/models/async-response.md).

## Example Usage

```ts
const body: PaymentOrderAsyncCreateRequest = {
  type: Type5.Neft,
  amount: 218,
  direction: Direction5.Credit,
  originatingAccountId: '000022b4-0000-0000-0000-000000000000',
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await paymentOrderController.createAsyncPaymentOrder(
    undefined,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorMessageError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# List Payment Orders

Get a list of all payment orders

```ts
async listPaymentOrders(
  afterCursor?: string | null,
  perPage?: number,
  type?: Type13,
  priority?: Priority4,
  counterpartyId?: string,
  originatingAccountId?: string,
  transactionId?: string,
  status?: Status24,
  direction?: Direction15,
  referenceNumber?: string,
  effectiveDateStart?: string,
  effectiveDateEnd?: string,
  metadata?: Record<string, string>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentOrder[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `type` | [`Type13 \| undefined`](../../doc/models/type-13.md) | Query, Optional | - |
| `priority` | [`Priority4 \| undefined`](../../doc/models/priority-4.md) | Query, Optional | Either `normal` or `high`. For ACH and EFT payments, `high` represents a same-day ACH or EFT transfer, respectively. For check payments, `high` can mean an overnight check rather than standard mail. |
| `counterpartyId` | `string \| undefined` | Query, Optional | - |
| `originatingAccountId` | `string \| undefined` | Query, Optional | - |
| `transactionId` | `string \| undefined` | Query, Optional | The ID of a transaction that the payment order has been reconciled to. |
| `status` | [`Status24 \| undefined`](../../doc/models/status-24.md) | Query, Optional | - |
| `direction` | [`Direction15 \| undefined`](../../doc/models/direction-15.md) | Query, Optional | - |
| `referenceNumber` | `string \| undefined` | Query, Optional | Query for records with the provided reference number |
| `effectiveDateStart` | `string \| undefined` | Query, Optional | An inclusive lower bound for searching effective_date |
| `effectiveDateEnd` | `string \| undefined` | Query, Optional | An inclusive upper bound for searching effective_date |
| `metadata` | `Record<string, string> \| undefined` | Query, Optional | For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentOrder[]`](../../doc/models/payment-order.md).

## Example Usage

```ts
try {
  const response = await paymentOrderController.listPaymentOrders();

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Create Payment Order

Create a new Payment Order

```ts
async createPaymentOrder(
  type: Type5,
  amount: number,
  direction: Direction5,
  originatingAccountId: string,
  contentType?: ContentType,
  idempotencyKey?: string,
  subtype?: Subtype | null,
  priority?: Priority,
  receivingAccountId?: string,
  accounting?: Accounting,
  accountingCategoryId?: string | null,
  accountingLedgerClassId?: string | null,
  currency?: Currency,
  effectiveDate?: string,
  description?: string | null,
  statementDescriptor?: string | null,
  remittanceInformation?: string | null,
  purpose?: string | null,
  metadata?: Record<string, string>,
  chargeBearer?: ChargeBearer | null,
  foreignExchangeIndicator?: ForeignExchangeIndicator | null,
  foreignExchangeContract?: string | null,
  nsfProtected?: boolean,
  originatingPartyName?: string | null,
  ultimateOriginatingPartyName?: string | null,
  ultimateOriginatingPartyIdentifier?: string | null,
  ultimateReceivingPartyName?: string | null,
  ultimateReceivingPartyIdentifier?: string | null,
  sendRemittanceAdvice?: boolean | null,
  expiresAt?: string | null,
  fallbackType?: FallbackType,
  receivingAccount?: ReceivingAccount1,
  ledgerTransaction?: LedgerTransactionCreateRequest,
  lineItems?: LineItemRequest[],
  transactionMonitoringEnabled?: boolean,
  documents?: DocumentCreateRequest[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentOrder>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type5`](../../doc/models/type-5.md) | Form, Required | One of `ach`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`, `bacs`, `au_becs`, `interac`, `signet`, `provexchange`. |
| `amount` | `number` | Form, Required | Value in specified currency's smallest unit. e.g. $10 would be represented as 1000 (cents). For RTP, the maximum amount allowed by the network is $100,000. |
| `direction` | [`Direction5`](../../doc/models/direction-5.md) | Form, Required | One of `credit`, `debit`. Describes the direction money is flowing in the transaction. A `credit` moves money from your account to someone else's. A `debit` pulls money from someone else's account to your own. Note that wire, rtp, and check payments will always be `credit`. |
| `originatingAccountId` | `string` | Form, Required | The ID of one of your organization's internal accounts. |
| `contentType` | [`ContentType \| undefined`](../../doc/models/content-type.md) | Header, Optional | - |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `subtype` | [`Subtype \| null \| undefined`](../../doc/models/subtype.md) | Form, Optional | An additional layer of classification for the type of payment order you are doing. This field is only used for `ach` payment orders currently. For `ach`  payment orders, the `subtype`  represents the SEC code. We currently support `CCD`, `PPD`, `IAT`, `CTX`, `WEB`, `CIE`, and `TEL`. |
| `priority` | [`Priority \| undefined`](../../doc/models/priority.md) | Form, Optional | Either `normal` or `high`. For ACH and EFT payments, `high` represents a same-day ACH or EFT transfer, respectively. For check payments, `high` can mean an overnight check rather than standard mail. |
| `receivingAccountId` | `string \| undefined` | Form, Optional | Either `receiving_account` or `receiving_account_id` must be present. When using `receiving_account_id`, you may pass the id of an external account or an internal account. |
| `accounting` | [`Accounting \| undefined`](../../doc/models/accounting.md) | Form, Optional | - |
| `accountingCategoryId` | `string \| null \| undefined` | Form, Optional | The ID of one of your accounting categories. Note that these will only be accessible if your accounting system has been connected. |
| `accountingLedgerClassId` | `string \| null \| undefined` | Form, Optional | The ID of one of your accounting ledger classes. Note that these will only be accessible if your accounting system has been connected. |
| `currency` | [`Currency \| undefined`](../../doc/models/currency.md) | Form, Optional | Three-letter ISO currency code. |
| `effectiveDate` | `string \| undefined` | Form, Optional | Date transactions are to be posted to the participants' account. Defaults to the current business day or the next business day if the current day is a bank holiday or weekend. Format: yyyy-mm-dd. |
| `description` | `string \| null \| undefined` | Form, Optional | An optional description for internal use. |
| `statementDescriptor` | `string \| null \| undefined` | Form, Optional | An optional descriptor which will appear in the receiver's statement. For `check` payments this field will be used as the memo line. For `ach` the maximum length is 10 characters. Note that for ACH payments, the name on your bank account will be included automatically by the bank, so you can use the characters for other useful information. For `eft` the maximum length is 15 characters. |
| `remittanceInformation` | `string \| null \| undefined` | Form, Optional | For `ach`, this field will be passed through on an addenda record. For `wire` payments the field will be passed through as the "Originator to Beneficiary Information", also known as OBI or Fedwire tag 6000. |
| `purpose` | `string \| null \| undefined` | Form, Optional | For `wire`, this is usually the purpose which is transmitted via the "InstrForDbtrAgt" field in the ISO20022 file. If you are using Currencycloud, this is the `payment.purpose_code` field. For `eft`, this field is the 3 digit CPA Code that will be attached to the payment. |
| `metadata` | `Record<string, string> \| undefined` | Form, Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `chargeBearer` | [`ChargeBearer \| null \| undefined`](../../doc/models/charge-bearer.md) | Form, Optional | The party that will pay the fees for the payment order. Only applies to wire payment orders. Can be one of shared, sender, or receiver, which correspond respectively with the SWIFT 71A values `SHA`, `OUR`, `BEN`. |
| `foreignExchangeIndicator` | [`ForeignExchangeIndicator \| null \| undefined`](../../doc/models/foreign-exchange-indicator.md) | Form, Optional | Indicates the type of FX transfer to initiate, can be either `variable_to_fixed`, `fixed_to_variable`, or `null` if the payment order currency matches the originating account currency. |
| `foreignExchangeContract` | `string \| null \| undefined` | Form, Optional | If present, indicates a specific foreign exchange contract number that has been generated by your financial institution. |
| `nsfProtected` | `boolean \| undefined` | Form, Optional | A boolean to determine if NSF Protection is enabled for this payment order. Note that this setting must also be turned on in your organization settings page. |
| `originatingPartyName` | `string \| null \| undefined` | Form, Optional | If present, this will replace your default company name on receiver's bank statement. This field can only be used for ACH payments currently. For ACH, only the first 16 characters of this string will be used. Any additional characters will be truncated. |
| `ultimateOriginatingPartyName` | `string \| null \| undefined` | Form, Optional | Name of the ultimate originator of the payment order. |
| `ultimateOriginatingPartyIdentifier` | `string \| null \| undefined` | Form, Optional | Identifier of the ultimate originator of the payment order. |
| `ultimateReceivingPartyName` | `string \| null \| undefined` | Form, Optional | Name of the ultimate funds recipient. |
| `ultimateReceivingPartyIdentifier` | `string \| null \| undefined` | Form, Optional | Identifier of the ultimate funds recipient. |
| `sendRemittanceAdvice` | `boolean \| null \| undefined` | Form, Optional | Send an email to the counterparty when the payment order is sent to the bank. If `null`, `send_remittance_advice` on the Counterparty is used. |
| `expiresAt` | `string \| null \| undefined` | Form, Optional | RFP payments require an expires_at. This value must be past the effective_date. |
| `fallbackType` | [`FallbackType \| undefined`](../../doc/models/fallback-type.md) | Form, Optional | A payment type to fallback to if the original type is not valid for the receiving account. Currently, this only supports falling back from RTP to ACH (type=rtp and fallback_type=ach) |
| `receivingAccount` | [`ReceivingAccount1 \| undefined`](../../doc/models/receiving-account-1.md) | Form, Optional | Either `receiving_account` or `receiving_account_id` must be present. When using `receiving_account_id`, you may pass the id of an external account or an internal account. |
| `ledgerTransaction` | [`LedgerTransactionCreateRequest \| undefined`](../../doc/models/ledger-transaction-create-request.md) | Form, Optional | - |
| `lineItems` | [`LineItemRequest[] \| undefined`](../../doc/models/line-item-request.md) | Form, Optional | An array of line items that must sum up to the amount of the payment order. |
| `transactionMonitoringEnabled` | `boolean \| undefined` | Form, Optional | A flag that determines whether a payment order should go through transaction monitoring. |
| `documents` | [`DocumentCreateRequest[] \| undefined`](../../doc/models/document-create-request.md) | Form, Optional | An array of documents to be attached to the payment order. Note that if you attach documents, the request's content type must be `multipart/form-data`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentOrder`](../../doc/models/payment-order.md).

## Example Usage

```ts
const type = Type5.Book;

const amount = 46;

const direction = Direction5.Credit;

const originatingAccountId = '0000099c-0000-0000-0000-000000000000';

const receivingAccount: ReceivingAccount1 = {
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

const ledgerTransaction: LedgerTransactionCreateRequest = {
  ledgerEntries: [
    {
      amount: 60,
      direction: Direction5.Credit,
      ledgerAccountId: '00002600-0000-0000-0000-000000000000',
      metadata: {
        'key': 'value',
        'foo': 'bar',
        'modern': 'treasury'
      },
    }
  ],
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

const lineItems: LineItemRequest[] = [
  {
    amount: 244,
    metadata: {
      'key': 'value',
      'foo': 'bar',
      'modern': 'treasury'
    },
  }
];

const documents: DocumentCreateRequest[] = [
  {
    documentableId: 'documentable_id6',
    documentableType: DocumentableType1.Connections,
    file: 'file4',
  }
];

try {
  const response = await paymentOrderController.createPaymentOrder(
    type,
    amount,
    direction,
    originatingAccountId,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    receivingAccount,
    ledgerTransaction,
    lineItems,
    undefined,
    documents
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorMessageError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | parameter_invalid | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 401 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Payment Order

Get details on a single payment order

```ts
async getPaymentOrder(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentOrder>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentOrder`](../../doc/models/payment-order.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await paymentOrderController.getPaymentOrder(id);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorMessageError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Update Payment Order

Update a payment order

```ts
async updatePaymentOrder(
  id: string,
  body?: PaymentOrderUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentOrder>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`PaymentOrderUpdateRequest \| undefined`](../../doc/models/payment-order-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentOrder`](../../doc/models/payment-order.md).

## Example Usage

```ts
const id = 'id0';

const body: PaymentOrderUpdateRequest = {
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await paymentOrderController.updatePaymentOrder(
    id,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorMessageError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | parameter_invalid | [`ErrorMessageError`](../../doc/models/error-message-error.md) |

