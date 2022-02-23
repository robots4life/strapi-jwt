# 1. Install Strapi

https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html

Use current Node LTS version 16.13.2.

`nvm use lts/*`

When the installation is finished you will fill in the Super Admin user data under `http://localhost:1337/admin/`.

<b>The Strapi Dashboard > Settings then looks like this.</b>

<img src="/images/Screenshot_20220223_144238.png">
<br />
<br />
<br />
<br />

<b>Under Strapi Dashboard > Users you can see the Super Admin user.</b>

<img src="/images/Screenshot_20220223_154944.png">
<br />
<br />
<br />
<br />

# 2. Create Content Type Employee with Content-Type-Builder

Here is Strapi documentation on how to create a content type with the Content-Type builder.
https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html#%F0%9F%9B%A0-part-b-build-your-content

<b>I created a content type "Employee" with the following fields.</b>

<img src="/images/Screenshot_20220223_161445.png">
<br />
<br />
<br />
<br />

# 3. Add Data for the Content-Type Employee

<b>I added John Smith as an employee. Make sure you PUBLISH the data once done.</b>

<img src="/images/Screenshot_20220223_163410.png">
<br />
<br />
<br />
<br />

# 4. Set Permission on the `/api/employees` Endpoint

By default newly created content types, i.e. employee, has no public or authenticated permissions.

<b>I allowed `find` and `findOne` for the Public role of an unauthenticated user.</b>

<img src="/images/Screenshot_20220223_165809.png">
<br />
<br />
<br />
<br />

<b>This means under `http://localhost:1337/api/employees/` the data of John Smith the employee will be served to anyone.</b>

<img src="/images/Screenshot_20220223_171626.png">
<br />
<br />
<br />
<br />
