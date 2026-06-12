# Document

```ts
const documentApi = new DocumentApi(client);
```

## Class Name

`DocumentApi`

## Methods

* [Create Document](../../doc/controllers/document.md#create-document)
* [Create Document Nested](../../doc/controllers/document.md#create-document-nested)
* [Download Document](../../doc/controllers/document.md#download-document)
* [Download Existing Document](../../doc/controllers/document.md#download-existing-document)
* [Get Document](../../doc/controllers/document.md#get-document)
* [Get Existing Document](../../doc/controllers/document.md#get-existing-document)
* [List Documents](../../doc/controllers/document.md#list-documents)
* [List Documents Nested](../../doc/controllers/document.md#list-documents-nested)


# Create Document

Create a document.

```ts
async createDocument(
  documentableId: string,
  documentableType: DocumentableType1,
  file: FileWrapper,
  idempotencyKey?: string,
  documentType?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Document>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentableId` | `string` | Form, Required | The unique identifier for the associated object. |
| `documentableType` | [`DocumentableType1`](../../doc/models/documentable-type-1.md) | Form, Required | - |
| `file` | [`FileWrapper`](../../doc/models/file.md) | Form, Required | - |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `documentType` | `string \| undefined` | Form, Optional | A category given to the document, can be `null`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Document`](../../doc/models/document.md).

## Example Usage

```ts
const documentableId = 'documentable_id0';

const documentableType = DocumentableType1.PaperItems;

const file = new FileWrapper(fs.createReadStream('dummy_file'));

try {
  const response = await documentApi.createDocument(
    documentableId,
    documentableType,
    file
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorMessageError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Create Document Nested

Create a document.

```ts
async createDocumentNested(
  documentableId: string,
  documentableType: DocumentableType2,
  file: FileWrapper,
  idempotencyKey?: string,
  documentType?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Document>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentableId` | `string` | Template, Required | The unique identifier for the associated object. |
| `documentableType` | [`DocumentableType2`](../../doc/models/documentable-type-2.md) | Template, Required | The type of the associated object. Currently can be one of `payment_order`, `transaction`, `paper_item`, `expected_payment`, `counterparty`, `organization`, `case`, `internal_account`, `decision`, or `external_account`. |
| `file` | [`FileWrapper`](../../doc/models/file.md) | Form, Required | - |
| `idempotencyKey` | `string \| undefined` | Header, Optional | This key should be something unique, preferably something like an UUID. |
| `documentType` | `string \| undefined` | Form, Optional | A category given to the document, can be `null`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Document`](../../doc/models/document.md).

## Example Usage

```ts
const documentableId = 'documentable_id0';

const documentableType = DocumentableType2.PaperItems;

const file = new FileWrapper(fs.createReadStream('dummy_file'));

try {
  const response = await documentApi.createDocumentNested(
    documentableId,
    documentableType,
    file
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorMessageError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Download Document

Download an existing document.

```ts
async downloadDocument(
  documentableId: string,
  documentableType: DocumentableType2,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentableId` | `string` | Template, Required | The unique identifier for the associated object. |
| `documentableType` | [`DocumentableType2`](../../doc/models/documentable-type-2.md) | Template, Required | The type of the associated object. Currently can be one of `payment_order`, `transaction`, `paper_item`, `expected_payment`, `counterparty`, `organization`, `case`, `internal_account`, `decision`, or `external_account`. |
| `id` | `string` | Template, Required | The ID of the document. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const documentableId = 'documentable_id0';

const documentableType = DocumentableType2.PaperItems;

const id = '00001770-0000-0000-0000-000000000000';

try {
  const response = await documentApi.downloadDocument(
    documentableId,
    documentableType,
    id
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorMessageError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Download Existing Document

Download an existing document.

```ts
async downloadExistingDocument(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the document. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const id = '00001770-0000-0000-0000-000000000000';

try {
  const response = await documentApi.downloadExistingDocument(id);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorMessageError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | forbidden | [`ErrorMessageError`](../../doc/models/error-message-error.md) |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Document

Get an existing document.

```ts
async getDocument(
  documentableId: string,
  documentableType: DocumentableType2,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Document>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentableId` | `string` | Template, Required | The unique identifier for the associated object. |
| `documentableType` | [`DocumentableType2`](../../doc/models/documentable-type-2.md) | Template, Required | The type of the associated object. Currently can be one of `payment_order`, `transaction`, `paper_item`, `expected_payment`, `counterparty`, `organization`, `case`, `internal_account`, `decision`, or `external_account`. |
| `id` | `string` | Template, Required | The ID of the document. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Document`](../../doc/models/document.md).

## Example Usage

```ts
const documentableId = 'documentable_id0';

const documentableType = DocumentableType2.PaperItems;

const id = '00001770-0000-0000-0000-000000000000';

try {
  const response = await documentApi.getDocument(
    documentableId,
    documentableType,
    id
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorMessageError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# Get Existing Document

Get an existing document.

```ts
async getExistingDocument(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Document>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the document. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Document`](../../doc/models/document.md).

## Example Usage

```ts
const id = '00001770-0000-0000-0000-000000000000';

try {
  const response = await documentApi.getExistingDocument(id);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorMessageError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |


# List Documents

Get a list of documents.

```ts
async listDocuments(
  documentableId: string,
  documentableType: DocumentableType2,
  documentType?: string,
  afterCursor?: string | null,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Document[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentableId` | `string` | Template, Required | The unique identifier for the associated object. |
| `documentableType` | [`DocumentableType2`](../../doc/models/documentable-type-2.md) | Template, Required | The type of the associated object. Currently can be one of `payment_order`, `transaction`, `paper_item`, `expected_payment`, `counterparty`, `organization`, `case`, `internal_account`, `decision`, or `external_account`. |
| `documentType` | `string \| undefined` | Query, Optional | A category given to the document, can be `null`. |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Document[]`](../../doc/models/document.md).

## Example Usage

```ts
const documentableId = 'documentable_id0';

const documentableType = DocumentableType2.PaperItems;

try {
  const response = await documentApi.listDocuments(
    documentableId,
    documentableType
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# List Documents Nested

Get a list of documents.

```ts
async listDocumentsNested(
  documentableId?: string,
  documentableType?: DocumentableType2,
  afterCursor?: string | null,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Document[]>>
```

## Authentication

This endpoint requires [basic_auth](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentableId` | `string \| undefined` | Query, Optional | The unique identifier for the associated object. |
| `documentableType` | [`DocumentableType2 \| undefined`](../../doc/models/documentable-type-2.md) | Query, Optional | The type of the associated object. Currently can be one of `payment_order`, `transaction`, `paper_item`, `expected_payment`, `counterparty`, `organization`, `case`, `internal_account`, `decision`, or `external_account`. |
| `afterCursor` | `string \| null \| undefined` | Query, Optional | - |
| `perPage` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Document[]`](../../doc/models/document.md).

## Example Usage

```ts
try {
  const response = await documentApi.listDocumentsNested();

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorMessageError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | not found | [`ErrorMessageError`](../../doc/models/error-message-error.md) |

