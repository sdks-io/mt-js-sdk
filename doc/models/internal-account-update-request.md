
# Internal Account Update Request

## Structure

`InternalAccountUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The nickname for the internal account. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data in the form of key-value pairs. Pairs can be removed by passing an empty string or `null` as the value. |
| `parentAccountId` | `string \| undefined` | Optional | The parent internal account for this account. |
| `counterpartyId` | `string \| undefined` | Optional | The Counterparty associated to this account. |

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
  "counterparty_id": "counterparty_id2"
}
```

