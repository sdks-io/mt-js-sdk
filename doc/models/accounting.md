
# Accounting

*This model accepts additional fields of type unknown.*

## Structure

`Accounting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string \| null \| undefined` | Optional | The ID of one of your accounting categories. Note that these will only be accessible if your accounting system has been connected. |
| `classId` | `string \| null \| undefined` | Optional | The ID of one of the class objects in your accounting system. Class objects track segments of your business independent of client or project. Note that these will only be accessible if your accounting system has been connected. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "account_id": "0000183c-0000-0000-0000-000000000000",
  "class_id": "00001c78-0000-0000-0000-000000000000",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

