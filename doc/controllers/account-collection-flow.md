# Account Collection Flow

```ts
const accountCollectionFlowController = new AccountCollectionFlowController(client);
```

## Class Name

`AccountCollectionFlowController`

## Methods

* [List Account Collection Flows](../../doc/controllers/account-collection-flow.md#list-account-collection-flows)
* [Create Account Collection Flow](../../doc/controllers/account-collection-flow.md#create-account-collection-flow)
* [Get Account Collection Flow](../../doc/controllers/account-collection-flow.md#get-account-collection-flow)
* [Update Account Collection Flow](../../doc/controllers/account-collection-flow.md#update-account-collection-flow)


# List Account Collection Flows

```ts
async listAccountCollectionFlows(
  afterCursor?: string | null,
  perPage?: number,
  clientToken?: string,
  status?: string,
  counterpartyId?: string,
  externalAccountId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountCollectionFlow[]>>
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
| `externalAccountId` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountCollectionFlow[]`](../../doc/models/account-collection-flow.md).

## Example Usage

```ts
try {
  const response = await accountCollectionFlowController.listAccountCollectionFlows();

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


# Create Account Collection Flow

```ts
async createAccountCollectionFlow(
  idempotencyKey?: string,
  body?: AccountCollectionFlowCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountCollectionFlow>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`AccountCollectionFlowCreateRequest \| undefined`](../../doc/models/account-collection-flow-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountCollectionFlow`](../../doc/models/account-collection-flow.md).

## Example Usage

```ts
try {
  const response = await accountCollectionFlowController.createAccountCollectionFlow();

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


# Get Account Collection Flow

```ts
async getAccountCollectionFlow(
  id: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountCollectionFlow>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountCollectionFlow`](../../doc/models/account-collection-flow.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await accountCollectionFlowController.getAccountCollectionFlow(id);

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


# Update Account Collection Flow

```ts
async updateAccountCollectionFlow(
  id: string,
  idempotencyKey?: string,
  body?: AccountCollectionFlowUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountCollectionFlow>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`AccountCollectionFlowUpdateRequest \| undefined`](../../doc/models/account-collection-flow-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountCollectionFlow`](../../doc/models/account-collection-flow.md).

## Example Usage

```ts
const id = 'id0';

const body: AccountCollectionFlowUpdateRequest = {
  status: 'cancelled',
};

try {
  const response = await accountCollectionFlowController.updateAccountCollectionFlow(
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

