
# Routing Detail Create Request

*This model accepts additional fields of type unknown.*

## Structure

`RoutingDetailCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `routingNumber` | `string` | Required | The routing number of the bank. |
| `routingNumberType` | [`RoutingNumberType`](../../doc/models/routing-number-type.md) | Required | One of `aba`, `swift`, `ca_cpa`, `au_bsb`, `gb_sort_code`, `in_ifsc`, `cnaps`. |
| `paymentType` | [`PaymentType1 \| null \| undefined`](../../doc/models/payment-type-1.md) | Optional | If the routing detail is to be used for a specific payment type this field will be populated, otherwise null. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "routing_number": "routing_number0",
  "routing_number_type": "my_branch_code",
  "payment_type": "interac",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

