# Payment Reference

```ts
const paymentReferenceController = new PaymentReferenceController(client);
```

## Class Name

`PaymentReferenceController`

## Methods

* [List Payment References](../../doc/controllers/payment-reference.md#list-payment-references)
* [Get Payment Reference](../../doc/controllers/payment-reference.md#get-payment-reference)


# List Payment References

```ts
async listPaymentReferences(
  afterCursor?: string | null,
  perPage?: number,
  referenceableId?: string,
  referenceableType?: ReferenceableType1,
  referenceNumber?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentReferenceObject[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `referenceableId` | `string \| undefined` | Query, Optional | The id of the referenceable to search for. Must be accompanied by the referenceable_type or will return an error. |
| `referenceableType` | [`ReferenceableType1 \| undefined`](../../doc/models/referenceable-type-1.md) | Query, Optional | One of the referenceable types. This must be accompanied by the id of the referenceable or will return an error. |
| `referenceNumber` | `string \| undefined` | Query, Optional | The actual reference number assigned by the bank. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentReferenceObject[]`](../../doc/models/payment-reference-object.md).

## Example Usage

```ts
try {
  const response = await paymentReferenceController.listPaymentReferences();

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


# Get Payment Reference

```ts
async getPaymentReference(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentReferenceObject>>
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentReferenceObject`](../../doc/models/payment-reference-object.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await paymentReferenceController.getPaymentReference(id);

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

