# Event

```ts
const eventApi = new EventApi(client);
```

## Class Name

`EventApi`

## Methods

* [List Events](../../doc/controllers/event.md#list-events)
* [Get Event](../../doc/controllers/event.md#get-event)


# List Events

```ts
async listEvents(
  afterCursor?: string | null,
  perPage?: number,
  eventTimeStart?: string,
  eventTimeEnd?: string,
  resource?: string,
  entityId?: string,
  eventName?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Event[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `eventTimeStart` | `string \| undefined` | Query, Optional | An inclusive lower bound for when the event occurred |
| `eventTimeEnd` | `string \| undefined` | Query, Optional | An inclusive upper bound for when the event occurred |
| `resource` | `string \| undefined` | Query, Optional | - |
| `entityId` | `string \| undefined` | Query, Optional | - |
| `eventName` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Event[]`](../../doc/models/event.md).

## Example Usage

```ts
try {
  const response = await eventApi.listEvents();

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


# Get Event

```ts
async getEvent(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Event>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | event id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Event`](../../doc/models/event.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await eventApi.getEvent(id);

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

