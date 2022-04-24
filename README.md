# REST Envelopes

[![NPM Version][npm-image]][npm-url]

> Enveloping of REST messages

---

## Installing
with `npm`:
```shell
npm install @potentii/rest-envelopes
```
with `yarn`:
```shell
yarn add @potentii/rest-envelopes
```

---

## What it is

It just helps to enforce a standard for API payloads _(both requests and responses)_.

### Requests

```json
{
    "data": {} 
}
```

The content goes into the `data` property, and it can be an object or array.

### Responses

```json
{
  "data": {},
  "error": {
    "code": "",
    "message": "",
    "errors": [
      {
        "code": "",
        "message": "",
        "field": "",
        "value": ""
      }
    ]
  },
  "pagination": {
    "page": 0,
    "pageSize": 0,
    "actualPageSize": 0,
    "pages": 0,
    "totalSize": 0
  },
  "links": [
    {
      "type": "",
      "href": "",
      "rel": ""
    }
  ]
}
```

At the first level of the response, either `data` or `error` should be populated.

`pagination` and `links` are optional.

---

## Usage

Example in an [expressjs](https://www.npmjs.com/package/express) application:

```javascript
import { RequestEnvelope, ResponseEnvelope, ApiError, ApiErrorDetail } from '@potentii/rest-envelopes';

app.post('/api/users', (req, res, next) => {
   const body = RequestEnvelope.from(req.body);
	
   // Example of some validation error:
   if(!body?.data?.fullname?.trim().length) 
      return res
         .status(400)
         .json(ResponseEnvelope.withError(
            ApiError.create('VALIDATION_ERR', 'Registration have failed', ApiErrorDetail.create('USER_NAME_INVALID', 'The full name of the user must be set', 'fullname', body?.data?.fullname))
         ))
         .end();
   
   let createdUser = {
      user_id: 1,
      fullname: 'John Doe'
   };
   
   // Example with a success return:
   res
      .status(200)
      .json(ResponseEnvelope.withData(createdUser)) // data can be an object or a list
      .end();	
});

```

### Other Examples:

#### Parsing the request body:

```javascript
import { RequestEnvelope } from '@potentii/rest-envelopes';

// ...

const body = RequestEnvelope.from(req.body);

console.log(body?.data);
    
// ...
```

#### Using builders to create a response object:

```javascript
import { ResponseEnvelopeBuilder, ResponseLinkBuilder } from '@potentii/rest-envelopes';

// ...

const createdPayment = {
    // ...
};

const responseBody = ResponseEnvelopeBuilder.create()
    .withData(createdPayment)
    .withLink(ResponseLinkBuilder.create().withHref('/payments/123456').withRel('cancel-payment').withType('DELETE').build())
    .withLink(ResponseLinkBuilder.create().withHref('/payments/123456/history').withRel('payment-history').withType('GET').build())
    .build();

res.status(201).json(responseBody).end();

// ...
```

---

## License
[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@potentii/rest-envelopes.svg
[npm-url]: https://npmjs.org/package/@potentii/rest-envelopes
