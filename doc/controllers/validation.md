# Validation

```ts
const validationController = new ValidationController(client);
```

## Class Name

`ValidationController`


# Validate Routing Number

Validates the routing number information supplied without creating a routing detail

```ts
async validateRoutingNumber(
  routingNumber: string,
  routingNumberType: RoutingNumberType8,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RoutingNumberLookupRequest>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `routingNumber` | `string` | Query, Required | The routing number that is being validated. |
| `routingNumberType` | [`RoutingNumberType8`](../../doc/models/routing-number-type-8.md) | Query, Required | One of `aba`, `au_bsb`, `br_codigo`, `ca_cpa`, `cnaps`, `gb_sort_code`, `in_ifsc`, `my_branch_code`, or `swift`. In sandbox mode we currently only support `aba` and `swift` with routing numbers '123456789' and 'GRINUST0XXX' respectively. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful valid routing number and type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RoutingNumberLookupRequest`](../../doc/models/routing-number-lookup-request.md).

## Example Usage

```ts
const routingNumber = 'routing_number4';

const routingNumberType = RoutingNumberType8.MyBranchCode;

try {
  const response = await validationController.validateRoutingNumber(
    routingNumber,
    routingNumberType
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
| 422 | unsuccessful with invalid parameter | [`ErrorMessageError`](../../doc/models/error-message-error.md) |

