
# Current Return

If the return's status is `returned`, this will include the return object's data that is returning this return.

## Structure

`CurrentReturn`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `object` | `string \| undefined` | Optional | - |
| `liveMode` | `boolean \| undefined` | Optional | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `status` | [`Status5 \| undefined`](../../doc/models/status-5.md) | Optional | - |
| `returnableId` | `string \| null \| undefined` | Optional | - |
| `returnableType` | [`ReturnableType1 \| null \| undefined`](../../doc/models/returnable-type-1.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "000002b6-0000-0000-0000-000000000000",
  "object": "object2",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z"
}
```

