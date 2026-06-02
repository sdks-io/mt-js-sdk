
# Ledger

## Structure

`Ledger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `discardedAt` | `string \| null` | Required | - |
| `name` | `string` | Required | The name of the ledger. |
| `description` | `string \| null` | Required | An optional free-form description for internal use. |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "id": "00000218-0000-0000-0000-000000000000",
  "object": "object4",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "discarded_at": "2016-03-13T12:52:32.123Z",
  "name": "name6",
  "description": "description6",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  }
}
```

