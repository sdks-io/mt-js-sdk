# Transaction

```ts
const transactionApi = new TransactionApi(client);
```

## Class Name

`TransactionApi`

## Methods

* [List Transactions](../../doc/controllers/transaction.md#list-transactions)
* [Get Transaction](../../doc/controllers/transaction.md#get-transaction)
* [Update Transaction](../../doc/controllers/transaction.md#update-transaction)


# List Transactions

Get a list of all transactions.

```ts
async listTransactions(
  afterCursor?: string | null,
  perPage?: number,
  internalAccountId?: string,
  virtualAccountId?: string,
  posted?: boolean,
  asOfDateStart?: string,
  asOfDateEnd?: string,
  direction?: string,
  counterpartyId?: string,
  paymentType?: string,
  transactableType?: string,
  description?: string,
  vendorId?: string,
  metadata?: Record<string, string>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Transaction[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `internalAccountId` | `string \| undefined` | Query, Optional | Specify `internal_account_id` if you wish to see transactions to/from a specific account. |
| `virtualAccountId` | `string \| undefined` | Query, Optional | - |
| `posted` | `boolean \| undefined` | Query, Optional | Either `true` or `false`. |
| `asOfDateStart` | `string \| undefined` | Query, Optional | Filters transactions with an `as_of_date` starting on or after the specified date (YYYY-MM-DD). |
| `asOfDateEnd` | `string \| undefined` | Query, Optional | Filters transactions with an `as_of_date` starting on or before the specified date (YYYY-MM-DD). |
| `direction` | `string \| undefined` | Query, Optional | - |
| `counterpartyId` | `string \| undefined` | Query, Optional | - |
| `paymentType` | `string \| undefined` | Query, Optional | - |
| `transactableType` | `string \| undefined` | Query, Optional | - |
| `description` | `string \| undefined` | Query, Optional | Filters for transactions including the queried string in the description. |
| `vendorId` | `string \| undefined` | Query, Optional | Filters for transactions including the queried vendor id (an identifier given to transactions by the bank). |
| `metadata` | `Record<string, string> \| undefined` | Query, Optional | For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Transaction[]`](../../doc/models/transaction.md).

## Example Usage

```ts
try {
  const response = await transactionApi.listTransactions();

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


# Get Transaction

Get details on a single transaction.

```ts
async getTransaction(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Transaction>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Transaction ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Transaction`](../../doc/models/transaction.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await transactionApi.getTransaction(id);

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


# Update Transaction

Update a single transaction.

```ts
async updateTransaction(
  id: string,
  body?: IncomingPaymentDetailUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Transaction>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Transaction ID |
| `body` | [`IncomingPaymentDetailUpdateRequest \| undefined`](../../doc/models/incoming-payment-detail-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Transaction`](../../doc/models/transaction.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await transactionApi.updateTransaction(id);

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

