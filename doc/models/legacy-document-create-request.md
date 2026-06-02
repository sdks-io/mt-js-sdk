
# Legacy Document Create Request

*This model accepts additional fields of type unknown.*

## Structure

`LegacyDocumentCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentType` | `string \| undefined` | Optional | A category given to the document, can be `null`. |
| `file` | `string` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "document_type": "document_type0",
  "file": "file2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

