# Paper Item

```ts
const paperItemApi = new PaperItemApi(client);
```

## Class Name

`PaperItemApi`

## Methods

* [Get Paper Item](../../doc/controllers/paper-item.md#get-paper-item)
* [List Paper Items](../../doc/controllers/paper-item.md#list-paper-items)


# Get Paper Item

Get details on a single paper item.

```ts
async getPaperItem(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaperItem>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaperItem`](../../doc/models/paper-item.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await paperItemApi.getPaperItem(id);

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


# List Paper Items

Get a list of all paper items.

```ts
async listPaperItems(
  lockboxNumber?: string,
  depositDateStart?: string,
  depositDateEnd?: string,
  afterCursor?: string | null,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaperItem[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lockboxNumber` | `string \| undefined` | Query, Optional | Specify `lockbox_number` if you wish to see paper items that are associated with a specific lockbox number. |
| `depositDateStart` | `string \| undefined` | Query, Optional | Specify an inclusive start date (YYYY-MM-DD) when filtering by deposit_date |
| `depositDateEnd` | `string \| undefined` | Query, Optional | Specify an inclusive end date (YYYY-MM-DD) when filtering by deposit_date |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaperItem[]`](../../doc/models/paper-item.md).

## Example Usage

```ts
try {
  const response = await paperItemApi.listPaperItems();

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

