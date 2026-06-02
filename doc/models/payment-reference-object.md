
# Payment Reference Object

## Structure

`PaymentReferenceObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `referenceableId` | `string` | Required | The id of the referenceable to search for. Must be accompanied by the referenceable_type or will return an error. |
| `referenceableType` | [`ReferenceableType`](../../doc/models/referenceable-type.md) | Required | One of the referenceable types. This must be accompanied by the id of the referenceable or will return an error. |
| `referenceNumber` | `string` | Required | The actual reference number assigned by the bank. |
| `referenceNumberType` | [`ReferenceNumberType1`](../../doc/models/reference-number-type-1.md) | Required | The type of reference number. |

## Example (as JSON)

```json
{
  "id": "000004c4-0000-0000-0000-000000000000",
  "object": "object8",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "referenceable_id": "referenceable_id8",
  "referenceable_type": "reversal",
  "reference_number": "reference_number6",
  "reference_number_type": "jpmc_ccn"
}
```

