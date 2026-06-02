# Counterparty

```ts
const counterpartyApi = new CounterpartyApi(client);
```

## Class Name

`CounterpartyApi`

## Methods

* [Collect Account Details](../../doc/controllers/counterparty.md#collect-account-details)
* [List Counterparties](../../doc/controllers/counterparty.md#list-counterparties)
* [Create Counterparty](../../doc/controllers/counterparty.md#create-counterparty)
* [Get Counterparty](../../doc/controllers/counterparty.md#get-counterparty)
* [Update Counterparty](../../doc/controllers/counterparty.md#update-counterparty)
* [Delete Counterparty](../../doc/controllers/counterparty.md#delete-counterparty)


# Collect Account Details

Send an email requesting account details.

```ts
async collectAccountDetails(
  id: string,
  idempotencyKey?: string,
  body?: CounterpartyCollectAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CounterpartyCollectAccountResponse>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | counterparty id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`CounterpartyCollectAccountRequest \| undefined`](../../doc/models/counterparty-collect-account-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CounterpartyCollectAccountResponse`](../../doc/models/counterparty-collect-account-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await counterpartyApi.collectAccountDetails(id);

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


# List Counterparties

Get a paginated list of all counterparties.

```ts
async listCounterparties(
  afterCursor?: string | null,
  perPage?: number,
  name?: string,
  email?: string,
  metadata?: Record<string, string>,
  createdAtLowerBound?: string,
  createdAtUpperBound?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Counterparty[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `name` | `string \| undefined` | Query, Optional | Performs a partial string match of the name field. This is also case insensitive. |
| `email` | `string \| undefined` | Query, Optional | Performs a partial string match of the email field. This is also case insensitive. |
| `metadata` | `Record<string, string> \| undefined` | Query, Optional | For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters. |
| `createdAtLowerBound` | `string \| undefined` | Query, Optional | Used to return counterparties created after some datetime. |
| `createdAtUpperBound` | `string \| undefined` | Query, Optional | Used to return counterparties created before some datetime. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Counterparty[]`](../../doc/models/counterparty.md).

## Example Usage

```ts
try {
  const response = await counterpartyApi.listCounterparties();

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
| 400 | bad_request | `ApiError` |
| 401 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Create Counterparty

Create a new counterparty.

```ts
async createCounterparty(
  idempotencyKey?: string,
  body?: CounterpartyCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Counterparty>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`CounterpartyCreateRequest \| undefined`](../../doc/models/counterparty-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Counterparty`](../../doc/models/counterparty.md).

## Example Usage

```ts
const body: CounterpartyCreateRequest = {
  name: 'name6',
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await counterpartyApi.createCounterparty(
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
| 415 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Counterparty

Get details on a single counterparty.

```ts
async getCounterparty(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Counterparty>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The id of an existing counterparty. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Counterparty`](../../doc/models/counterparty.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await counterpartyApi.getCounterparty(id);

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


# Update Counterparty

Updates a given counterparty with new information.

```ts
async updateCounterparty(
  id: string,
  body?: CounterpartyUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Counterparty>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The id of an existing counterparty. |
| `body` | [`CounterpartyUpdateRequest \| undefined`](../../doc/models/counterparty-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Counterparty`](../../doc/models/counterparty.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await counterpartyApi.updateCounterparty(id);

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


# Delete Counterparty

Deletes a given counterparty.

```ts
async deleteCounterparty(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The id of an existing counterparty. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const id = 'id0';

try {
  const response = await counterpartyApi.deleteCounterparty(id);

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

