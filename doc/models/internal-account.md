
# Internal Account

## Structure

`InternalAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `accountType` | [`AccountType5 \| null`](../../doc/models/account-type-5.md) | Required | Can be checking, savings or other. |
| `partyName` | `string` | Required | The legal name of the entity which owns the account. |
| `partyType` | [`PartyType5 \| null`](../../doc/models/party-type-5.md) | Required | Either individual or business. |
| `partyAddress` | [`Address \| null`](../../doc/models/address.md) | Required | - |
| `name` | `string \| null` | Required | A nickname for the account. |
| `accountDetails` | [`AccountDetail[]`](../../doc/models/account-detail.md) | Required | An array of account detail objects. |
| `routingDetails` | [`RoutingDetail[]`](../../doc/models/routing-detail.md) | Required | An array of routing detail objects. |
| `connection` | [`Connection`](../../doc/models/connection.md) | Required | - |
| `currency` | [`Currency`](../../doc/models/currency.md) | Required | Three-letter ISO currency code. |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `parentAccountId` | `string \| null` | Required | The parent InternalAccount of this account. |
| `counterpartyId` | `string \| null` | Required | The Counterparty associated to this account. |
| `ledgerAccountId` | `string \| null` | Required | If the internal account links to a ledger account in Modern Treasury, the id of the ledger account will be populated here. |

## Example (as JSON)

```json
{
  "id": "0000086e-0000-0000-0000-000000000000",
  "object": "object6",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "account_type": "savings",
  "party_name": "party_name0",
  "party_type": "business",
  "party_address": {
    "id": "00000cb8-0000-0000-0000-000000000000",
    "object": "object6",
    "live_mode": false,
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "line1": "line18",
    "line2": "line20",
    "locality": "locality6",
    "region": "region2",
    "postal_code": "postal_code8",
    "country": "country0"
  },
  "name": "name8",
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
  "connection": {
    "id": "00001eee-0000-0000-0000-000000000000",
    "object": "object4",
    "live_mode": false,
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "discarded_at": "2016-03-13T12:52:32.123Z",
    "vendor_id": "00002026-0000-0000-0000-000000000000",
    "vendor_customer_id": "0000080c-0000-0000-0000-000000000000",
    "vendor_name": "vendor_name0"
  },
  "currency": "EGP",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "parent_account_id": "0000052e-0000-0000-0000-000000000000",
  "counterparty_id": "0000001a-0000-0000-0000-000000000000",
  "ledger_account_id": "00001cf4-0000-0000-0000-000000000000"
}
```

