
# Ledger Account Payout Create Request

*This model accepts additional fields of type unknown.*

## Structure

`LedgerAccountPayoutCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| null \| undefined` | Optional | The description of the ledger account payout. |
| `status` | [`Status7 \| null \| undefined`](../../doc/models/status-7.md) | Optional | The status of the ledger account payout. It is set to `pending` by default. To post a ledger account payout at creation, use `posted`. |
| `payoutLedgerAccountId` | `string` | Required | The id of the payout ledger account whose ledger entries are queried against, and its balance is reduced as a result. |
| `fundingLedgerAccountId` | `string` | Required | The id of the funding ledger account that sends to or receives funds from the payout ledger account. |
| `effectiveAtUpperBound` | `string \| null \| undefined` | Optional | The exclusive upper bound of the effective_at timestamp of the ledger entries to be included in the ledger account payout. The default value is the created_at timestamp of the ledger account payout. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `skipPayoutLedgerTransaction` | `boolean \| null \| undefined` | Optional | It is set to `false` by default. It should be set to `true` when migrating existing payouts. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "payout_ledger_account_id": "00000996-0000-0000-0000-000000000000",
  "funding_ledger_account_id": "0000225e-0000-0000-0000-000000000000",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "description": "description0",
  "status": "pending",
  "effective_at_upper_bound": "2016-03-13T12:52:32.123Z",
  "skip_payout_ledger_transaction": false,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

