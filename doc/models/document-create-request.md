
# Document Create Request

## Structure

`DocumentCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentableId` | `string` | Required | The unique identifier for the associated object. |
| `documentableType` | [`DocumentableType1Enum`](../../doc/models/documentable-type-1-enum.md) | Required | - |
| `documentType` | `string \| undefined` | Optional | A category given to the document, can be `null`. |
| `file` | `string` | Required | - |

## Example (as JSON)

```json
{
  "documentable_id": "documentable_id4",
  "documentable_type": "connections",
  "document_type": "document_type4",
  "file": "file6"
}
```

