
# Counterparty Collect Account Request

## Structure

`CounterpartyCollectAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `direction` | [`DirectionEnum`](../../doc/models/direction-enum.md) | Required | One of `credit` or `debit`. Use `credit` when you want to pay a counterparty. Use `debit` when you need to charge a counterparty. This field helps us send a more tailored email to your counterparties." |
| `sendEmail` | `boolean \| undefined` | Optional | By default, Modern Treasury will send an email to your counterparty that includes a link to the form they must fill out. However, if you would like to send the counterparty the link, you can set this parameter to `false`. The JSON body will include the link to the secure Modern Treasury form. |
| `fields` | [`FieldEnum[] \| undefined`](../../doc/models/field-enum.md) | Optional | The list of fields you want on the form. This field is optional and if it is not set, will default to [\"nameOnAccount\", \"accountType\", \"accountNumber\", \"routingNumber\", \"address\"]. The full list of options is [\"name\", \"nameOnAccount\", \"taxpayerIdentifier\", \"accountType\", \"accountNumber\", \"routingNumber\", \"address\", \"ibanNumber\", \"swiftCode\"]. |
| `customRedirect` | `string \| undefined` | Optional | The URL you want your customer to visit upon filling out the form. By default, they will be sent to a Modern Treasury landing page. This must be a valid HTTPS URL if set. |

## Example (as JSON)

```json
{
  "direction": "credit",
  "send_email": false,
  "fields": [
    "gbSortCode",
    "inIfsc"
  ],
  "custom_redirect": "custom_redirect2"
}
```

