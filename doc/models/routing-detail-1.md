
# Routing Detail 1

## Structure

`RoutingDetail1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `routingNumber` | `string` | Required | - |
| `routingNumberType` | [`RoutingNumberType1Enum`](../../doc/models/routing-number-type-1-enum.md) | Required | - |
| `paymentType` | [`PaymentType2Enum \| undefined`](../../doc/models/payment-type-2-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "routing_number": "routing_number4",
  "routing_number_type": "br_codigo",
  "payment_type": "card"
}
```

