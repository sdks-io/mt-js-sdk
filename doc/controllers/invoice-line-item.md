# Invoice Line Item

```ts
const invoiceLineItemApi = new InvoiceLineItemApi(client);
```

## Class Name

`InvoiceLineItemApi`

## Methods

* [List Invoice Line Items](../../doc/controllers/invoice-line-item.md#list-invoice-line-items)
* [Create Invoice Line Item](../../doc/controllers/invoice-line-item.md#create-invoice-line-item)
* [Get Invoice Line Item](../../doc/controllers/invoice-line-item.md#get-invoice-line-item)
* [Update Invoice Line Item](../../doc/controllers/invoice-line-item.md#update-invoice-line-item)
* [Delete Invoice Line Item](../../doc/controllers/invoice-line-item.md#delete-invoice-line-item)


# List Invoice Line Items

```ts
async listInvoiceLineItems(
  invoiceId: string,
  afterCursor?: string | null,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvoiceLineItem[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | invoice_id |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`InvoiceLineItem[]`](../../doc/models/invoice-line-item.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

try {
  const response = await invoiceLineItemApi.listInvoiceLineItems(invoiceId);

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


# Create Invoice Line Item

```ts
async createInvoiceLineItem(
  invoiceId: string,
  idempotencyKey?: string,
  body?: InvoiceLineItemCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvoiceLineItem>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | invoice_id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `body` | [`InvoiceLineItemCreateRequest \| undefined`](../../doc/models/invoice-line-item-create-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`InvoiceLineItem`](../../doc/models/invoice-line-item.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

try {
  const response = await invoiceLineItemApi.createInvoiceLineItem(invoiceId);

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


# Get Invoice Line Item

```ts
async getInvoiceLineItem(
  invoiceId: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvoiceLineItem>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | invoice_id |
| `id` | `string` | Template, Required | id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`InvoiceLineItem`](../../doc/models/invoice-line-item.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

const id = 'id0';

try {
  const response = await invoiceLineItemApi.getInvoiceLineItem(
    invoiceId,
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


# Update Invoice Line Item

```ts
async updateInvoiceLineItem(
  invoiceId: string,
  id: string,
  body?: InvoiceLineItemUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvoiceLineItem>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | invoice_id |
| `id` | `string` | Template, Required | id |
| `body` | [`InvoiceLineItemUpdateRequest \| undefined`](../../doc/models/invoice-line-item-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`InvoiceLineItem`](../../doc/models/invoice-line-item.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

const id = 'id0';

try {
  const response = await invoiceLineItemApi.updateInvoiceLineItem(
    invoiceId,
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


# Delete Invoice Line Item

```ts
async deleteInvoiceLineItem(
  invoiceId: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvoiceLineItem>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | invoice_id |
| `id` | `string` | Template, Required | id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`InvoiceLineItem`](../../doc/models/invoice-line-item.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

const id = 'id0';

try {
  const response = await invoiceLineItemApi.deleteInvoiceLineItem(
    invoiceId,
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

