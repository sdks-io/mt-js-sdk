# Transaction Line Item

```ts
const transactionLineItemApi = new TransactionLineItemApi(client);
```

## Class Name

`TransactionLineItemApi`


# List Transaction Line Items

```ts
async listTransactionLineItems(
  transactionId: string,
  afterCursor?: string | null,
  type?: Type16 | null,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionLineItem[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string` | Template, Required | transaction_id |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `type` | [`Type16 \| null \| undefined`](../../doc/models/type-16.md) | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransactionLineItem[]`](../../doc/models/transaction-line-item.md).

## Example Usage

```ts
const transactionId = 'transaction_id8';

try {
  const response = await transactionLineItemApi.listTransactionLineItems(transactionId);

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

