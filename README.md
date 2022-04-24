# REST Envelopes

[![NPM Version][npm-image]][npm-url]

> Enveloping of REST messages

---

## Installing
with `npm`:
```
$ npm install @potentii/rest-envelopes
```
with `yarn`:
```
$ yarn add @potentii/rest-envelopes
```

---

## Usage

Example in an [expressjs](https://www.npmjs.com/package/express) application:

```javascript
import { RequestEnvelope, ResponseEnvelope, ApiError, ApiErrorDetail } from '@potentii/rest-envelopes';

app.post('/api/users', (req, res, next) => {
   const body = RequestEnvelope.from(req.body);
	
   // ...
   
   if(!body.data.fullname) 
      return res
         .status(400)
         .json(ResponseEnvelope.withError(
            ApiError.create('VALIDATION_ERR', 'Registration have failed', ApiErrorDetail.create('USER_ID_INVALID', 'The full name of the user must be set', 'fullname', body.data.fullname))
         ))
         .end();
    
   // Response body:
   // {
   //    error: {
   //       code: 'VALIDATION_ERR',
   //       message: 'Registration have failed',
   //       errors: [
   //          {
   //             code: 'USER_ID_INVALID', 
   //             message: 'The full name of the user must be set', 
   //             field: 'fullname', 
   //             value: null
   //          }
   //       ]
   //    }
   // }
	
   // ...
   
   let createdUser = {
      user_id: 1,
      fullname: 'John Doe'
   };
   
   res
      .status(200)
      .json(ResponseEnvelope.withData(createdUser)) // data can be an object or a list
      .end();

   // Response body:
   // {
   //    data: {
   //       user_id: 1,
   //       fullname: 'John Doe'
   //    }
   //    
   // }
   
	
});

```


### Other Examples:

#### Parsing the request body:

```javascript
import { RequestEnvelope } from '@potentii/rest-envelopes';

// ...

const body = RequestEnvelope.from(req.body);

console.log(body.data);
    
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

## Model

### Request body:

```json
{
  "data": {}
}
```

### Response body:

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

---

## License
[MIT](LICENSE)


[npm-image]: https://img.shields.io/npm/v/@potentii/rest-envelopes.svg
[npm-url]: https://npmjs.org/package/@potentii/rest-envelopes
