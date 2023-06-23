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
// output: Hello World
```

```js
// using import() dynamic import
(async () => {
  const { stripHtmlTags } = await jsHelpers
  console.log(stripHtmlTags('<h1>Hello World</h1>'))
  // output: Hello World
})()
```

## All examples

### createApi

```js
// createApi
const api = createApi('https://nekobot.xyz/api')
const output = await api.image({ type: 'neko' })
// final url: https://nekobot.xyz/api/image?type=neko
console.log({ output })
// output: 
// {
// "success": true,
// "message": "https://i0.nekobot.xyz/7/0/6/217595fa8b7cae5b7f6524169230c.png",
// "color": 13419230,
// "version": "2021070801"
// }
```

### debounce

```js
// debounce
const miFuncion = function() {
  console.log("Mi función debouncer");
}
const miFuncionConDebounce = debounce(miFuncion, 5000, {
  flood: 3,
  onFlood: function() {
    console.log("¡Estás haciendo spam!");
  },
  onCall: function() {
    console.log("Se ha llamado a la función debouncer");
  },
  onComplete: function() {
    console.log("Se ha completado la función debouncer");
  },
  immediate: true
});

miFuncionConDebounce(); // Llamada 1
miFuncionConDebounce(); // Llamada 2
miFuncionConDebounce(); // Llamada 3 (Flood alcanzado, se llama a onFlood)
miFuncionConDebounce(); // Llamada 4 (callCount se reinicia a 0 en el setTimeout)

```

## Methods

| Name    | Description                                                                                 |
|---------|---------------------------------------------------------------------------------------------|
| `createApi` | Utility function to create an API.                                             |
| `stripHtmlTags` | Utility function to strip HTML tags.                                             |
| `debounce` | Utility function to debounce a function.                                             |
| `utf8Tob64` | Utility function to convert UTF8 to base64.                                             |
| `b64Toutf8` | Utility function to convert base64 to UTF8.                                             |
| `normalize` | Utility function to normalize a string.                                             |
| `jsonPrettier` | Utility function to prettify object or array.                                             |

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
