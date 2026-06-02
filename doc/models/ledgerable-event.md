
# Ledgerable Event

## Structure

`LedgerableEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `name` | `string` | Required | Name of the ledgerable event. |
| `description` | `string \| null` | Required | Description of the ledgerable event. |
| `direction` | `string \| null` | Required | One of `credit`, `debit`. |
| `amount` | `number` | Required | Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. |
| `currency` | `string` | Required | An ISO 4217 conformed currency or a custom currency. |
| `currencyExponent` | `number \| null` | Required | Must be included if currency is a custom currency. The currency_exponent cannot exceed 30. |
| `customData` | `unknown \| null` | Required | Additionally data to be used by the Ledger Event Handler. |
| `ledgerEventHandlerId` | `string` | Required | Id of the ledger event handler that is used to create a ledger transaction. |
| `metadata` | `Record<string, string> \| null` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "id": "000009aa-0000-0000-0000-000000000000",
  "object": "object8",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "name": "name4",
  "description": "description6",
  "direction": "direction0",
  "amount": 28,
  "currency": "currency6",
  "currency_exponent": 150,
  "custom_data": {
    "key1": "val1",
    "key2": "val2"
  },
  "ledger_event_handler_id": "00001482-0000-0000-0000-000000000000",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  }
}
```

