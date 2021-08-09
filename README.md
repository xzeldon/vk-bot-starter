# vk bot starter

Includes utilities:

* [dotenv-safe](https://www.npmjs.com/package/dotenv-safe)
  * Identical to [dotenv](https://www.npmjs.com/package/dotenv), but ensures that all necessary environment variables are defined after reading from .env. These needed variables are read from .env.example, which should be commited along with your project.
* [vk-io](https://www.npmjs.com/package/vk-io)
    * This is a powerful Node.js module that allows you to easily interact with the API VK 🚀
* [@vk-io/hear](https://www.npmjs.com/package/@vk-io/hear)
    * Simple implementation of the hears ⚙️


Development utilities:

* [nodemon](https://www.npmjs.com/package/nodemon)
  * ``nodemon`` is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [cross-env](https://www.npmjs.com/package/cross-env)
    * ``cross-env`` makes it so you can have a single command without worrying about setting or using the environment variable properly for the platform. Just set it like you would if it's running on a POSIX system, and ``cross-env`` will take care of setting it properly.

## Setup

```
npm install
```

## Development

```
npm run dev
```