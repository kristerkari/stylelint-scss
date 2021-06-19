# at-forward-before-use

The @forward at-rule should be used before the @use at-rule. 

```scss
@use "src/list"
@forward "src/list";
/**      ↑         ↑
   This statement should come first.
*/
```

## Options

### `true`

The following patterns are considered violations:

```scss
@use "src/list"
@forward "src/list";
```

The following patterns are _not_ considered violations:

```scss
@forward "src/list";
@use "src/list"
```