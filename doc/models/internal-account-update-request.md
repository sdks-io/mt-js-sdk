
# Internal Account Update Request

*This model accepts additional fields of type unknown.*

## Structure

`InternalAccountUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The nickname for the internal account. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data in the form of key-value pairs. Pairs can be removed by passing an empty string or `null` as the value. |
| `parentAccountId` | `string \| undefined` | Optional | The parent internal account for this account. |
| `counterpartyId` | `string \| undefined` | Optional | The Counterparty associated to this account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name6",
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata2",
    "key2": "metadata1"
  },
  "parent_account_id": "parent_account_id4",
  "counterparty_id": "counterparty_id2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

