RESTful API endpoints:
| No | Name | URI | HTTP Method | Body | Return | Result |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Investor Registration | investor | POST | {"firstName":{string},"lastName":{string},"idNumber":{int},"bDate":{string},"phoneNumber":{int},"email":{string},"address":{string},"city":{string},"country":{string},"walletAddress":{string}} | Success / Fail | Data added to DB |
| 2 | Company Issuing | contract | POST | {"companyName":{string},"companySymbol":{string},"description":{string},"imageURL":{string},"maxSupply":{int},"mintPrice":{int},"walletAddress":{string}} | Success / Fail | Data added to DB + contract created |
| 3 | Get Investors | investors | GET | None | All investors list with personal details | None |
| 4 | Get Contracts | contracts | GET | None | All contracts with details | None |
| 5 | Get Investor | investor | GET | Investor Name | Investor details | None |
| 6 | Get Company | company | GET | Company Name | Get company details + contract | None |
