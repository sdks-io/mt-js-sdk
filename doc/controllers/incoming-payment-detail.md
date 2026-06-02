# Incoming Payment Detail

```ts
const incomingPaymentDetailController = new IncomingPaymentDetailController(client);
```

## Class Name

`IncomingPaymentDetailController`

## Methods

* [List Incoming Payment Details](../../doc/controllers/incoming-payment-detail.md#list-incoming-payment-details)
* [Get Incoming Payment Detail](../../doc/controllers/incoming-payment-detail.md#get-incoming-payment-detail)
* [Update Incoming Payment Detail](../../doc/controllers/incoming-payment-detail.md#update-incoming-payment-detail)
* [Create Async Incoming Payment Detail](../../doc/controllers/incoming-payment-detail.md#create-async-incoming-payment-detail)


# List Incoming Payment Details

Get a list of Incoming Payment Details.

```ts
async listIncomingPaymentDetails(
  afterCursor?: string | null,
  perPage?: number,
  direction?: Direction15Enum,
  status?: Status21Enum,
  type?: Type14Enum,
  asOfDateStart?: string,
  asOfDateEnd?: string,
  metadata?: Record<string, string>,
  virtualAccountId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IncomingPaymentDetail[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `direction` | [`Direction15Enum \| undefined`](../../doc/models/direction-15-enum.md) | Query, Optional | One of `credit` or `debit`. |
| `status` | [`Status21Enum \| undefined`](../../doc/models/status-21-enum.md) | Query, Optional | The current status of the incoming payment order. One of `pending`, `completed`, or `returned`. |
| `type` | [`Type14Enum \| undefined`](../../doc/models/type-14-enum.md) | Query, Optional | One of: `ach`, `book`, `check`, `eft`, `interac`, `rtp`, `sepa`, `signet`, or `wire`. |
| `asOfDateStart` | `string \| undefined` | Query, Optional | Filters incoming payment details with an as_of_date starting on or after the specified date (YYYY-MM-DD). |
| `asOfDateEnd` | `string \| undefined` | Query, Optional | Filters incoming payment details with an as_of_date starting on or before the specified date (YYYY-MM-DD). |
| `metadata` | `Record<string, string> \| undefined` | Query, Optional | For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters. |
| `virtualAccountId` | `string \| undefined` | Query, Optional | If the incoming payment detail is in a virtual account, the ID of the Virtual Account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`IncomingPaymentDetail[]`](../../doc/models/incoming-payment-detail.md).

## Example Usage

```ts
try {
  const response = await incomingPaymentDetailController.listIncomingPaymentDetails();

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


# Get Incoming Payment Detail

Get an existing Incoming Payment Detail.

```ts
async getIncomingPaymentDetail(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IncomingPaymentDetail>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the incoming payment detail. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`IncomingPaymentDetail`](../../doc/models/incoming-payment-detail.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await incomingPaymentDetailController.getIncomingPaymentDetail(id);

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


# Update Incoming Payment Detail

Update an existing Incoming Payment Detail.

```ts
async updateIncomingPaymentDetail(
  id: string,
  body?: IncomingPaymentDetailUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IncomingPaymentDetail>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the incoming payment detail. |
| `body` | [`IncomingPaymentDetailUpdateRequest \| undefined`](../../doc/models/incoming-payment-detail-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`IncomingPaymentDetail`](../../doc/models/incoming-payment-detail.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await incomingPaymentDetailController.updateIncomingPaymentDetail(id);

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


# Create Async Incoming Payment Detail

Simulate Incoming Payment Detail

```ts
async createAsyncIncomingPaymentDetail(
  idempotencyKey?: string,
  body?: IncomingPaymentDetailCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AsyncResponse>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`IncomingPaymentDetailCreateRequest \| undefined`](../../doc/models/incoming-payment-detail-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**202**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AsyncResponse`](../../doc/models/async-response.md).

## Example Usage

```ts
try {
  const response = await incomingPaymentDetailController.createAsyncIncomingPaymentDetail();

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
| 405 | not allowed | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |

