
# Virtual Account

## Structure

`VirtualAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `discardedAt` | `string \| null` | Required | - |
| `name` | `string` | Required | The name of the virtual account. |
| `description` | `string \| null` | Required | An optional free-form description for internal use. |
| `counterpartyId` | `string \| null` | Required | The ID of a counterparty that the virtual account belongs to. Optional. |
| `internalAccountId` | `string` | Required | The ID of the internal account that the virtual account is in. |
| `accountDetails` | [`AccountDetail[]`](../../doc/models/account-detail.md) | Required | An array of account detail objects. |
| `routingDetails` | [`RoutingDetail[]`](../../doc/models/routing-detail.md) | Required | An array of routing detail objects. These will be the routing details of the internal account. |
| `debitLedgerAccountId` | `string \| null` | Required | The ID of a debit normal ledger account. When money enters the virtual account, this ledger account will be debited. Must be accompanied by a credit_ledger_account_id if present. |
| `creditLedgerAccountId` | `string \| null` | Required | The ID of a credit normal ledger account. When money enters the virtual account, this ledger account will be credited. Must be accompanied by a debit_ledger_account_id if present. |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "id": "0000016a-0000-0000-0000-000000000000",
  "object": "object0",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "discarded_at": "2016-03-13T12:52:32.123Z",
  "name": "name2",
  "description": "description2",
  "counterparty_id": "0000071e-0000-0000-0000-000000000000",
  "internal_account_id": "0000149c-0000-0000-0000-000000000000",
  "account_details": [
    {
      "id": "00000bf8-0000-0000-0000-000000000000",
      "object": "object8",
      "live_mode": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "discarded_at": "2016-03-13T12:52:32.123Z",
      "account_number": "account_number6",
      "account_number_type": "other",
      "account_number_safe": "account_number_safe6"
    }
  ],
  "routing_details": [
    {
      "id": "00001b96-0000-0000-0000-000000000000",
      "object": "object0",
      "live_mode": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "discarded_at": "2016-03-13T12:52:32.123Z",
      "routing_number": "routing_number6",
      "routing_number_type": "gb_sort_code",
      "payment_type": "eft",
      "bank_name": "bank_name2",
      "bank_address": {
        "id": "000004a8-0000-0000-0000-000000000000",
        "object": "object0",
        "live_mode": false,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "line1": "line14",
        "line2": "line26",
        "locality": "locality2",
        "region": "region8",
        "postal_code": "postal_code4",
        "country": "country6"
      }
    }
  ],
  "debit_ledger_account_id": "000001e2-0000-0000-0000-000000000000",
  "credit_ledger_account_id": "00001962-0000-0000-0000-000000000000",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  }
}
```

