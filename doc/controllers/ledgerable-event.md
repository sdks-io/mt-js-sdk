# Ledgerable Event

```ts
const ledgerableEventController = new LedgerableEventController(client);
```

## Class Name

`LedgerableEventController`

## Methods

* [Create Ledgerable Event](../../doc/controllers/ledgerable-event.md#create-ledgerable-event)
* [Get Ledgerable Event](../../doc/controllers/ledgerable-event.md#get-ledgerable-event)


# Create Ledgerable Event

Translation missing: en.openapi.descriptions.ledger.operations.create_ledgerable_event

```ts
async createLedgerableEvent(
  idempotencyKey?: string,
  body?: LedgerableEventCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerableEvent>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`LedgerableEventCreateRequest \| undefined`](../../doc/models/ledgerable-event-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerableEvent`](../../doc/models/ledgerable-event.md).

## Example Usage

```ts
const body: LedgerableEventCreateRequest = {
  name: 'name6',
  amount: 218,
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await ledgerableEventController.createLedgerableEvent(
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


# Get Ledgerable Event

Get details on a single ledgerable event.

```ts
async getLedgerableEvent(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerableEvent>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerableEvent`](../../doc/models/ledgerable-event.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await ledgerableEventController.getLedgerableEvent(id);

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

