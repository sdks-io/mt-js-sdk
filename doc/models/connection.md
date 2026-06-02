
# Connection

## Structure

`Connection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `discardedAt` | `string \| null` | Required | - |
| `vendorId` | `string` | Required | Unique identifier for the bank or vendor. |
| `vendorCustomerId` | `string \| null` | Required | An identifier given to this connection by the bank. |
| `vendorName` | `string` | Required | A human-friendly name for the bank or vendor. |

## Example (as JSON)

```json
{
  "id": "00001eee-0000-0000-0000-000000000000",
  "object": "object4",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "discarded_at": "2016-03-13T12:52:32.123Z",
  "vendor_id": "00002026-0000-0000-0000-000000000000",
  "vendor_customer_id": "0000080c-0000-0000-0000-000000000000",
  "vendor_name": "vendor_name0"
}
```

