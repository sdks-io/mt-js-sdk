# Balance Report

```ts
const balanceReportApi = new BalanceReportApi(client);
```

## Class Name

`BalanceReportApi`

## Methods

* [List Balance Reports](../../doc/controllers/balance-report.md#list-balance-reports)
* [Get Balance Report](../../doc/controllers/balance-report.md#get-balance-report)


# List Balance Reports

Get all balance reports for a given internal account.

```ts
async listBalanceReports(
  internalAccountId: string,
  asOfDate?: string,
  balanceReportType?: BalanceReportType1,
  afterCursor?: string | null,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceReport[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `internalAccountId` | `string` | Template, Required | - |
| `asOfDate` | `string \| undefined` | Query, Optional | The date of the balance report in local time. |
| `balanceReportType` | [`BalanceReportType1 \| undefined`](../../doc/models/balance-report-type-1.md) | Query, Optional | The specific type of balance report. One of `intraday`, `previous_day`, `real_time`, or `other`. |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceReport[]`](../../doc/models/balance-report.md).

## Example Usage

```ts
const internalAccountId = 'internal_account_id4';

try {
  const response = await balanceReportApi.listBalanceReports(internalAccountId);

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


# Get Balance Report

Get a single balance report for a given internal account.

```ts
async getBalanceReport(
  internalAccountId: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BalanceReport>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `internalAccountId` | `string` | Template, Required | - |
| `id` | `string` | Template, Required | Either the unique identifier of the balance report or latest for the latest balance report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BalanceReport`](../../doc/models/balance-report.md).

## Example Usage

```ts
const internalAccountId = 'internal_account_id4';

const id = 'id0';

try {
  const response = await balanceReportApi.getBalanceReport(
    internalAccountId,
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

