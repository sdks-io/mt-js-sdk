
# Expected Payment Update Request

## Structure

`ExpectedPaymentUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountUpperBound` | `number \| undefined` | Optional | The highest amount this expected payment may be equal to. Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. |
| `amountLowerBound` | `number \| undefined` | Optional | The lowest amount this expected payment may be equal to. Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. |
| `direction` | [`Direction1Enum \| undefined`](../../doc/models/direction-1-enum.md) | Optional | One of credit or debit. When you are receiving money, use credit. When you are being charged, use debit. |
| `internalAccountId` | `string \| undefined` | Optional | The ID of the Internal Account for the expected payment. |
| `type` | [`Type1Enum \| null \| undefined`](../../doc/models/type-1-enum.md) | Optional | One of: ach, au_becs, bacs, book, check, eft, interac, provxchange, rtp, sen, sepa, signet, wire. |
| `currency` | [`CurrencyEnum \| undefined`](../../doc/models/currency-enum.md) | Optional | Three-letter ISO currency code. |
| `dateUpperBound` | `string \| null \| undefined` | Optional | The latest date the payment may come in. Format: yyyy-mm-dd |
| `dateLowerBound` | `string \| null \| undefined` | Optional | The earliest date the payment may come in. Format: yyyy-mm-dd |
| `description` | `string \| null \| undefined` | Optional | An optional description for internal use. |
| `statementDescriptor` | `string \| null \| undefined` | Optional | The statement description you expect to see on the transaction. For ACH payments, this will be the full line item passed from the bank. For wire payments, this will be the OBI field on the wire. For check payments, this will be the memo field. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `counterpartyId` | `string \| null \| undefined` | Optional | The ID of the counterparty you expect for this payment. |
| `remittanceInformation` | `string \| null \| undefined` | Optional | For `ach`, this field will be passed through on an addenda record. For `wire` payments the field will be passed through as the "Originator to Beneficiary Information", also known as OBI or Fedwire tag 6000. |
| `reconciliationGroups` | `unknown \| null \| undefined` | Optional | The reconciliation groups you have for this payment. |
| `reconciliationFilters` | `unknown \| null \| undefined` | Optional | The reconciliation filters you have for this payment. |

## Example (as JSON)

```json
{
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "amount_upper_bound": 152,
  "amount_lower_bound": 70,
  "direction": "credit",
  "internal_account_id": "00000db2-0000-0000-0000-000000000000",
  "type": "ach"
}
```

