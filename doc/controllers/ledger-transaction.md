# Ledger Transaction

```ts
const ledgerTransactionController = new LedgerTransactionController(client);
```

## Class Name

`LedgerTransactionController`

## Methods

* [Create Ledger Transaction Reversal](../../doc/controllers/ledger-transaction.md#create-ledger-transaction-reversal)
* [List Ledger Transaction Versions](../../doc/controllers/ledger-transaction.md#list-ledger-transaction-versions)
* [List Ledger Transactions](../../doc/controllers/ledger-transaction.md#list-ledger-transactions)
* [Create Ledger Transaction](../../doc/controllers/ledger-transaction.md#create-ledger-transaction)
* [Get Ledger Transaction](../../doc/controllers/ledger-transaction.md#get-ledger-transaction)
* [Update Ledger Transaction](../../doc/controllers/ledger-transaction.md#update-ledger-transaction)
* [List Ledger Transaction Versions 1](../../doc/controllers/ledger-transaction.md#list-ledger-transaction-versions-1)


# Create Ledger Transaction Reversal

Create a ledger transaction reversal.

```ts
async createLedgerTransactionReversal(
  id: string,
  body?: LedgerTransactionReversalCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerTransaction>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The id of ledger transaction to reverse. |
| `body` | [`LedgerTransactionReversalCreateRequest \| undefined`](../../doc/models/ledger-transaction-reversal-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerTransaction`](../../doc/models/ledger-transaction.md).

## Example Usage

```ts
const id = 'id0';

const body: LedgerTransactionReversalCreateRequest = {
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await ledgerTransactionController.createLedgerTransactionReversal(
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
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# List Ledger Transaction Versions

Get a list of ledger transaction versions.

```ts
async listLedgerTransactionVersions(
  afterCursor?: string | null,
  perPage?: number,
  createdAt?: Record<string, string>,
  version?: Record<string, number>,
  ledgerTransactionId?: string,
  ledgerAccountStatementId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerTransactionVersion[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `createdAt` | `Record<string, string> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the created_at timestamp. For example, for all dates after Jan 1 2000 12:00 UTC, use created_at%5Bgt%5D=2000-01-01T12:00:00Z. |
| `version` | `Record<string, number> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the version. For example, for all versions after 2, use version%5Bgt%5D=2. |
| `ledgerTransactionId` | `string \| undefined` | Query, Optional | Get all the ledger transaction versions corresponding to the ID of a ledger transaction. |
| `ledgerAccountStatementId` | `string \| undefined` | Query, Optional | Get all ledger transaction versions that are included in the ledger account statement. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerTransactionVersion[]`](../../doc/models/ledger-transaction-version.md).

## Example Usage

```ts
try {
  const response = await ledgerTransactionController.listLedgerTransactionVersions();

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


# List Ledger Transactions

Get a list of ledger transactions.

```ts
async listLedgerTransactions(
  afterCursor?: string | null,
  perPage?: number,
  id?: Record<string, string>,
  metadata?: Record<string, string>,
  ledgerId?: string,
  ledgerAccountId?: string,
  effectiveAt?: Record<string, string>,
  effectiveDate?: Record<string, string>,
  postedAt?: Record<string, string>,
  updatedAt?: Record<string, string>,
  orderBy?: OrderBy,
  status?: Status22,
  externalId?: string,
  ledgerAccountCategoryId?: string,
  ledgerAccountPayoutId?: string,
  reversesLedgerTransactionId?: string,
  ledgerableId?: string,
  ledgerableType?: LedgerableType6,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerTransaction[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `id` | `Record<string, string> \| undefined` | Query, Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Query, Optional | For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters. |
| `ledgerId` | `string \| undefined` | Query, Optional | - |
| `ledgerAccountId` | `string \| undefined` | Query, Optional | - |
| `effectiveAt` | `Record<string, string> \| undefined` | Query, Optional | Use "gt" (>), "gte" (>=), "lt" (<), "lte" (<=), or "eq" (=) to filter by effective at. For example, for all transactions after Jan 1 2000, use effective_at%5Bgt%5D=2000-01-01T00:00:00:00.000Z. |
| `effectiveDate` | `Record<string, string> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by effective date. For example, for all dates after Jan 1 2000, use effective_date%5Bgt%5D=2000-01-01. |
| `postedAt` | `Record<string, string> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use posted_at%5Bgt%5D=2000-01-01T12:00:00Z. |
| `updatedAt` | `Record<string, string> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use updated_at%5Bgt%5D=2000-01-01T12:00:00Z. |
| `orderBy` | [`OrderBy \| undefined`](../../doc/models/order-by.md) | Query, Optional | Order by `created_at` or `effective_at` in `asc` or `desc` order. For example, to order by `effective_at asc`, use `order_by%5Beffective_at%5D=asc`. Ordering by only one field at a time is supported. |
| `status` | [`Status22 \| undefined`](../../doc/models/status-22.md) | Query, Optional | - |
| `externalId` | `string \| undefined` | Query, Optional | - |
| `ledgerAccountCategoryId` | `string \| undefined` | Query, Optional | - |
| `ledgerAccountPayoutId` | `string \| undefined` | Query, Optional | - |
| `reversesLedgerTransactionId` | `string \| undefined` | Query, Optional | - |
| `ledgerableId` | `string \| undefined` | Query, Optional | - |
| `ledgerableType` | [`LedgerableType6 \| undefined`](../../doc/models/ledgerable-type-6.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerTransaction[]`](../../doc/models/ledger-transaction.md).

## Example Usage

```ts
try {
  const response = await ledgerTransactionController.listLedgerTransactions();

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
| 422 | parameter invalid | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Create Ledger Transaction

Create a ledger transaction.

```ts
async createLedgerTransaction(
  idempotencyKey?: string,
  body?: LedgerTransactionCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerTransaction>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`LedgerTransactionCreateRequest \| undefined`](../../doc/models/ledger-transaction-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerTransaction`](../../doc/models/ledger-transaction.md).

## Example Usage

```ts
const body: LedgerTransactionCreateRequest = {
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

try {
  const response = await ledgerTransactionController.createLedgerTransaction(
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
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 429 | too many requests | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Ledger Transaction

Get details on a single ledger transaction.

```ts
async getLedgerTransaction(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerTransaction>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerTransaction`](../../doc/models/ledger-transaction.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await ledgerTransactionController.getLedgerTransaction(id);

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


# Update Ledger Transaction

Update the details of a ledger transaction.

```ts
async updateLedgerTransaction(
  id: string,
  body?: LedgerTransactionUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerTransaction>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `body` | [`LedgerTransactionUpdateRequest \| undefined`](../../doc/models/ledger-transaction-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerTransaction`](../../doc/models/ledger-transaction.md).

## Example Usage

```ts
const id = 'id0';

const body: LedgerTransactionUpdateRequest = {
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await ledgerTransactionController.updateLedgerTransaction(
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
| 400 | parameter_invalid | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 429 | too many requests | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# List Ledger Transaction Versions 1

Get a list of ledger transaction versions.

```ts
async listLedgerTransactionVersions1(
  id: string,
  afterCursor?: string | null,
  perPage?: number,
  createdAt?: Record<string, string>,
  version?: Record<string, number>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerTransactionVersion[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `createdAt` | `Record<string, string> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the created_at timestamp. For example, for all dates after Jan 1 2000 12:00 UTC, use created_at%5Bgt%5D=2000-01-01T12:00:00Z. |
| `version` | `Record<string, number> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the version. For example, for all versions after 2, use version%5Bgt%5D=2. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerTransactionVersion[]`](../../doc/models/ledger-transaction-version.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await ledgerTransactionController.listLedgerTransactionVersions1(id);

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
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |

