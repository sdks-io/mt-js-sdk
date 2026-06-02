# Ledger Account Payout

```ts
const ledgerAccountPayoutController = new LedgerAccountPayoutController(client);
```

## Class Name

`LedgerAccountPayoutController`

## Methods

* [Create Ledger Account Payout](../../doc/controllers/ledger-account-payout.md#create-ledger-account-payout)
* [List Ledger Account Payouts](../../doc/controllers/ledger-account-payout.md#list-ledger-account-payouts)
* [Get Ledger Account Payout](../../doc/controllers/ledger-account-payout.md#get-ledger-account-payout)
* [Update Ledger Account Payout](../../doc/controllers/ledger-account-payout.md#update-ledger-account-payout)


# Create Ledger Account Payout

Create a ledger account payout.

```ts
async createLedgerAccountPayout(
  idempotencyKey?: string,
  body?: LedgerAccountPayoutCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccountPayout>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`LedgerAccountPayoutCreateRequest \| undefined`](../../doc/models/ledger-account-payout-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccountPayout`](../../doc/models/ledger-account-payout.md).

## Example Usage

```ts
const body: LedgerAccountPayoutCreateRequest = {
  payoutLedgerAccountId: '000010e0-0000-0000-0000-000000000000',
  fundingLedgerAccountId: '00000298-0000-0000-0000-000000000000',
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await ledgerAccountPayoutController.createLedgerAccountPayout(
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


# List Ledger Account Payouts

Get a list of ledger account payouts.

```ts
async listLedgerAccountPayouts(
  afterCursor?: string | null,
  perPage?: number,
  metadata?: Record<string, string>,
  payoutLedgerAccountId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccountPayout[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Query, Optional | For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters. |
| `payoutLedgerAccountId` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccountPayout[]`](../../doc/models/ledger-account-payout.md).

## Example Usage

```ts
try {
  const response = await ledgerAccountPayoutController.listLedgerAccountPayouts();

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


# Get Ledger Account Payout

Get details on a single ledger account payout.

```ts
async getLedgerAccountPayout(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccountPayout>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccountPayout`](../../doc/models/ledger-account-payout.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await ledgerAccountPayoutController.getLedgerAccountPayout(id);

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


# Update Ledger Account Payout

Update the details of a ledger account payout.

```ts
async updateLedgerAccountPayout(
  id: string,
  body?: LedgerAccountPayoutUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccountPayout>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `body` | [`LedgerAccountPayoutUpdateRequest \| undefined`](../../doc/models/ledger-account-payout-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccountPayout`](../../doc/models/ledger-account-payout.md).

## Example Usage

```ts
const id = 'id0';

const body: LedgerAccountPayoutUpdateRequest = {
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await ledgerAccountPayoutController.updateLedgerAccountPayout(
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

