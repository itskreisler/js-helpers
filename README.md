# @kreisler/js-helpers

`@kreisler/js-helpers` is a Javascript library for dealing with code repetition

## Usage

Install package

```node
npm i @kreisler/js-helpers
```

## Import module

```mjs
// Using ES6 imports
import jsHelpers from "@kreisler/js-helpers";
```

or

## Import commonjs not supported by default, use import() dynamic import instead

```js
// Using Node.js `import()`
const jsHelpers = import('@kreisler/js-helpers');
```

## Examples

```js
// using import module from "package-name"
const { stripHtmlTags } = jsHelpers
console.log(stripHtmlTags('<h1>Hello World</h1>'))
```

```js
// using import() dynamic import
(async () => {
  const { stripHtmlTags } = await jsHelpers
  console.log(stripHtmlTags('<h1>Hello World</h1>'))
})()
```

## Methods

| Name    | Description                                                                                 |
|---------|---------------------------------------------------------------------------------------------|
| `createApi` | Utility function to create an API.                                             |
| `stripHtmlTags` | Utility function to strip HTML tags.                                             |

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
