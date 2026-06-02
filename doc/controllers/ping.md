# Ping

```ts
const pingController = new PingController(client);
```

## Class Name

`PingController`


# Ping API

A test endpoint often used to confirm credentials and headers are being passed in correctly.

```ts
async pingApi(
  requestOptions?: RequestOptions
): Promise<ApiResponse<PingResponse>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PingResponse`](../../doc/models/ping-response.md).

## Example Usage

```ts
try {
  const response = await pingController.pingApi();

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
| 401 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 429 | unsuccessful | `ApiError` |
| 500 | internal server error | `ApiError` |

