# Ledger Entry

```ts
const ledgerEntryApi = new LedgerEntryApi(client);
```

## Class Name

`LedgerEntryApi`

## Methods

* [List Ledger Entries](../../doc/controllers/ledger-entry.md#list-ledger-entries)
* [Get Ledger Entry](../../doc/controllers/ledger-entry.md#get-ledger-entry)


# List Ledger Entries

Get a list of all ledger entries.

```ts
async listLedgerEntries(
  afterCursor?: string | null,
  perPage?: number,
  id?: Record<string, string>,
  ledgerAccountId?: string,
  ledgerTransactionId?: string,
  ledgerAccountPayoutId?: string,
  effectiveDate?: Record<string, string>,
  effectiveAt?: Record<string, string>,
  updatedAt?: Record<string, string>,
  asOfLockVersion?: number,
  ledgerAccountLockVersion?: Record<string, number>,
  ledgerAccountCategoryId?: string,
  ledgerAccountStatementId?: string,
  showDeleted?: boolean,
  direction?: Direction15,
  status?: Status22,
  orderBy?: OrderBy,
  showBalances?: boolean,
  metadata?: Record<string, string>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerEntry[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `id` | `Record<string, string> \| undefined` | Query, Optional | - |
| `ledgerAccountId` | `string \| undefined` | Query, Optional | - |
| `ledgerTransactionId` | `string \| undefined` | Query, Optional | - |
| `ledgerAccountPayoutId` | `string \| undefined` | Query, Optional | - |
| `effectiveDate` | `Record<string, string> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the transaction's effective date. Format YYYY-MM-DD |
| `effectiveAt` | `Record<string, string> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the transaction's effective time. Format ISO8601 |
| `updatedAt` | `Record<string, string> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use updated_at%5Bgt%5D=2000-01-01T12:00:00Z. |
| `asOfLockVersion` | `number \| undefined` | Query, Optional | Shows all ledger entries that were present on a ledger account at a particular `lock_version`. You must also specify `ledger_account_id`. |
| `ledgerAccountLockVersion` | `Record<string, number> \| undefined` | Query, Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the lock_version of a ledger account. For example, for all entries created at or before before lock_version 1000 of a ledger account, use `ledger_account_lock_version%5Blte%5D=1000`. |
| `ledgerAccountCategoryId` | `string \| undefined` | Query, Optional | Get all ledger entries that match the direction specified. One of `credit`, `debit`. |
| `ledgerAccountStatementId` | `string \| undefined` | Query, Optional | Get all ledger entries that are included in the ledger account statement. |
| `showDeleted` | `boolean \| undefined` | Query, Optional | If true, response will include ledger entries that were deleted. When you update a ledger transaction to specify a new set of entries, the previous entries are deleted. |
| `direction` | [`Direction15 \| undefined`](../../doc/models/direction-15.md) | Query, Optional | If true, response will include ledger entries that were deleted. When you update a ledger transaction to specify a new set of entries, the previous entries are deleted. |
| `status` | [`Status22 \| undefined`](../../doc/models/status-22.md) | Query, Optional | Get all ledger entries that match the status specified. One of `pending`, `posted`, or `archived`. |
| `orderBy` | [`OrderBy \| undefined`](../../doc/models/order-by.md) | Query, Optional | Order by `created_at` or `effective_at` in `asc` or `desc` order. For example, to order by `effective_at asc`, use `order_by%5Beffective_at%5D=asc`. Ordering by only one field at a time is supported. |
| `showBalances` | `boolean \| undefined` | Query, Optional | If true, response will include the balances attached to the ledger entry. If there is no balance available, null will be returned instead. |
| `metadata` | `Record<string, string> \| undefined` | Query, Optional | For example, if you want to query for records with metadata key `Type` and value `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerEntry[]`](../../doc/models/ledger-entry.md).

## Example Usage

```ts
try {
  const response = await ledgerEntryApi.listLedgerEntries();

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


# Get Ledger Entry

Get details on a single ledger entry.

```ts
async getLedgerEntry(
  id: string,
  showBalances?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LedgerEntry>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | id |
| `showBalances` | `boolean \| undefined` | Query, Optional | If true, response will include the balances attached to the ledger entry. If there is no balance available, null will be returned instead. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LedgerEntry`](../../doc/models/ledger-entry.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await ledgerEntryApi.getLedgerEntry(id);

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

