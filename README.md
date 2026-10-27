# Node.js HTTP Server and Built-in Modules

This project demonstrates how to create a basic web server with Node.js's
built-in `http` module and how to use the `os`, `path`, and `events` modules.
It uses only Node.js built-in modules, so no package installation is needed.

## Requirements

- Node.js installed on your computer
- A terminal or command prompt opened in this project directory

## Run the server

Start the server with:

```sh
node server.js
```

The server listens on `127.0.0.1`, port `3000`. Open
<http://127.0.0.1:3000/> or <http://localhost:3000/> in a browser. The response
is plain text: `Hello, World!`.

Stop the server by pressing **Ctrl+C** in the terminal.

## What the example demonstrates

- **`http`** — creates a server that responds to requests with a `200` status
  and the text `Hello, World!`.
- **`os`** — prints the operating system type, platform, architecture, and
  number of CPU cores to the terminal.
- **`path`** — joins the script's directory (`__dirname`) with `public` and
  `images`, then prints the resulting platform-specific path. The example
  displays the path; it does not create those directories.
- **`events`** — registers a listener for `customEvent`, then emits that event
  with `{ message: 'Hello from custom event!' }`. The listener prints the
  received data.
- **`process.cwd()`** — prints the current working directory, which is usually
  the directory from which you ran the Node.js command.

The operating-system, path, and custom-event examples run when `server.js`
starts; the HTTP response is sent when a browser or other client makes a
request.
