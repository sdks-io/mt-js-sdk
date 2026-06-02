
# Routing Detail

## Structure

`RoutingDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `discardedAt` | `string \| null` | Required | - |
| `routingNumber` | `string` | Required | The routing number of the bank. |
| `routingNumberType` | [`RoutingNumberType`](../../doc/models/routing-number-type.md) | Required | One of `aba`, `swift`, `ca_cpa`, `au_bsb`, `gb_sort_code`, `in_ifsc`, `cnaps`. |
| `paymentType` | [`PaymentType1 \| null`](../../doc/models/payment-type-1.md) | Required | If the routing detail is to be used for a specific payment type this field will be populated, otherwise null. |
| `bankName` | `string` | Required | The name of the bank. |
| `bankAddress` | [`Address \| null`](../../doc/models/address.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "000015ca-0000-0000-0000-000000000000",
  "object": "object6",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "discarded_at": "2016-03-13T12:52:32.123Z",
  "routing_number": "routing_number2",
  "routing_number_type": "aba",
  "payment_type": "interac",
  "bank_name": "bank_name4",
  "bank_address": {
    "id": "000004a8-0000-0000-0000-000000000000",
    "object": "object0",
    "live_mode": false,
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "line1": "line14",
    "line2": "line26",
    "locality": "locality2",
    "region": "region8",
    "postal_code": "postal_code4",
    "country": "country6"
  }
}
```

