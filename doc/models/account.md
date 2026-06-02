
# Account

## Structure

`Account`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `object` | `string \| undefined` | Optional | - |
| `liveMode` | `boolean \| undefined` | Optional | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `discardedAt` | `string \| null \| undefined` | Optional | - |
| `accountType` | [`AccountTypeEnum \| undefined`](../../doc/models/account-type-enum.md) | Optional | Can be `checking`, `savings` or `other`. |
| `partyType` | [`PartyTypeEnum \| null \| undefined`](../../doc/models/party-type-enum.md) | Optional | Either `individual` or `business`. |
| `partyAddress` | [`Address \| null \| undefined`](../../doc/models/address.md) | Optional | - |
| `name` | `string \| null \| undefined` | Optional | A nickname for the external account. This is only for internal usage and won't affect any payments |
| `accountDetails` | [`AccountDetail[] \| undefined`](../../doc/models/account-detail.md) | Optional | - |
| `routingDetails` | [`RoutingDetail[] \| undefined`](../../doc/models/routing-detail.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `partyName` | `string \| undefined` | Optional | The legal name of the entity which owns the account. |
| `contactDetails` | [`ContactDetail[] \| undefined`](../../doc/models/contact-detail.md) | Optional | - |
| `ledgerAccountId` | `string \| null \| undefined` | Optional | If the external account links to a ledger account in Modern Treasury, the id of the ledger account will be populated here. |
| `verificationStatus` | [`VerificationStatusEnum \| undefined`](../../doc/models/verification-status-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "id": "00000120-0000-0000-0000-000000000000",
  "object": "object6",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z"
}
```

