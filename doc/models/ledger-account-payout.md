
# Ledger Account Payout

## Structure

`LedgerAccountPayout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `ledgerId` | `string` | Required | The id of the ledger that this ledger account payout belongs to. |
| `description` | `string \| null` | Required | The description of the ledger account payout. |
| `status` | [`Status6`](../../doc/models/status-6.md) | Required | The status of the ledger account payout. One of `processing`, `pending`, `posted`, `archiving` or `archived`. |
| `payoutLedgerAccountId` | `string` | Required | The id of the payout ledger account whose ledger entries are queried against, and its balance is reduced as a result. |
| `fundingLedgerAccountId` | `string` | Required | The id of the funding ledger account that sends to or receives funds from the payout ledger account. |
| `effectiveAtUpperBound` | `string` | Required | The exclusive upper bound of the effective_at timestamp of the ledger entries to be included in the ledger account payout. The default value is the created_at timestamp of the ledger account payout. |
| `ledgerTransactionId` | `string \| null` | Required | The id of the ledger transaction that this payout is associated with. |
| `amount` | `number \| null` | Required | The amount of the ledger account payout. |
| `currency` | `string` | Required | The currency of the ledger account payout. |
| `currencyExponent` | `number \| null` | Required | The currency exponent of the ledger account payout. |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "id": "00001d3e-0000-0000-0000-000000000000",
  "object": "object6",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "ledger_id": "00001d4c-0000-0000-0000-000000000000",
  "description": "description4",
  "status": "pending",
  "payout_ledger_account_id": "000008b6-0000-0000-0000-000000000000",
  "funding_ledger_account_id": "0000217e-0000-0000-0000-000000000000",
  "effective_at_upper_bound": "2016-03-13T12:52:32.123Z",
  "ledger_transaction_id": "000024a4-0000-0000-0000-000000000000",
  "amount": 176,
  "currency": "currency6",
  "currency_exponent": 2,
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  }
}
```

