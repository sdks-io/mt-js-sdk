
# Line Item Request

## Structure

`LineItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `description` | `string \| null \| undefined` | Optional | A free-form description of the line item. |
| `accountingCategoryId` | `string \| null \| undefined` | Optional | The ID of one of your accounting categories. Note that these will only be accessible if your accounting system has been connected. |

## Example (as JSON)

```json
{
  "amount": 92,
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "description": "description8",
  "accounting_category_id": "accounting_category_id8"
}
```

