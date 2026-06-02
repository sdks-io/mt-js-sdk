
# Event

## Structure

`Event`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `resource` | `string` | Required | The type of resource for the event. |
| `eventName` | `string` | Required | The name of the event. |
| `eventTime` | `string` | Required | The time of the event. |
| `data` | `unknown` | Required | The body of the event. |
| `entityId` | `string` | Required | The ID of the entity for the event. |

## Example (as JSON)

```json
{
  "id": "000022e2-0000-0000-0000-000000000000",
  "object": "object2",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "resource": "resource0",
  "event_name": "event_name8",
  "event_time": "2016-03-13T12:52:32.123Z",
  "data": {
    "key1": "val1",
    "key2": "val2"
  },
  "entity_id": "entity_id8"
}
```

