
# Ledger Transaction Reversal Create Request

*This model accepts additional fields of type unknown.*

## Structure

`LedgerTransactionReversalCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | An optional free-form description for the reversal ledger transaction. Maximum of 1000 characters allowed. |
| `status` | [`Status15 \| undefined`](../../doc/models/status-15.md) | Optional | Status of the reversal ledger transaction. It defaults to `posted` if not provided. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data to be added to the reversal ledger transaction as key-value pairs. Both the key and value must be strings. |
| `effectiveAt` | `string \| null \| undefined` | Optional | The timestamp (ISO8601 format) at which the reversal ledger transaction happened for reporting purposes. It defaults to the `effective_at` of the original ledger transaction if not provided. |
| `externalId` | `string \| undefined` | Optional | Must be unique within the ledger. |
| `ledgerableType` | [`LedgerableType5 \| undefined`](../../doc/models/ledgerable-type-5.md) | Optional | Specify this if you'd like to link the reversal ledger transaction to a Payment object like Return or Reversal. |
| `ledgerableId` | `string \| undefined` | Optional | Specify this if you'd like to link the reversal ledger transaction to a Payment object like Return or Reversal. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "description": "description6",
  "status": "archived",
  "effective_at": "2016-03-13T12:52:32.123Z",
  "external_id": "external_id2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

