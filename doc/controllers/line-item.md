# Line Item

```ts
const lineItemApi = new LineItemApi(client);
```

## Class Name

`LineItemApi`

## Methods

* [List Line Items](../../doc/controllers/line-item.md#list-line-items)
* [Get Line Item](../../doc/controllers/line-item.md#get-line-item)
* [Update Line Item](../../doc/controllers/line-item.md#update-line-item)


# List Line Items

Get a list of line items

```ts
async listLineItems(
  itemizableId: string,
  itemizableType: ItemizableType1,
  afterCursor?: string | null,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LineItem[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemizableId` | `string` | Template, Required | The ID of the payment order or expected payment. |
| `itemizableType` | [`ItemizableType1`](../../doc/models/itemizable-type-1.md) | Template, Required | One of `payment_orders` or `expected_payments`. |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LineItem[]`](../../doc/models/line-item.md).

## Example Usage

```ts
const itemizableId = 'itemizable_id4';

const itemizableType = ItemizableType1.ExpectedPayments;

try {
  const response = await lineItemApi.listLineItems(
    itemizableId,
    itemizableType
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


# Get Line Item

Get a single line item

```ts
async getLineItem(
  itemizableId: string,
  itemizableType: ItemizableType1,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LineItem>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemizableId` | `string` | Template, Required | The ID of the payment order or expected payment. |
| `itemizableType` | [`ItemizableType1`](../../doc/models/itemizable-type-1.md) | Template, Required | One of `payment_orders` or `expected_payments`. |
| `id` | `string` | Template, Required | The ID of the line item. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LineItem`](../../doc/models/line-item.md).

## Example Usage

```ts
const itemizableId = 'itemizable_id4';

const itemizableType = ItemizableType1.ExpectedPayments;

const id = 'id0';

try {
  const response = await lineItemApi.getLineItem(
    itemizableId,
    itemizableType,
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


# Update Line Item

```ts
async updateLineItem(
  itemizableId: string,
  itemizableType: ItemizableType1,
  id: string,
  body?: LineItemUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LineItem>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemizableId` | `string` | Template, Required | The ID of the payment order or expected payment. |
| `itemizableType` | [`ItemizableType1`](../../doc/models/itemizable-type-1.md) | Template, Required | One of `payment_orders` or `expected_payments`. |
| `id` | `string` | Template, Required | The ID of the line item. |
| `body` | [`LineItemUpdateRequest \| undefined`](../../doc/models/line-item-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LineItem`](../../doc/models/line-item.md).

## Example Usage

```ts
const itemizableId = 'itemizable_id4';

const itemizableType = ItemizableType1.ExpectedPayments;

const id = 'id0';

const body: LineItemUpdateRequest = {
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};

try {
  const response = await lineItemApi.updateLineItem(
    itemizableId,
    itemizableType,
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
| 422 | unsuccessful | [`ErrorMessageError`](../../doc/models/error-message-error.md) |

