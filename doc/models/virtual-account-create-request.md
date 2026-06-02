
# Virtual Account Create Request

## Structure

`VirtualAccountCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of the virtual account. |
| `description` | `string \| undefined` | Optional | An optional description for internal use. |
| `counterpartyId` | `string \| undefined` | Optional | The ID of the counterparty that the virtual account belongs to. |
| `internalAccountId` | `string` | Required | The ID of the internal account that this virtual account is associated with. |
| `accountDetails` | [`AccountDetailCreateRequest[] \| undefined`](../../doc/models/account-detail-create-request.md) | Optional | An array of account detail objects. |
| `routingDetails` | [`RoutingDetailCreateRequest[] \| undefined`](../../doc/models/routing-detail-create-request.md) | Optional | An array of routing detail objects. |
| `debitLedgerAccountId` | `string \| undefined` | Optional | The ID of a debit normal ledger account. When money enters the virtual account, this ledger account will be debited. Must be accompanied by a credit_ledger_account_id if present. |
| `creditLedgerAccountId` | `string \| undefined` | Optional | The ID of a credit normal ledger account. When money leaves the virtual account, this ledger account will be credited. Must be accompanied by a debit_ledger_account_id if present. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "name": "name2",
  "description": "description2",
  "counterparty_id": "00001254-0000-0000-0000-000000000000",
  "internal_account_id": "00000966-0000-0000-0000-000000000000",
  "account_details": [
    {
      "account_number": "account_number6",
      "account_number_type": "other"
    },
    {
      "account_number": "account_number6",
      "account_number_type": "other"
    }
  ],
  "routing_details": [
    {
      "routing_number": "routing_number6",
      "routing_number_type": "gb_sort_code",
      "payment_type": "eft"
    },
    {
      "routing_number": "routing_number6",
      "routing_number_type": "gb_sort_code",
      "payment_type": "eft"
    }
  ],
  "debit_ledger_account_id": "00000d18-0000-0000-0000-000000000000"
}
```

