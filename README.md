# REST Envelopes

> Enveloping of REST messages

<br>

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


<br>

## License
[MIT](LICENSE)