
# Ledger Event Handler Ledger Entries

## Structure

`LedgerEventHandlerLedgerEntries`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `string` | Required | The field you're fetching from the `ledgerable_event`. |
| `direction` | `string` | Required | What the operator between the `field` and `value` is. Currently only supports `equals`. |
| `ledgerAccountId` | `string` | Required | What raw string you are comparing the `field` against. |

## Example (as JSON)

```json
{
  "amount": "amount8",
  "direction": "direction2",
  "ledger_account_id": "ledger_account_id0"
}
```

