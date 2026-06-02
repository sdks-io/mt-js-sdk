# Internal Account

```ts
const internalAccountApi = new InternalAccountApi(client);
```

## Class Name

`InternalAccountApi`

## Methods

* [List Internal Accounts](../../doc/controllers/internal-account.md#list-internal-accounts)
* [Create Internal Account](../../doc/controllers/internal-account.md#create-internal-account)
* [Get Internal Account](../../doc/controllers/internal-account.md#get-internal-account)
* [Update Internal Account](../../doc/controllers/internal-account.md#update-internal-account)


# List Internal Accounts

```ts
async listInternalAccounts(
  afterCursor?: string | null,
  perPage?: number,
  currency?: Currency,
  counterpartyId?: string,
  paymentType?: PaymentType13,
  paymentDirection?: PaymentDirection,
  metadata?: Record<string, string>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InternalAccount[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `currency` | [`Currency \| undefined`](../../doc/models/currency.md) | Query, Optional | The currency associated with the internal account. |
| `counterpartyId` | `string \| undefined` | Query, Optional | The counterparty associated with the internal account. |
| `paymentType` | [`PaymentType13 \| undefined`](../../doc/models/payment-type-13.md) | Query, Optional | The type of payment that can be made by the internal account. |
| `paymentDirection` | [`PaymentDirection \| undefined`](../../doc/models/payment-direction.md) | Query, Optional | The direction of payments that can be made by internal account. |
| `metadata` | `Record<string, string> \| undefined` | Query, Optional | For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`InternalAccount[]`](../../doc/models/internal-account.md).

## Example Usage

```ts
try {
  const response = await internalAccountApi.listInternalAccounts();

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


# Create Internal Account

```ts
async createInternalAccount(
  idempotencyKey?: string,
  body?: InternalAccountCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InternalAccount>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`InternalAccountCreateRequest \| undefined`](../../doc/models/internal-account-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`InternalAccount`](../../doc/models/internal-account.md).

## Example Usage

```ts
const body: InternalAccountCreateRequest = {
  connectionId: 'connection_id6',
  name: 'name6',
  partyName: 'party_name8',
  currency: Currency1.Usd,
  vendorAttributes: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await internalAccountApi.createInternalAccount(
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


# Get Internal Account

```ts
async getInternalAccount(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InternalAccount>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Unique identifier for the account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`InternalAccount`](../../doc/models/internal-account.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await internalAccountApi.getInternalAccount(id);

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


# Update Internal Account

```ts
async updateInternalAccount(
  id: string,
  body?: InternalAccountUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InternalAccount>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Unique identifier for the account. |
| `body` | [`InternalAccountUpdateRequest \| undefined`](../../doc/models/internal-account-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`InternalAccount`](../../doc/models/internal-account.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await internalAccountApi.updateInternalAccount(id);

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

