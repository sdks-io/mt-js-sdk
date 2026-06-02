
# Account Detail 1

*This model accepts additional fields of type unknown.*

## Structure

`AccountDetail1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | - |
| `accountNumberType` | [`AccountNumberType2 \| undefined`](../../doc/models/account-number-type-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "account_number": "account_number8",
  "account_number_type": "other",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

