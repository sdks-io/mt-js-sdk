
# Payment Reference

## Structure

`PaymentReference`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `referenceNumber` | `string` | Required | The vendor reference number. |
| `referenceNumberType` | [`ReferenceNumberType`](../../doc/models/reference-number-type.md) | Required | The type of the reference number. Referring to the vendor payment id. |

## Example (as JSON)

```json
{
  "id": "00000698-0000-0000-0000-000000000000",
  "object": "object6",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "reference_number": "reference_number4",
  "reference_number_type": "first_republic_internal_id"
}
```

