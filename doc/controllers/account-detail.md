# Account Detail

```ts
const accountDetailApi = new AccountDetailApi(client);
```

## Class Name

`AccountDetailApi`

## Methods

* [Create Account Detail](../../doc/controllers/account-detail.md#create-account-detail)
* [Delete Account Detail](../../doc/controllers/account-detail.md#delete-account-detail)
* [Get Account Detail](../../doc/controllers/account-detail.md#get-account-detail)
* [List Account Details](../../doc/controllers/account-detail.md#list-account-details)


# Create Account Detail

Create an account detail for an external account.

```ts
async createAccountDetail(
  accountsType: AccountsType1,
  accountId: string,
  idempotencyKey?: string,
  body?: AccountDetailCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountDetail>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountsType` | [`AccountsType1`](../../doc/models/accounts-type-1.md) | Template, Required | - |
| `accountId` | `string` | Template, Required | The ID of the account. |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`AccountDetailCreateRequest \| undefined`](../../doc/models/account-detail-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountDetail`](../../doc/models/account-detail.md).

## Example Usage

```ts
const accountsType = AccountsType1.ExternalAccounts;

const accountId = 'account_id2';

try {
  const response = await accountDetailApi.createAccountDetail(
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


# Delete Account Detail

Delete a single account detail for an external account.

```ts
async deleteAccountDetail(
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
| `id` | `string` | Template, Required | The ID of the account detail. |
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
  const response = await accountDetailApi.deleteAccountDetail(
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


# Get Account Detail

Get a single account detail for a single internal or external account.

```ts
async getAccountDetail(
  accountsType: AccountsType,
  accountId: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountDetail>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountsType` | [`AccountsType`](../../doc/models/accounts-type.md) | Template, Required | - |
| `accountId` | `string` | Template, Required | The ID of the account. |
| `id` | `string` | Template, Required | The ID of the account detail. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountDetail`](../../doc/models/account-detail.md).

## Example Usage

```ts
const accountsType = AccountsType.ExternalAccounts;

const accountId = 'account_id2';

const id = 'id0';

try {
  const response = await accountDetailApi.getAccountDetail(
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


# List Account Details

Get a list of account details for a single internal or external account.

```ts
async listAccountDetails(
  accountsType: AccountsType,
  accountId: string,
  afterCursor?: string | null,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountDetail[]>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountDetail[]`](../../doc/models/account-detail.md).

## Example Usage

```ts
const accountsType = AccountsType.ExternalAccounts;

const accountId = 'account_id2';

try {
  const response = await accountDetailApi.listAccountDetails(
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

