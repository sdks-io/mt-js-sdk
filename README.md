
# Getting Started with Modern Treasury

## Introduction

The Modern Treasury REST API. Please see https://docs.moderntreasury.com for more details.

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install mt-sdk@0.0.1
```

For additional package details, see the [Npm page for the mt-sdk@0.0.1 npm](https://www.npmjs.com/package/mt-sdk/v/0.0.1).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | [`Environment`](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/README.md#environments) | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| basicAuthCredentials | [`BasicAuthCredentials`](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/auth/basic-authentication.md) | The credential object for basicAuth |

The API client can be initialized as follows:

### Code-Based Client Initialization

```ts
import { Client, Environment } from 'mt-sdk';

const client = new Client({
  basicAuthCredentials: {
    username: 'BasicAuthUserName',
    password: 'BasicAuthPassword'
  },
  timeout: 0,
  environment: Environment.Production,
});
```

### Configuration-Based Client Initialization

```ts
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'mt-sdk';

// Provide absolute path for the configuration file
const absolutePath = path.resolve('./config.json');

// Read the configuration file content
const fileContent = fs.readFileSync(absolutePath, 'utf-8');

// Initialize client from JSON configuration content
const client = Client.fromJsonConfig(fileContent);
```

See the [Configuration-Based Client Initialization](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/configuration-based-client-initialization.md) section for details.

### Environment-Based Client Initialization

```ts
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'mt-sdk';

// Optional - Provide absolute path for the .env file
const absolutePath = path.resolve('./.env');

if (fs.existsSync(absolutePath)) {
  // Load environment variables from .env file
  dotenv.config({ path: absolutePath, override: true });
}

// Initialize client using environment variables
const client = Client.fromEnvironment(process.env);
```

See the [Environment-Based Client Initialization](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/environment-based-client-initialization.md) section for details.

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| Production | **Default** |
| Environment2 | - |

## Authorization

This API uses the following authentication schemes.

* [`basic_auth (Basic Authentication)`](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/auth/basic-authentication.md)

## List of APIs

* [Account Detail](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/account-detail.md)
* [Balance Report](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/balance-report.md)
* [Connection](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/connection.md)
* [Counterparty](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/counterparty.md)
* [Document](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/document.md)
* [Event](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/event.md)
* [Expected Payment](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/expected-payment.md)
* [External Account](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/external-account.md)
* [Incoming Payment Detail](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/incoming-payment-detail.md)
* [Internal Account](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/internal-account.md)
* [Invoice Line Item](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/invoice-line-item.md)
* [Invoice](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/invoice.md)
* [Ledger Account Category](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/ledger-account-category.md)
* [Ledger Account Payout](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/ledger-account-payout.md)
* [Ledger Account Statement](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/ledger-account-statement.md)
* [Ledger Account](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/ledger-account.md)
* [Ledger Entry](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/ledger-entry.md)
* [Ledger Event Handler](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/ledger-event-handler.md)
* [Ledger Transaction](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/ledger-transaction.md)
* [Ledgerable Event](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/ledgerable-event.md)
* [Ledger](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/ledger.md)
* [Line Item](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/line-item.md)
* [Paper Item](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/paper-item.md)
* [Payment Order](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/payment-order.md)
* [Payment Reference](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/payment-reference.md)
* [Ping](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/ping.md)
* [Return](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/return.md)
* [Reversal](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/reversal.md)
* [Routing Detail](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/routing-detail.md)
* [Transaction Line Item](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/transaction-line-item.md)
* [Transaction](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/transaction.md)
* [Validation](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/validation.md)
* [Virtual Account](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/virtual-account.md)
* [Account Collection Flow](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/account-collection-flow.md)
* [Payment Flow](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/controllers/payment-flow.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/retry-configuration.md)
* [ProxySettings](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/proxy-settings.md)
* [Configuration-Based Client Initialization](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/configuration-based-client-initialization.md)
* [Environment-Based Client Initialization](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/environment-based-client-initialization.md)

### HTTP

* [HttpRequest](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/api-response.md)
* [ApiError](https://www.github.com/sdks-io/mt-js-sdk/tree/0.0.1/doc/api-error.md)

