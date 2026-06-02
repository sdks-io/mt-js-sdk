# Return

```ts
const returnApi = new ReturnApi(client);
```

## Class Name

`ReturnApi`

## Methods

* [List Returns](../../doc/controllers/return.md#list-returns)
* [Create Return](../../doc/controllers/return.md#create-return)
* [Get Return](../../doc/controllers/return.md#get-return)


# List Returns

Get a list of returns.

```ts
async listReturns(
  afterCursor?: string | null,
  perPage?: number,
  internalAccountId?: string,
  counterpartyId?: string,
  returnableId?: string,
  returnableType?: ReturnableType1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Return[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `internalAccountId` | `string \| undefined` | Query, Optional | Specify `internal_account_id` if you wish to see returns to/from a specific account. |
| `counterpartyId` | `string \| undefined` | Query, Optional | Specify `counterparty_id` if you wish to see returns that occurred with a specific counterparty. |
| `returnableId` | `string \| undefined` | Query, Optional | The ID of a valid returnable. Must be accompanied by `returnable_type`. |
| `returnableType` | [`ReturnableType1 \| undefined`](../../doc/models/returnable-type-1.md) | Query, Optional | One of `payment_order`, `paper_item`, `reversal`, or `incoming_payment_detail`. Must be accompanied by `returnable_id`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Return[]`](../../doc/models/return.md).

## Example Usage

```ts
try {
  const response = await returnApi.listReturns();

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
| 401 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Create Return

Create a return.

```ts
async createReturn(
  idempotencyKey?: string,
  body?: ReturnCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Return>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`ReturnCreateRequest \| undefined`](../../doc/models/return-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Return`](../../doc/models/return.md).

## Example Usage

```ts
const body: ReturnCreateRequest = {
  returnableId: '00000350-0000-0000-0000-000000000000',
  returnableType: 'incoming_payment_detail',
};

try {
  const response = await returnApi.createReturn(
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


# Get Return

Get a single return.

```ts
async getReturn(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Return>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of an existing return. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Return`](../../doc/models/return.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await returnApi.getReturn(id);

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

