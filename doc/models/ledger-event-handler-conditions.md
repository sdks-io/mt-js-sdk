
# Ledger Event Handler Conditions

## Structure

`LedgerEventHandlerConditions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string` | Required | The field you're fetching from the `ledgerable_event`. |
| `operator` | `string` | Required | What the operator between the `field` and `value` is. Currently only supports `equals`. |
| `value` | `string` | Required | What raw string you are comparing the `field` against. |

## Example (as JSON)

```json
{
  "field": "field8",
  "operator": "operator0",
  "value": "value6"
}
```

