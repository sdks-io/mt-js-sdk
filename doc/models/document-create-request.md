
# Document Create Request

*This model accepts additional fields of type unknown.*

## Structure

`DocumentCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentableId` | `string` | Required | The unique identifier for the associated object. |
| `documentableType` | [`DocumentableType1`](../../doc/models/documentable-type-1.md) | Required | - |
| `documentType` | `string \| undefined` | Optional | A category given to the document, can be `null`. |
| `file` | `string` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "documentable_id": "documentable_id4",
  "documentable_type": "connections",
  "document_type": "document_type4",
  "file": "file6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

