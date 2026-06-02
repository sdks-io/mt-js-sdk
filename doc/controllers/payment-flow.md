# Payment Flow

```ts
const paymentFlowController = new PaymentFlowController(client);
```

## Class Name

`PaymentFlowController`

## Methods

* [List Payment Flows](../../doc/controllers/payment-flow.md#list-payment-flows)
* [Create Payment Flow](../../doc/controllers/payment-flow.md#create-payment-flow)
* [Get Payment Flow](../../doc/controllers/payment-flow.md#get-payment-flow)
* [Update Payment Flow](../../doc/controllers/payment-flow.md#update-payment-flow)


# List Payment Flows

```ts
async listPaymentFlows(
  afterCursor?: string | null,
  perPage?: number,
  clientToken?: string,
  status?: string,
  counterpartyId?: string,
  receivingAccountId?: string,
  originatingAccountId?: string,
  paymentOrderId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentFlow[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `clientToken` | `string \| undefined` | Query, Optional | - |
| `status` | `string \| undefined` | Query, Optional | - |
| `counterpartyId` | `string \| undefined` | Query, Optional | - |
| `receivingAccountId` | `string \| undefined` | Query, Optional | - |
| `originatingAccountId` | `string \| undefined` | Query, Optional | - |
| `paymentOrderId` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentFlow[]`](../../doc/models/payment-flow.md).

## Example Usage

```ts
try {
  const response = await paymentFlowController.listPaymentFlows();

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


# Create Payment Flow

```ts
async createPaymentFlow(
  idempotencyKey?: string,
  body?: PaymentFlowCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentFlow>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`PaymentFlowCreateRequest \| undefined`](../../doc/models/payment-flow-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentFlow`](../../doc/models/payment-flow.md).

## Example Usage

```ts
try {
  const response = await paymentFlowController.createPaymentFlow();

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


# Get Payment Flow

```ts
async getPaymentFlow(
  id: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentFlow>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentFlow`](../../doc/models/payment-flow.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await paymentFlowController.getPaymentFlow(id);

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


# Update Payment Flow

```ts
async updatePaymentFlow(
  id: string,
  idempotencyKey?: string,
  body?: PaymentFlowUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentFlow>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`PaymentFlowUpdateRequest \| undefined`](../../doc/models/payment-flow-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentFlow`](../../doc/models/payment-flow.md).

## Example Usage

```ts
const id = 'id0';

const body: PaymentFlowUpdateRequest = {
  status: 'cancelled',
};

try {
  const response = await paymentFlowController.updatePaymentFlow(
    id,
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
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |

