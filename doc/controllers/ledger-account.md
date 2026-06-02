# Ledger Account

```ts
const ledgerAccountController = new LedgerAccountController(client);
```

## Class Name

`LedgerAccountController`

## Methods

* [List Ledger Accounts](../../doc/controllers/ledger-account.md#list-ledger-accounts)
* [Create Ledger Account](../../doc/controllers/ledger-account.md#create-ledger-account)
* [Get Ledger Account](../../doc/controllers/ledger-account.md#get-ledger-account)
* [Update Ledger Account](../../doc/controllers/ledger-account.md#update-ledger-account)
* [Delete Ledger Account](../../doc/controllers/ledger-account.md#delete-ledger-account)


# List Ledger Accounts

Get a list of ledger accounts.

```ts
async listLedgerAccounts(
  afterCursor?: string | null,
  perPage?: number,
  metadata?: Record<string, string>,
  id?: string,
  name?: string,
  ledgerId?: string,
  currency?: string,
  balances?: Balances2,
  createdAt?: Record<string, string>,
  updatedAt?: Record<string, string>,
  ledgerAccountCategoryId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccount[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Query, Optional | For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters. |
| `id` | `string \| undefined` | Query, Optional | - |
| `name` | `string \| undefined` | Query, Optional | - |
| `ledgerId` | `string \| undefined` | Query, Optional | - |
| `currency` | `string \| undefined` | Query, Optional | - |
| `balances` | [`Balances2 \| undefined`](../../doc/models/balances-2.md) | Query, Optional | Use `balances[effective_at_lower_bound]` and `balances[effective_at_upper_bound]` to get the balances change between the two timestamps. The lower bound is inclusive while the upper bound is exclusive of the provided timestamps. If no value is supplied the balances will be retrieved not including that bound. |
| `createdAt` | `Record<string, string> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the created at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use created_at%5Bgt%5D=2000-01-01T12:00:00Z. |
| `updatedAt` | `Record<string, string> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the updated at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use updated_at%5Bgt%5D=2000-01-01T12:00:00Z. |
| `ledgerAccountCategoryId` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccount[]`](../../doc/models/ledger-account.md).

## Example Usage

```ts
try {
  const response = await ledgerAccountController.listLedgerAccounts();

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
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Create Ledger Account

Create a ledger account.

```ts
async createLedgerAccount(
  idempotencyKey?: string,
  body?: LedgerAccountCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccount>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`LedgerAccountCreateRequest \| undefined`](../../doc/models/ledger-account-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccount`](../../doc/models/ledger-account.md).

## Example Usage

```ts
const body: LedgerAccountCreateRequest = {
  name: 'name6',
  normalBalance: NormalBalanceEnum.Credit,
  ledgerId: '00002576-0000-0000-0000-000000000000',
  currency: 'currency6',
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await ledgerAccountController.createLedgerAccount(
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
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Ledger Account

Get details on a single ledger account.

```ts
async getLedgerAccount(
  id: string,
  balances?: Balances3,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccount>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `balances` | [`Balances3 \| undefined`](../../doc/models/balances-3.md) | Query, Optional | Use `balances[effective_at_lower_bound]` and `balances[effective_at_upper_bound]` to get the balances change between the two timestamps. The lower bound is inclusive while the upper bound is exclusive of the provided timestamps. If no value is supplied the balances will be retrieved not including that bound. Use `balances[as_of_lock_version]` to retrieve a balance as of a specific Ledger Account `lock_version`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccount`](../../doc/models/ledger-account.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await ledgerAccountController.getLedgerAccount(id);

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


# Update Ledger Account

Update the details of a ledger account.

```ts
async updateLedgerAccount(
  id: string,
  body?: LedgerAccountUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccount>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `body` | [`LedgerAccountUpdateRequest \| undefined`](../../doc/models/ledger-account-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccount`](../../doc/models/ledger-account.md).

## Example Usage

```ts
const id = 'id0';

const body: LedgerAccountUpdateRequest = {
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await ledgerAccountController.updateLedgerAccount(
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
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Delete Ledger Account

Delete a ledger account.

```ts
async deleteLedgerAccount(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccount>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccount`](../../doc/models/ledger-account.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await ledgerAccountController.deleteLedgerAccount(id);

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

