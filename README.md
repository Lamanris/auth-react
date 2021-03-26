# React Authentication

React authentication using mailgun-js to send authentication links to registering users. The feature is during registration, a new user is not created in the database, but generated an encrypted token with the entered data, after confirmation of registration by mail, the data from the token is only then added to the database.
<br><br>If the user has not yet confirmed his registration, the token will be deleted after 10 minutes.
<br><br>The same happens with the signing in, a token of the incoming login and password is created, after which the token is decrypted and compared with the data in the database.

>## Frontend
>- **react**: *17.0.2*
>- **react-dom:** *17.0.2*

>## Backend
>- **cors**:  *2.8.5*
>- **crypto**: *1.0.1*
>- **dotenv**: *8.2.0*
>- **express**: *4.17.1*
>-  **express-validator**: *6.10.0*
>-  **jsonwebtoken**: *8.5.1*
>-  **mailgun-js**: *0.22.0*
>-  **mongoose**: *5.12.2*
>-  **morgan**: *1.10.0*
>-  **nodemon**: *2.0.7*
