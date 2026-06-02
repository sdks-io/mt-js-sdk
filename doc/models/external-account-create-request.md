
# External Account Create Request

## Structure

`ExternalAccountCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountType` | [`AccountTypeEnum \| undefined`](../../doc/models/account-type-enum.md) | Optional | Can be `checking`, `savings` or `other`. |
| `partyType` | [`PartyTypeEnum \| null \| undefined`](../../doc/models/party-type-enum.md) | Optional | Either `individual` or `business`. |
| `partyAddress` | [`AddressRequest \| undefined`](../../doc/models/address-request.md) | Optional | - |
| `name` | `string \| null \| undefined` | Optional | A nickname for the external account. This is only for internal usage and won't affect any payments |
| `counterpartyId` | `string \| null` | Required | - |
| `accountDetails` | [`AccountDetail1[] \| undefined`](../../doc/models/account-detail-1.md) | Optional | - |
| `routingDetails` | [`RoutingDetail1[] \| undefined`](../../doc/models/routing-detail-1.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `partyName` | `string \| undefined` | Optional | If this value isn't provided, it will be inherited from the counterparty's name. |
| `partyIdentifier` | `string \| undefined` | Optional | - |
| `ledgerAccount` | [`LedgerAccountCreateRequest \| undefined`](../../doc/models/ledger-account-create-request.md) | Optional | - |
| `plaidProcessorToken` | `string \| undefined` | Optional | If you've enabled the Modern Treasury + Plaid integration in your Plaid account, you can pass the processor token in this field. |
| `contactDetails` | [`ContactDetailCreateRequest[] \| undefined`](../../doc/models/contact-detail-create-request.md) | Optional | - |

## Example (as JSON)

```json
{
  "counterparty_id": "00000806-0000-0000-0000-000000000000",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "account_type": "checking",
  "party_type": "business",
  "party_address": {
    "line1": "line18",
    "line2": "line20",
    "locality": "locality6",
    "region": "region2",
    "postal_code": "postal_code8"
  },
  "name": "name0",
  "account_details": [
    {
      "account_number": "account_number6",
      "account_number_type": "wallet_address"
    }
  ]
}
```

