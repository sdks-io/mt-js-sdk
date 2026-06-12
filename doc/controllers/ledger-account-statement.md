# Ledger Account Statement

```ts
const ledgerAccountStatementApi = new LedgerAccountStatementApi(client);
```

## Class Name

`LedgerAccountStatementApi`

## Methods

* [Create Ledger Account Statement](../../doc/controllers/ledger-account-statement.md#create-ledger-account-statement)
* [Get Ledger Account Statement](../../doc/controllers/ledger-account-statement.md#get-ledger-account-statement)


# Create Ledger Account Statement

Create a ledger account statement.

```ts
async createLedgerAccountStatement(
  idempotencyKey?: string,
  body?: LedgerAccountStatementCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccountStatement>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`LedgerAccountStatementCreateRequest \| undefined`](../../doc/models/ledger-account-statement-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccountStatement`](../../doc/models/ledger-account-statement.md).

## Example Usage

```ts
const body: LedgerAccountStatementCreateRequest = {
  ledgerAccountId: '000012de-0000-0000-0000-000000000000',
  effectiveAtLowerBound: '2016-03-13T12:52:32.123Z',
  effectiveAtUpperBound: '2016-03-13T12:52:32.123Z',
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await ledgerAccountStatementApi.createLedgerAccountStatement(
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


# Get Ledger Account Statement

Get details on a single ledger account statement.

```ts
async getLedgerAccountStatement(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccountStatement>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccountStatement`](../../doc/models/ledger-account-statement.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await ledgerAccountStatementApi.getLedgerAccountStatement(id);

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

