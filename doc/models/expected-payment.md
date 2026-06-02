
# Expected Payment

## Structure

`ExpectedPayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `amountUpperBound` | `number` | Required | The highest amount this expected payment may be equal to. Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. |
| `amountLowerBound` | `number` | Required | The lowest amount this expected payment may be equal to. Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. |
| `direction` | [`Direction1`](../../doc/models/direction-1.md) | Required | One of credit or debit. When you are receiving money, use credit. When you are being charged, use debit. |
| `internalAccountId` | `string` | Required | The ID of the Internal Account for the expected payment. |
| `type` | [`Type1 \| null`](../../doc/models/type-1.md) | Required | One of: ach, au_becs, bacs, book, check, eft, interac, provxchange, rtp, sen, sepa, signet, wire. |
| `currency` | [`Currency`](../../doc/models/currency.md) | Required | Three-letter ISO currency code. |
| `dateUpperBound` | `string \| null` | Required | The latest date the payment may come in. Format: yyyy-mm-dd |
| `dateLowerBound` | `string \| null` | Required | The earliest date the payment may come in. Format: yyyy-mm-dd |
| `description` | `string \| null` | Required | An optional description for internal use. |
| `statementDescriptor` | `string \| null` | Required | The statement description you expect to see on the transaction. For ACH payments, this will be the full line item passed from the bank. For wire payments, this will be the OBI field on the wire. For check payments, this will be the memo field. |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `counterpartyId` | `string \| null` | Required | The ID of the counterparty you expect for this payment. |
| `remittanceInformation` | `string \| null` | Required | For `ach`, this field will be passed through on an addenda record. For `wire` payments the field will be passed through as the "Originator to Beneficiary Information", also known as OBI or Fedwire tag 6000. |
| `reconciliationGroups` | `unknown \| null` | Required | The reconciliation groups you have for this payment. |
| `reconciliationFilters` | `unknown \| null` | Required | The reconciliation filters you have for this payment. |
| `transactionId` | `string \| null` | Required | The ID of the Transaction this expected payment object has been matched to. |
| `transactionLineItemId` | `string \| null` | Required | The ID of the Transaction Line Item this expected payment has been matched to. |
| `status` | [`Status1`](../../doc/models/status-1.md) | Required | One of unreconciled, reconciled, or archived. |
| `reconciliationMethod` | [`ReconciliationMethod \| null`](../../doc/models/reconciliation-method.md) | Required | One of manual if this expected payment was manually reconciled in the dashboard, automatic if it was automatically reconciled by Modern Treasury, or null if it is unreconciled. |
| `ledgerTransactionId` | `string \| null` | Required | The ID of the ledger transaction linked to the expected payment. |

## Example (as JSON)

```json
{
  "id": "000010f8-0000-0000-0000-000000000000",
  "object": "object2",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "amount_upper_bound": 32,
  "amount_lower_bound": 190,
  "direction": "credit",
  "internal_account_id": "0000242a-0000-0000-0000-000000000000",
  "type": "eft",
  "currency": "SHP",
  "date_upper_bound": "2016-03-13T12:52:32.123Z",
  "date_lower_bound": "2016-03-13T12:52:32.123Z",
  "description": "description4",
  "statement_descriptor": "statement_descriptor4",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "counterparty_id": "00000870-0000-0000-0000-000000000000",
  "remittance_information": "remittance_information0",
  "reconciliation_groups": {
    "key1": "val1",
    "key2": "val2"
  },
  "reconciliation_filters": {
    "key1": "val1",
    "key2": "val2"
  },
  "transaction_id": "00001448-0000-0000-0000-000000000000",
  "transaction_line_item_id": "00000c88-0000-0000-0000-000000000000",
  "status": "archived",
  "reconciliation_method": "automatic",
  "ledger_transaction_id": "000009da-0000-0000-0000-000000000000"
}
```

