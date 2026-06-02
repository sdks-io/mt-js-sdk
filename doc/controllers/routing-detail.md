# Routing Detail

```ts
const routingDetailApi = new RoutingDetailApi(client);
```

## Class Name

`RoutingDetailApi`

## Methods

* [List Routing Details](../../doc/controllers/routing-detail.md#list-routing-details)
* [Create Routing Detail](../../doc/controllers/routing-detail.md#create-routing-detail)
* [Get Routing Detail](../../doc/controllers/routing-detail.md#get-routing-detail)
* [Delete Routing Detail](../../doc/controllers/routing-detail.md#delete-routing-detail)


# List Routing Details

Get a list of routing details for a single internal or external account.

```ts
async listRoutingDetails(
  accountsType: AccountsType,
  accountId: string,
  afterCursor?: string | null,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RoutingDetail[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountsType` | [`AccountsType`](../../doc/models/accounts-type.md) | Template, Required | - |
| `accountId` | `string` | Template, Required | The ID of the account. |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RoutingDetail[]`](../../doc/models/routing-detail.md).

## Example Usage

```ts
const accountsType = AccountsType.ExternalAccounts;

const accountId = 'account_id2';

try {
  const response = await routingDetailApi.listRoutingDetails(
    accountsType,
    accountId
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


# Create Routing Detail

Create a routing detail for a single external account.

```ts
async createRoutingDetail(
  accountsType: AccountsType1,
  accountId: string,
  idempotencyKey?: string,
  body?: RoutingDetailCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RoutingDetail>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountsType` | [`AccountsType1`](../../doc/models/accounts-type-1.md) | Template, Required | - |
| `accountId` | `string` | Template, Required | The ID of the account. |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`RoutingDetailCreateRequest \| undefined`](../../doc/models/routing-detail-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RoutingDetail`](../../doc/models/routing-detail.md).

## Example Usage

```ts
const accountsType = AccountsType1.ExternalAccounts;

const accountId = 'account_id2';

try {
  const response = await routingDetailApi.createRoutingDetail(
    accountsType,
    accountId
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


# Get Routing Detail

Get a single routing detail for a single internal or external account.

```ts
async getRoutingDetail(
  accountsType: AccountsType,
  accountId: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RoutingDetail>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountsType` | [`AccountsType`](../../doc/models/accounts-type.md) | Template, Required | - |
| `accountId` | `string` | Template, Required | The ID of the account. |
| `id` | `string` | Template, Required | The ID of the routing detail. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RoutingDetail`](../../doc/models/routing-detail.md).

## Example Usage

```ts
const accountsType = AccountsType.ExternalAccounts;

const accountId = 'account_id2';

const id = 'id0';

try {
  const response = await routingDetailApi.getRoutingDetail(
    accountsType,
    accountId,
    id
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


# Delete Routing Detail

Delete a routing detail for a single external account.

```ts
async deleteRoutingDetail(
  accountsType: AccountsType1,
  accountId: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountsType` | [`AccountsType1`](../../doc/models/accounts-type-1.md) | Template, Required | - |
| `accountId` | `string` | Template, Required | The ID of the account. |
| `id` | `string` | Template, Required | The ID of the routing detail. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const accountsType = AccountsType1.ExternalAccounts;

const accountId = 'account_id2';

const id = 'id0';

try {
  const response = await routingDetailApi.deleteRoutingDetail(
    accountsType,
    accountId,
    id
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

