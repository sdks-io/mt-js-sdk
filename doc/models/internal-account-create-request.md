
# Internal Account Create Request

*This model accepts additional fields of type unknown.*

## Structure

`InternalAccountCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connectionId` | `string` | Required | The identifier of the financial institution the account belongs to. |
| `name` | `string` | Required | The nickname of the account. |
| `partyName` | `string` | Required | The legal name of the entity which owns the account. |
| `partyAddress` | [`PartyAddress \| undefined`](../../doc/models/party-address.md) | Optional | The address associated with the owner or null. |
| `currency` | [`Currency1`](../../doc/models/currency-1.md) | Required | Either "USD" or "CAD". Internal accounts created at Increase only supports "USD". |
| `vendorAttributes` | `Record<string, string> \| undefined` | Optional | A hash of vendor specific attributes that will be used when creating the account at the vendor specified by the given connection. |
| `parentAccountId` | `string \| undefined` | Optional | The parent internal account of this new account. |
| `counterpartyId` | `string \| undefined` | Optional | The Counterparty associated to this account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "connection_id": "connection_id8",
  "name": "name4",
  "party_name": "party_name6",
  "currency": "USD",
  "vendor_attributes": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "party_address": {
    "line1": "line18",
    "line2": "line20",
    "locality": "locality6",
    "region": "region2",
    "postal_code": "postal_code8",
    "country": "country0",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "parent_account_id": "parent_account_id2",
  "counterparty_id": "counterparty_id0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

