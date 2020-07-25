# Serviceauth

Jira: [https://asudev.jira.com/browse/SAUTH](https://asudev.jira.com/browse/SAUTH) <br/>
Confluence: [https://asudev.jira.com/wiki/spaces/SAUTH/overview](https://asudev.jira.com/wiki/spaces/SAUTH/overview) <br/>


**Serviceauth - Auhorization Flows**
====

* Authorization Code
  * [Authorization Request](#authz-code-request)
  * [Authorization Grant](#authz-code-grant)
* Native Apps
  * [Authorization Request](#native-authz-request)
  * [Authorization Grant](#native-authz-grant)
* Input Limited Devices
  * [Authorization Request](#device-authz-request)
  * [Authorization Grant](#device-authz-grant)
* [Client Credentials Grant](#client-credentials-authz-grant)
* [Refresh Access Token](#refresh-grant)
  
----
### <a id="authz-code-request">Authorization Code Grant - Authorization Request</a>

* **URL**
  /oauth2/code/allow

* **Method:**
  `GET`
  
*  **URL Params:**
   * **Required:**
   `response_type=[string]`
   `client_id=[string]`
   `redirect_uri=[string]`

   * **Optional:**
   `state=[string]`
   `scope=[string]`

* **Success Response:**
  * **Code:** 200 <br />
    **Content:** `{{access request landing page}}`
  * **Code:** 302 <br />
    **Content:** `{{CAS login page}}`
 
* **Error Response:**
  * **Code:** 403 <br />
    **Content:** `{{generic error landing page}}`

* **Sample Call:**
Visit the [Authorization Landing Page](https://weblogin-dev.asu.edu/serviceauth/oauth2/code/allow?scope=test&response_type=code&redirect_uri=https://localhost.asu.edu/&client_id=test-agent&state=some-state)
```
curl -X GET \
  'https://weblogin-dev.asu.edu/serviceauth/oauth2/code/allow?scope=test&response_type=code&redirect_uri=https://localhost.asu.edu/&client_id=test-agent&state=some-state'
```

----
### <a id="authz-code-grant">Authorization Code Grant - Authorization Grant</a>

* **URL**
  /oauth2/token

* **Method:**
  `POST`
  
*  **Data Params:**
   * **Required:**
   `grant_type="authorization_code"`
   `client_id=[string]`
   `client_secret=[string]`
   `redirect_uri=[string]`
   `code=[string]`

   * **Optional:**
   `state=[string]`
   `scope=[string]`

* **Success Response:**
  * **Code:** 200 <br />
    **Content:**
    ```
    {
      "access_token": "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtYXJpb0Bhc3UuZWR1IiwiaXNzIjoic2VydmljZWF1dGgtZGV2IiwiZXhwIjoxNTU4MDQ5ODc4LCJpYXQiOjE1NTgwNDk4Nzh9.CuKUgOKWhOKWiOKWiOKWiOKWiOKWhOKWhOKWkQriloTiloDilojiloDilpDilJTilIDilJDilpHilpEK4paI4paE4paQ4paM4paE4paI4paE4pSY4paI4paICuKUlOKWhOKWhOKWhOKWhOKWhOKUmOKWiOKWiOKWiArilojilojilpLilojilpLilojilojilojiloA=",
      "token_type": "bearer",
      "expires_in": 600,
      "refresh_token": "12345abcdEFG"
      "scope": [
        "https://dpl.apps.asu.edu/scopes/person/read/me"
      ] 
    }
    ```
 
* **Error Response:**
  * **Code:** 400 <br />
    **Content:**
    ```
    {
      "error": "invalid_grant",
      "error_description": "Request was made for an invalid code"
    }
    ```

* **Sample Call:**
```
curl -X POST \
  https://weblogin-dev.asu.edu/serviceauth/oauth2/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=authorization_code&redirect_uri=https%3A%2F%2Flocalhost.asu.edu%2F&code={{AUTHZ_CODE}}&client_id=test-agent&client_secret={{CLIENT_SECRET}}&scope=test'
```

----
### <a id="native-authz-request">Native Apps - Authorization Request</a>

* **URL**
  /oauth2/native/allow

* **Method:**
  `GET`
  
*  **URL Params:**
   * **Required:**
   `response_type="code"`
   `client_id=[string]`
   `redirect_uri=[string]`
   `code_challenge=[string]`
   `code_challenge_method=[string]`

   * **Optional:**
   `state=[string]`
   `scope=[string]`

* **Success Response:**
  * **Code:** 200 <br />
    **Content:** `{{access request landing page}}`
  * **Code:** 302 <br />
    **Content:** `{{CAS login page}}`
 
* **Error Response:**
  * **Code:** 403 <br />
    **Content:** `{{generic error landing page}}`

* **Sample Call:**
Visit the [Authorization Landing Page](https://weblogin-dev.asu.edu/serviceauth/oauth2/native/allow?client_id=test-agent&code_challenge_method=plain&scope=class:read&redirect_uri=https://localhost.asu.edu/&code_challenge=some-challenge&response_type=code)
```
curl -X GET \
  'https://weblogin-dev.asu.edu/serviceauth/oauth2/native/allow?client_id=test-agent&code_challenge_method=plain&scope=class:read&redirect_uri=https://localhost.asu.edu/&code_challenge=some-challenge&response_type=code'
```

----
### <a id="native-authz-grant">Naive Apps - Authorization Grant</a>

* **URL**
  /oauth2/native/token

* **Method:**
  `POST`
  
*  **Data Params:**
   * **Required:**
   `grant_type="authorization_code"`
   `client_id=[string]`
   `client_secret=[string]`
   `redirect_uri=[string]`
   `code=[string]`
   `code_verifier=[string]`

   * **Optional:**
   `state=[string]`
   `scope=[string]`

* **Success Response:**
  * **Code:** 200 <br />
    **Content:**
    ```
    {
      "access_token": "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtYXJpb0Bhc3UuZWR1IiwiaXNzIjoic2VydmljZWF1dGgtZGV2IiwiZXhwIjoxNTU4MDQ5ODc4LCJpYXQiOjE1NTgwNDk4Nzh9.CuKUgOKWhOKWiOKWiOKWiOKWiOKWhOKWhOKWkQriloTiloDilojiloDilpDilJTilIDilJDilpHilpEK4paI4paE4paQ4paM4paE4paI4paE4pSY4paI4paICuKUlOKWhOKWhOKWhOKWhOKWhOKUmOKWiOKWiOKWiArilojilojilpLilojilpLilojilojilojiloA=",
      "token_type": "bearer",
      "expires_in": 600,
      "refresh_token": "12345abcdEFG"
      "scope": [
        "https://dpl.apps.asu.edu/scopes/person/read/me"
      ] 
    }
    ```
 
* **Error Response:**
  * **Code:** 400 <br />
    **Content:**
    ```
    {
      "error": "invalid_grant",
      "error_description": "Request was made for an invalid code"
    }
    ```

* **Sample Call:**
```
curl -X POST \
  https://weblogin-dev.asu.edu/serviceauth/oauth2/native/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=authorization_code&code={{AUTHZ_CODE}}&redirect_uri=https%3A%2F%2Flocalhost.asu.edu%2F&code_verifier=some-challenge&client_id=test-agent&client_secret={{CLIENT_SECRET}}'
```

----
### <a id="device-authz-request">Input Limited Device - Authorization Request</a>

* **URL**
  /oauth2/device/authorize

* **Method:**
  `POST`
  
*  **Data Params:**
   * **Required:**
   `client_id=[string]`
   `client_secret=[string]`

   * **Optional:**
   `agent_device_description=[string]`
   `scope=[string]`

* **Success Response:**
  * **Code:** 200 <br />
    **Content:**
    ```
    {
      "device_code": "abcdEFG12345",
      "user_code": "ABCD-1234",
      "verification_uri": "https://weblogin-dev.asu.edu/serviceauth/oauth2/device/allow",
      "long_verification_uri": "https://weblogin-dev.asu.edu/serviceauth/oauth2/device/allow?user_code=ABCD-1234",
      "expires_in": 10,
      "interval": 180
    }
    ```
  * **Code:** 302 <br />
    **Content:** `{{CAS login page}}`
 
* **Error Response:**
  * **Code:** 403 <br />
    **Content:** `{{generic error landing page}}`

* **Sample Call:**
```
curl -X POST \
  https://weblogin-dev.asu.edu/serviceauth/oauth2/device/authorize \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'agent_device_description=Matt'\''s%20living%20room%20alexa&client_id=test-agent&client_secret={{CLIENT_SECRET}}'
```

----
### <a id="device-authz-grant">Input Limited Device - Authorization Grant</a>

* **URL**
  /oauth2/device/authorize

* **Method:**
  `POST`
  
*  **Data Params:**
   * **Required:**
   `grant_type="urn:ietf:params:oauth:grant-type:device_code"`
   `client_id=[string]`
   `client_secret=[string]`
   `device_code=[string]`

* **Success Response:**
  * **Code:** 200 <br />
    **Content:**
    ```
    {
      "access_token": "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtYXJpb0Bhc3UuZWR1IiwiaXNzIjoic2VydmljZWF1dGgtZGV2IiwiZXhwIjoxNTU4MDQ5ODc4LCJpYXQiOjE1NTgwNDk4Nzh9.CuKUgOKWhOKWiOKWiOKWiOKWiOKWhOKWhOKWkQriloTiloDilojiloDilpDilJTilIDilJDilpHilpEK4paI4paE4paQ4paM4paE4paI4paE4pSY4paI4paICuKUlOKWhOKWhOKWhOKWhOKWhOKUmOKWiOKWiOKWiArilojilojilpLilojilpLilojilojilojiloA=",
      "token_type": "bearer",
      "expires_in": 600,
      "refresh_token": "12345abcdEFG"
      "scope": [
        "https://dpl.apps.asu.edu/scopes/person/read/me"
      ] 
    }
    ```
  
  * **Code:** 302 <br />
    **Content:** `{{CAS login page}}`
 
* **Error Response:**
  * **Code:** 403 <br />
    **Content:** `{{generic error landing page}}`

* **Sample Call:**
```
curl -X POST \
  https://weblogin-dev.asu.edu/serviceauth/oauth2/device/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Adevice_code&device_code={{DEVICE_CODE}}&client_id=test-agent&client_secret={{CLIENT_SECRET}}'
```

----
### <a id="client-credentials-authz-grant">Client Credentials Grant</a>

* **URL**
  /oauth2/token

* **Method:**
  `POST`
  
*  **Data Params:**
   * **Required:**
   `grant_type="refresh_token"`
   `client_id=[string]`
   `client_secret=[string]`
   `refresh_token=[string]`

* **Success Response:**
  * **Code:** 200 <br />
    **Content:**
    ```
    {
      "access_token": "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtYXJpb0Bhc3UuZWR1IiwiaXNzIjoic2VydmljZWF1dGgtZGV2IiwiZXhwIjoxNTU4MDQ5ODc4LCJpYXQiOjE1NTgwNDk4Nzh9.CuKUgOKWhOKWiOKWiOKWiOKWiOKWhOKWhOKWkQriloTiloDilojiloDilpDilJTilIDilJDilpHilpEK4paI4paE4paQ4paM4paE4paI4paE4pSY4paI4paICuKUlOKWhOKWhOKWhOKWhOKWhOKUmOKWiOKWiOKWiArilojilojilpLilojilpLilojilojilojiloA=",
      "token_type": "bearer",
      "expires_in": 600,
      "refresh_token": "12345abcdEFG"
      "scope": [
        "https://dpl.apps.asu.edu/scopes/person/read/me"
      ] 
    }
    ```
 
* **Error Response:**
  * **Code:** 400 <br />
    **Content:**
    ```
    {
      "error": "invalid_grant",
      "error_description": "Request was made for an invalid refresh token"
    }
    ```

* **Sample Call:**
```
curl -X POST \
  https://weblogin-dev.asu.edu/serviceauth/oauth2/client/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=authorization_code&state=some-state&client_id=test-agent&client_secret={{CLIENT_SECRET}}&subject=mldelaro&scope=test'
```

----
### <a id="refresh-grant">Refresh Grant</a>
_Responds with an access token given a valid refresh token. Request can define a set of scopes that are tied to the access token._

* **URL**
  /oauth2/token

* **Method:**
  `POST`
  
*  **Data Params:**
   * **Required:**
   `grant_type="refresh_token"`
   `client_id=[string]`
   `client_secret=[string]`
   `refresh_token=[string]`

   * **Optional:**
   `scope=[string]`

* **Success Response:**
  * **Code:** 200 <br />
    **Content:**
    ```
    {
      "access_token": "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtYXJpb0Bhc3UuZWR1IiwiaXNzIjoic2VydmljZWF1dGgtZGV2IiwiZXhwIjoxNTU4MDQ5ODc4LCJpYXQiOjE1NTgwNDk4Nzh9.CuKUgOKWhOKWiOKWiOKWiOKWiOKWhOKWhOKWkQriloTiloDilojiloDilpDilJTilIDilJDilpHilpEK4paI4paE4paQ4paM4paE4paI4paE4pSY4paI4paICuKUlOKWhOKWhOKWhOKWhOKWhOKUmOKWiOKWiOKWiArilojilojilpLilojilpLilojilojilojiloA=",
      "token_type": "bearer",
      "expires_in": 600,
      "refresh_token": "12345abcdEFG"
      "scope": [
        "https://dpl.apps.asu.edu/scopes/person/read/me"
      ] 
    }
    ```
 
* **Error Response:**
  * **Code:** 400 <br />
    **Content:**
    ```
    {
      "error": "invalid_grant",
      "error_description": "Request was made for an invalid refresh token"
    }
    ```

* **Sample Call:**
```
curl -X POST \
  https://weblogin-dev.asu.edu/serviceauth/oauth2/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=authorization_code&redirect_uri=https%3A%2F%2Flocalhost.asu.edu%2F&code={{AUTHZ_CODE}}&client_id=test-agent&client_secret={{CLIENT_SECRET}}&scope=test'
```