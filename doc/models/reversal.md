
# Reversal

## Structure

`Reversal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `status` | [`Status20`](../../doc/models/status-20.md) | Required | The current status of the reversal. |
| `paymentOrderId` | `string \| null` | Required | The ID of the relevant Payment Order. |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `reason` | [`Reason`](../../doc/models/reason.md) | Required | The reason for the reversal. |

## Example (as JSON)

```json
{
  "id": "00001e40-0000-0000-0000-000000000000",
  "object": "object2",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "status": "pending",
  "payment_order_id": "00001674-0000-0000-0000-000000000000",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "reason": "duplicate"
}
```

