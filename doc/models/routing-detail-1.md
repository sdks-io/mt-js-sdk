
# Routing Detail 1

*This model accepts additional fields of type unknown.*

## Structure

`RoutingDetail1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `routingNumber` | `string` | Required | - |
| `routingNumberType` | [`RoutingNumberType1`](../../doc/models/routing-number-type-1.md) | Required | - |
| `paymentType` | [`PaymentType2 \| undefined`](../../doc/models/payment-type-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "routing_number": "routing_number4",
  "routing_number_type": "br_codigo",
  "payment_type": "card",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

