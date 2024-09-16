---
title: "Two Forms of Pre-rendering"
date: "2020-01-01"
---

Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

- Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
- Server-side Rendering is the pre-rendering method that generates the HTML on each request.
  Here's some Python code:

```python
def hello_world():
    print("Hello, world!")
```

Importantly, Next.js lets you choose which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

## Initializing a TypeScript project with Express and dotenv

To set up a basic TypeScript project using Express and dotenv, follow these steps:

1. Initialize a new Node.js project:

```bash
npm init -y
```

2. Install the necessary dependencies:

```bash
npm install express dotenv
```

3. Install TypeScript and necessary types:

```bash
npm install typescript @types/node @types/express --save-dev
```

4. Create a `tsconfig.json` file to configure TypeScript:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

5. Set up a basic Express server in TypeScript:

```typescript
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

6. Run the TypeScript compiler and start the server:

```bash
npx tsc && node dist/index.js
```
