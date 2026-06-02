# Expected Payment

```ts
const expectedPaymentController = new ExpectedPaymentController(client);
```

## Class Name

`ExpectedPaymentController`

## Methods

* [List Expected Payments](../../doc/controllers/expected-payment.md#list-expected-payments)
* [Create Expected Payment](../../doc/controllers/expected-payment.md#create-expected-payment)
* [Get Expected Payment](../../doc/controllers/expected-payment.md#get-expected-payment)
* [Update Expected Payment](../../doc/controllers/expected-payment.md#update-expected-payment)
* [Delete Expected Payment](../../doc/controllers/expected-payment.md#delete-expected-payment)


# List Expected Payments

```ts
async listExpectedPayments(
  afterCursor?: string | null,
  perPage?: number,
  status?: Status20,
  internalAccountId?: string,
  direction?: Direction15,
  type?: Type13,
  counterpartyId?: string,
  metadata?: Record<string, string>,
  createdAtLowerBound?: string,
  createdAtUpperBound?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ExpectedPayment[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `status` | [`Status20 \| undefined`](../../doc/models/status-20.md) | Query, Optional | One of unreconciled, reconciled, or archived. |
| `internalAccountId` | `string \| undefined` | Query, Optional | Specify internal_account_id to see expected_payments for a specific account. |
| `direction` | [`Direction15 \| undefined`](../../doc/models/direction-15.md) | Query, Optional | One of credit, debit |
| `type` | [`Type13 \| undefined`](../../doc/models/type-13.md) | Query, Optional | One of: ach, au_becs, bacs, book, check, eft, interac, provxchange, rtp,sen, sepa, signet, wire |
| `counterpartyId` | `string \| undefined` | Query, Optional | Specify counterparty_id to see expected_payments for a specific account. |
| `metadata` | `Record<string, string> \| undefined` | Query, Optional | For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters. |
| `createdAtLowerBound` | `string \| undefined` | Query, Optional | Used to return expected payments created after some datetime |
| `createdAtUpperBound` | `string \| undefined` | Query, Optional | Used to return expected payments created before some datetime |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ExpectedPayment[]`](../../doc/models/expected-payment.md).

## Example Usage

```ts
try {
  const response = await expectedPaymentController.listExpectedPayments();

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


# Create Expected Payment

```ts
async createExpectedPayment(
  idempotencyKey?: string,
  body?: ExpectedPaymentCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ExpectedPayment>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`ExpectedPaymentCreateRequest \| undefined`](../../doc/models/expected-payment-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ExpectedPayment`](../../doc/models/expected-payment.md).

## Example Usage

```ts
const body: ExpectedPaymentCreateRequest = {
  amountUpperBound: 80,
  amountLowerBound: 142,
  direction: Direction1.Credit,
  internalAccountId: '0000118a-0000-0000-0000-000000000000',
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await expectedPaymentController.createExpectedPayment(
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
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Expected Payment

```ts
async getExpectedPayment(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ExpectedPayment>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ExpectedPayment`](../../doc/models/expected-payment.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await expectedPaymentController.getExpectedPayment(id);

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


# Update Expected Payment

```ts
async updateExpectedPayment(
  id: string,
  body?: ExpectedPaymentUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ExpectedPayment>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `body` | [`ExpectedPaymentUpdateRequest \| undefined`](../../doc/models/expected-payment-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ExpectedPayment`](../../doc/models/expected-payment.md).

## Example Usage

```ts
const id = 'id0';

const body: ExpectedPaymentUpdateRequest = {
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await expectedPaymentController.updateExpectedPayment(
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
  }
}
```


# Delete Expected Payment

```ts
async deleteExpectedPayment(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ExpectedPayment>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ExpectedPayment`](../../doc/models/expected-payment.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await expectedPaymentController.deleteExpectedPayment(id);

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
| 422 | parameter_invalid | [`ErrorMessageError`](../../doc/models/error-message-error.md) |

