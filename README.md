# eslint-plugin-no-penetrating-import

Forbid importing from barrel index.ts files.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-penetrating-import`:

```sh
npm install eslint-plugin-no-penetrating-import --save-dev
```

## Usage

Add `no-penetrating-import` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-penetrating-import"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "<import-name>/no-penetrating-import": 2
    }
}
```
