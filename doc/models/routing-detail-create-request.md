
# Routing Detail Create Request

## Structure

`RoutingDetailCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `routingNumber` | `string` | Required | The routing number of the bank. |
| `routingNumberType` | [`RoutingNumberTypeEnum`](../../doc/models/routing-number-type-enum.md) | Required | One of `aba`, `swift`, `ca_cpa`, `au_bsb`, `gb_sort_code`, `in_ifsc`, `cnaps`. |
| `paymentType` | [`PaymentType1Enum \| null \| undefined`](../../doc/models/payment-type-1-enum.md) | Optional | If the routing detail is to be used for a specific payment type this field will be populated, otherwise null. |

## Example (as JSON)

```json
{
  "routing_number": "routing_number0",
  "routing_number_type": "my_branch_code",
  "payment_type": "interac"
}
```

