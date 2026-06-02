
# Document

## Structure

`Document`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `discardedAt` | `string \| null` | Required | - |
| `documentType` | `string \| null` | Required | A category given to the document, can be `null`. |
| `source` | `string` | Required | The source of the document. Can be `vendor`, `customer`, or `modern_treasury`. |
| `documentableId` | `string` | Required | The unique identifier for the associated object. |
| `documentableType` | [`DocumentableTypeEnum`](../../doc/models/documentable-type-enum.md) | Required | The type of the associated object. Currently can be one of `payment_order`, `transaction`, `paper_item`, `expected_payment`, `counterparty`, `organization`, `case`, `internal_account`, `decision`, or `external_account`. |
| `documentDetails` | [`DocumentDetail[]`](../../doc/models/document-detail.md) | Required | - |
| `file` | [`File`](../../doc/models/file.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "00001a46-0000-0000-0000-000000000000",
  "object": "object4",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "discarded_at": "2016-03-13T12:52:32.123Z",
  "document_type": "document_type4",
  "source": "source2",
  "documentable_id": "00001738-0000-0000-0000-000000000000",
  "documentable_type": "transaction",
  "document_details": [
    {
      "id": "00002434-0000-0000-0000-000000000000",
      "object": "object6",
      "live_mode": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "discarded_at": "2016-03-13T12:52:32.123Z",
      "document_identifier_type": "document_identifier_type4",
      "document_identifier": "document_identifier0"
    }
  ],
  "file": {
    "size": 6,
    "filename": "filename2",
    "content_type": "content_type4"
  }
}
```

