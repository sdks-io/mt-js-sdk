
# Ledgerable Event Create Request

*This model accepts additional fields of type unknown.*

## Structure

`LedgerableEventCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Name of the ledgerable event. |
| `description` | `string \| null \| undefined` | Optional | Description of the ledgerable event. |
| `direction` | `string \| null \| undefined` | Optional | One of `credit`, `debit`. |
| `amount` | `number` | Required | Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. |
| `currency` | `string \| null \| undefined` | Optional | An ISO 4217 conformed currency or a custom currency. |
| `currencyExponent` | `number \| null \| undefined` | Optional | Must be included if currency is a custom currency. The currency_exponent cannot exceed 30. |
| `customData` | `unknown \| null \| undefined` | Optional | Additionally data to be used by the Ledger Event Handler. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name8",
  "amount": 236,
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "description": "description8",
  "direction": "direction4",
  "currency": "currency8",
  "currency_exponent": 198,
  "custom_data": {
    "key1": "val1",
    "key2": "val2"
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

