
# Incoming Payment Detail Create Request

*This model accepts additional fields of type unknown.*

## Structure

`IncomingPaymentDetailCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type10 \| undefined`](../../doc/models/type-10.md) | Optional | One of `ach`, `wire`, `check`. |
| `direction` | [`Direction14 \| undefined`](../../doc/models/direction-14.md) | Optional | One of `credit`, `debit`. |
| `amount` | `number \| undefined` | Optional | Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. |
| `currency` | [`Currency \| undefined`](../../doc/models/currency.md) | Optional | Three-letter ISO currency code. |
| `internalAccountId` | `string \| undefined` | Optional | The ID of one of your internal accounts. |
| `virtualAccountId` | `string \| null \| undefined` | Optional | An optional parameter to associate the incoming payment detail to a virtual account. |
| `asOfDate` | `string \| null \| undefined` | Optional | Defaults to today. |
| `description` | `string \| null \| undefined` | Optional | Defaults to a random description. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "interac",
  "direction": "credit",
  "amount": 116,
  "currency": "GIP",
  "internal_account_id": "00001d14-0000-0000-0000-000000000000",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

