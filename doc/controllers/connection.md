# Connection

```ts
const connectionApi = new ConnectionApi(client);
```

## Class Name

`ConnectionApi`


# List Connections

Get a list of all connections.

```ts
async listConnections(
  afterCursor?: string | null,
  perPage?: number,
  vendorCustomerId?: string,
  entity?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Connection[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `vendorCustomerId` | `string \| undefined` | Query, Optional | An identifier assigned by the vendor to your organization. |
| `entity` | `string \| undefined` | Query, Optional | A string code representing the vendor (i.e. bank). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Connection[]`](../../doc/models/connection.md).

## Example Usage

```ts
try {
  const response = await connectionApi.listConnections();

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

