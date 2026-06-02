# Ledger Event Handler

```ts
const ledgerEventHandlerApi = new LedgerEventHandlerApi(client);
```

## Class Name

`LedgerEventHandlerApi`

## Methods

* [List Ledger Event Handlers](../../doc/controllers/ledger-event-handler.md#list-ledger-event-handlers)
* [Create Ledger Event Handler](../../doc/controllers/ledger-event-handler.md#create-ledger-event-handler)
* [Get Ledger Event Handler](../../doc/controllers/ledger-event-handler.md#get-ledger-event-handler)
* [Delete Ledger Event Handler](../../doc/controllers/ledger-event-handler.md#delete-ledger-event-handler)


# List Ledger Event Handlers

Get a list of ledger event handlers.

```ts
async listLedgerEventHandlers(
  afterCursor?: string | null,
  perPage?: number,
  metadata?: Record<string, string>,
  name?: string,
  createdAt?: Record<string, string>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerEventHandler[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Query, Optional | For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters. |
| `name` | `string \| undefined` | Query, Optional | - |
| `createdAt` | `Record<string, string> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use created_at%5Bgt%5D=2000-01-01T12:00:00Z. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerEventHandler[]`](../../doc/models/ledger-event-handler.md).

## Example Usage

```ts
try {
  const response = await ledgerEventHandlerApi.listLedgerEventHandlers();

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


# Create Ledger Event Handler

```ts
async createLedgerEventHandler(
  idempotencyKey?: string,
  body?: LedgerEventHandlerCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerEventHandler>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`LedgerEventHandlerCreateRequest \| undefined`](../../doc/models/ledger-event-handler-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerEventHandler`](../../doc/models/ledger-event-handler.md).

## Example Usage

```ts
const body: LedgerEventHandlerCreateRequest = {
  name: 'name6',
  ledgerTransactionTemplate: {
    description: 'description4',
    effectiveAt: 'effective_at2',
    ledgerEntries: [
      {
        amount: 'amount6',
        direction: 'direction0',
        ledgerAccountId: 'ledger_account_id8',
      }
    ],
    metadata: {
      'key': 'value',
      'foo': 'bar',
      'modern': 'treasury'
    },
  },
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await ledgerEventHandlerApi.createLedgerEventHandler(
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
| 400 | parameter_invalid | `ApiError` |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Ledger Event Handler

Get details on a single ledger event handler.

```ts
async getLedgerEventHandler(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerEventHandler>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerEventHandler`](../../doc/models/ledger-event-handler.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await ledgerEventHandlerApi.getLedgerEventHandler(id);

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


# Delete Ledger Event Handler

Archive a ledger event handler.

```ts
async deleteLedgerEventHandler(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerEventHandler>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerEventHandler`](../../doc/models/ledger-event-handler.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await ledgerEventHandlerApi.deleteLedgerEventHandler(id);

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

