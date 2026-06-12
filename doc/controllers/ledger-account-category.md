# Ledger Account Category

```ts
const ledgerAccountCategoryApi = new LedgerAccountCategoryApi(client);
```

## Class Name

`LedgerAccountCategoryApi`

## Methods

* [Add Ledger Account Category to Ledger Account Category](../../doc/controllers/ledger-account-category.md#add-ledger-account-category-to-ledger-account-category)
* [Add Ledger Account to Ledger Account Category](../../doc/controllers/ledger-account-category.md#add-ledger-account-to-ledger-account-category)
* [Create Ledger Account Category](../../doc/controllers/ledger-account-category.md#create-ledger-account-category)
* [Delete Ledger Account Category](../../doc/controllers/ledger-account-category.md#delete-ledger-account-category)
* [Delete Ledger Account Category from Ledger Account Category](../../doc/controllers/ledger-account-category.md#delete-ledger-account-category-from-ledger-account-category)
* [Get Ledger Account Category](../../doc/controllers/ledger-account-category.md#get-ledger-account-category)
* [List Ledger Account Categories](../../doc/controllers/ledger-account-category.md#list-ledger-account-categories)
* [Remove Ledger Account from Ledger Account Category](../../doc/controllers/ledger-account-category.md#remove-ledger-account-from-ledger-account-category)
* [Update Ledger Account Category](../../doc/controllers/ledger-account-category.md#update-ledger-account-category)


# Add Ledger Account Category to Ledger Account Category

Add a ledger account category to a ledger account category.

```ts
async addLedgerAccountCategoryToLedgerAccountCategory(
  id: string,
  subCategoryId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `subCategoryId` | `string` | Template, Required | sub_category_id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const id = 'id0';

const subCategoryId = 'sub_category_id0';

try {
  const response = await ledgerAccountCategoryApi.addLedgerAccountCategoryToLedgerAccountCategory(
    id,
    subCategoryId
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
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Add Ledger Account to Ledger Account Category

Add a ledger account to a ledger account category.

```ts
async addLedgerAccountToLedgerAccountCategory(
  id: string,
  ledgerAccountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `ledgerAccountId` | `string` | Template, Required | ledger_account_id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const id = 'id0';

const ledgerAccountId = 'ledger_account_id4';

try {
  const response = await ledgerAccountCategoryApi.addLedgerAccountToLedgerAccountCategory(
    id,
    ledgerAccountId
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
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Create Ledger Account Category

Create a ledger account category.

```ts
async createLedgerAccountCategory(
  idempotencyKey?: string,
  body?: LedgerAccountCategoryCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccountCategory>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`LedgerAccountCategoryCreateRequest \| undefined`](../../doc/models/ledger-account-category-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccountCategory`](../../doc/models/ledger-account-category.md).

## Example Usage

```ts
const body: LedgerAccountCategoryCreateRequest = {
  name: 'name6',
  currency: 'currency6',
  ledgerId: '00002576-0000-0000-0000-000000000000',
  normalBalance: NormalBalance2.Credit,
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await ledgerAccountCategoryApi.createLedgerAccountCategory(
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
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Delete Ledger Account Category

Delete a ledger account category.

```ts
async deleteLedgerAccountCategory(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccountCategory>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccountCategory`](../../doc/models/ledger-account-category.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await ledgerAccountCategoryApi.deleteLedgerAccountCategory(id);

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
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Delete Ledger Account Category from Ledger Account Category

Delete a ledger account category from a ledger account category.

```ts
async deleteLedgerAccountCategoryFromLedgerAccountCategory(
  id: string,
  subCategoryId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `subCategoryId` | `string` | Template, Required | sub_category_id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const id = 'id0';

const subCategoryId = 'sub_category_id0';

try {
  const response = await ledgerAccountCategoryApi.deleteLedgerAccountCategoryFromLedgerAccountCategory(
    id,
    subCategoryId
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
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Ledger Account Category

Get the details on a single ledger account category.

```ts
async getLedgerAccountCategory(
  id: string,
  balances?: Balances1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccountCategory>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `balances` | [`Balances1 \| undefined`](../../doc/models/balances-1.md) | Query, Optional | For example, if you want the balances as of a particular time (ISO8601), the encoded query string would be `balances%5Beffective_at%5D=2000-12-31T12:00:00Z`. The balances as of a time are inclusive of entries with that exact time. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccountCategory`](../../doc/models/ledger-account-category.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await ledgerAccountCategoryApi.getLedgerAccountCategory(id);

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


# List Ledger Account Categories

Get a list of ledger account categories.

```ts
async listLedgerAccountCategories(
  afterCursor?: string | null,
  perPage?: number,
  metadata?: Record<string, string>,
  name?: string,
  ledgerId?: string,
  parentLedgerAccountCategoryId?: string,
  ledgerAccountId?: string,
  balances?: Balances,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccountCategory[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Query, Optional | For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters. |
| `name` | `string \| undefined` | Query, Optional | - |
| `ledgerId` | `string \| undefined` | Query, Optional | - |
| `parentLedgerAccountCategoryId` | `string \| undefined` | Query, Optional | Query categories that are nested underneath a parent category |
| `ledgerAccountId` | `string \| undefined` | Query, Optional | Query categories which contain a ledger account directly or through child categories. |
| `balances` | [`Balances \| undefined`](../../doc/models/balances.md) | Query, Optional | For example, if you want the balances as of a particular time (ISO8601), the encoded query string would be `balances%5Beffective_at%5D=2000-12-31T12:00:00Z`. The balances as of a time are inclusive of entries with that exact time. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccountCategory[]`](../../doc/models/ledger-account-category.md).

## Example Usage

```ts
try {
  const response = await ledgerAccountCategoryApi.listLedgerAccountCategories();

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


# Remove Ledger Account from Ledger Account Category

Remove a ledger account from a ledger account category.

```ts
async removeLedgerAccountFromLedgerAccountCategory(
  id: string,
  ledgerAccountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `ledgerAccountId` | `string` | Template, Required | ledger_account_id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const id = 'id0';

const ledgerAccountId = 'ledger_account_id4';

try {
  const response = await ledgerAccountCategoryApi.removeLedgerAccountFromLedgerAccountCategory(
    id,
    ledgerAccountId
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
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Update Ledger Account Category

Update the details of a ledger account category.

```ts
async updateLedgerAccountCategory(
  id: string,
  body?: LedgerAccountCategoryUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerAccountCategory>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `body` | [`LedgerAccountCategoryUpdateRequest \| undefined`](../../doc/models/ledger-account-category-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerAccountCategory`](../../doc/models/ledger-account-category.md).

## Example Usage

```ts
const id = 'id0';

const body: LedgerAccountCategoryUpdateRequest = {
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await ledgerAccountCategoryApi.updateLedgerAccountCategory(
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
    if (error instanceof ErrorMessageError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |

