
# External Account

## Structure

`ExternalAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `discardedAt` | `string \| null` | Required | - |
| `accountType` | [`AccountTypeEnum`](../../doc/models/account-type-enum.md) | Required | Can be `checking`, `savings` or `other`. |
| `partyType` | [`PartyTypeEnum \| null`](../../doc/models/party-type-enum.md) | Required | Either `individual` or `business`. |
| `partyAddress` | [`Address \| null`](../../doc/models/address.md) | Required | - |
| `name` | `string \| null` | Required | A nickname for the external account. This is only for internal usage and won't affect any payments |
| `counterpartyId` | `string \| null` | Required | - |
| `accountDetails` | [`AccountDetail[]`](../../doc/models/account-detail.md) | Required | - |
| `routingDetails` | [`RoutingDetail[]`](../../doc/models/routing-detail.md) | Required | - |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `partyName` | `string` | Required | The legal name of the entity which owns the account. |
| `contactDetails` | [`ContactDetail[]`](../../doc/models/contact-detail.md) | Required | - |
| `ledgerAccountId` | `string \| null` | Required | If the external account links to a ledger account in Modern Treasury, the id of the ledger account will be populated here. |
| `verificationStatus` | [`VerificationStatusEnum`](../../doc/models/verification-status-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "0000143c-0000-0000-0000-000000000000",
  "object": "object8",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "discarded_at": "2016-03-13T12:52:32.123Z",
  "account_type": "checking",
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
  "name": "name0",
  "counterparty_id": "00000bb4-0000-0000-0000-000000000000",
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
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "party_name": "party_name2",
  "contact_details": [
    {
      "id": "00002278-0000-0000-0000-000000000000",
      "object": "object2",
      "live_mode": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "discarded_at": "2016-03-13T12:52:32.123Z",
      "contact_identifier": "contact_identifier6",
      "contact_identifier_type": "phone_number"
    }
  ],
  "ledger_account_id": "000001b2-0000-0000-0000-000000000000",
  "verification_status": "pending_verification"
}
```

