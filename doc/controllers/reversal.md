# Reversal

```ts
const reversalController = new ReversalController(client);
```

## Class Name

`ReversalController`

## Methods

* [List Reversals](../../doc/controllers/reversal.md#list-reversals)
* [Create Reversal](../../doc/controllers/reversal.md#create-reversal)
* [Get Reversal](../../doc/controllers/reversal.md#get-reversal)


# List Reversals

Get a list of all reversals of a payment order.

```ts
async listReversals(
  paymentOrderId: string,
  afterCursor?: string | null,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Reversal[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentOrderId` | `string` | Template, Required | The ID of the relevant Payment Order. |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Reversal[]`](../../doc/models/reversal.md).

## Example Usage

```ts
const paymentOrderId = 'payment_order_id6';

try {
  const response = await reversalController.listReversals(paymentOrderId);

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


# Create Reversal

Create a reversal for a payment order.

```ts
async createReversal(
  paymentOrderId: string,
  idempotencyKey?: string,
  body?: ReversalCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Reversal>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentOrderId` | `string` | Template, Required | The ID of the relevant Payment Order. |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`ReversalCreateRequest \| undefined`](../../doc/models/reversal-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Reversal`](../../doc/models/reversal.md).

## Example Usage

```ts
const paymentOrderId = '0000176c-0000-0000-0000-000000000000';

const body: ReversalCreateRequest = {
  reason: Reason1Enum.DateEarlierThanIntended,
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await reversalController.createReversal(
    paymentOrderId,
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
| 404 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Reversal

Get details on a single reversal of a payment order.

```ts
async getReversal(
  paymentOrderId: string,
  reversalId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Reversal>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentOrderId` | `string` | Template, Required | The id of the payment order being reversed. |
| `reversalId` | `string` | Template, Required | The ID of the reversal. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Reversal`](../../doc/models/reversal.md).

## Example Usage

```ts
const paymentOrderId = '0000176c-0000-0000-0000-000000000000';

const reversalId = '00000f9e-0000-0000-0000-000000000000';

try {
  const response = await reversalController.getReversal(
    paymentOrderId,
    reversalId
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

