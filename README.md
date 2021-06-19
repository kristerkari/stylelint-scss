# stylelint-scss

[![NPM version](https://img.shields.io/npm/v/stylelint-scss.svg)](https://www.npmjs.com/package/stylelint-scss)
[![Build Status](https://github.com/kristerkari/stylelint-scss/workflows/Tests/badge.svg)](https://github.com/kristerkari/stylelint-scss/actions?workflow=Tests)
[![Coverage Status](https://img.shields.io/coveralls/github/kristerkari/stylelint-scss/master.svg)](https://coveralls.io/github/kristerkari/stylelint-scss?branch=master)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
[![Downloads per month](https://img.shields.io/npm/dm/stylelint-scss.svg)](https://npmcharts.com/compare/stylelint-scss)

A collection of SCSS specific linting rules for [stylelint](https://github.com/stylelint/stylelint) (in a form of a plugin).

## Purpose

stylelint by itself supports [SCSS syntax](https://stylelint.io/user-guide/css-processors#parsing-non-standard-syntax) very well (as well as other preprocessors' syntaxes). Moreover, it introduces some specific rules that can be used to lint SCSS, e.g. to limit [`nesting`](https://stylelint.io/user-guide/rules/max-nesting-depth), control the way [`@-rules`](https://stylelint.io/user-guide/rules#at-rule) are written. Yet stylelint is in general focused on standard CSS.

stylelint-scss introduces rules specific to SCSS syntax. That said, the rules from this plugin can be used with other syntaxes, like Less or some PostCSS syntaxes. That's why the rules' names are not tied to SCSS only (`at-function-pattern` instead of `scss-function-pattern`).

The plugin follows stylelint's guidelines (about [rule names](https://stylelint.io/user-guide/about-rules), testing and [so on](https://github.com/stylelint/stylelint/tree/master/docs/developer-guide)).

## Installation and usage

stylelint-scss is a plugin for [stylelint](https://stylelint.io/user-guide/get-started), so it's meant to be used with it.

First, install stylelint-scss (and stylelint, if you haven't done so yet) via NPM:

```
npm install stylelint stylelint-scss
```

Create the `.stylelintrc.json` config file (or open the existing one), add `stylelint-scss` to the plugins array and the rules you need to the rules list. All rules from stylelint-scss need to be namespaced with `scss`.

```js
{
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    // recommended rules
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    ...
    ...
    // any other rules you'd want to change e.g.
    "scss/dollar-variable-pattern": "^foo",
    "scss/selector-no-redundant-nesting-selector": true,
  }
}
```

Please refer to [stylelint docs](https://stylelint.io/user-guide/get-started) for the detailed info on using this linter.

## List of rules

See our [documentation](https://github.com/kristerkari/stylelint-scss/tree/master/docs/list-of-rules.md) for a full list of rules we support.

## Help out

There work on the plugin's rules is still in progress, so if you feel like it, you're welcome to help out in any of these (the plugin follows stylelint guidelines so most part of this is based on its docs):

- Create, enhance, and debug rules (see stylelint's guide to "[Working on rules](https://github.com/stylelint/stylelint/blob/master/docs/developer-guide/rules.md)").
- Improve documentation.
- Chime in on any open issue or pull request.
- Open new issues about your ideas on new rules, or for how to improve the existing ones, and pull requests to show us how your idea works.
- Add new tests to absolutely anything.
- Work on improving performance of rules.
- Contribute to [stylelint](https://github.com/stylelint/stylelint)
- Spread the word.

We communicate via [issues](https://github.com/kristerkari/stylelint-scss/issues) and [pull requests](https://github.com/kristerkari/stylelint-scss/pulls).

There is also [stackoverflow](https://stackoverflow.com/questions/tagged/stylelint), which would be the preferred QA forum.

## Contributors

Thanks goes to these wonderful people:

<table>
<thead>
<tr>
<th align="center"><a href="https://github.com/kristerkari"><img alt="kristerkari" src="https://avatars.githubusercontent.com/u/993108?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/dryoma"><img alt="dryoma" src="https://avatars.githubusercontent.com/u/11942776?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/rambleraptor"><img alt="rambleraptor" src="https://avatars.githubusercontent.com/u/1325798?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/XhmikosR"><img alt="XhmikosR" src="https://avatars.githubusercontent.com/u/349621?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/joseph118"><img alt="joseph118" src="https://avatars.githubusercontent.com/u/6863655?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/kaysonwu"><img alt="kaysonwu" src="https://avatars.githubusercontent.com/u/14865584?v=4&s=80" width="80"></a></th>
</tr>
</thead>
<tbody><tr>
<td align="center"><a href="https://github.com/kristerkari">kristerkari</a></td>
<td align="center"><a href="https://github.com/dryoma">dryoma</a></td>
<td align="center"><a href="https://github.com/rambleraptor">rambleraptor</a></td>
<td align="center"><a href="https://github.com/XhmikosR">XhmikosR</a></td>
<td align="center"><a href="https://github.com/joseph118">joseph118</a></td>
<td align="center"><a href="https://github.com/kaysonwu">kaysonwu</a></td>
</tr>
</tbody></table>
<table>
<thead>
<tr>
<th align="center"><a href="https://github.com/srawlins"><img alt="srawlins" src="https://avatars.githubusercontent.com/u/103167?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/pipopotamasu"><img alt="pipopotamasu" src="https://avatars.githubusercontent.com/u/14048211?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/Eugeno"><img alt="Eugeno" src="https://avatars.githubusercontent.com/u/23382920?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/OriR"><img alt="OriR" src="https://avatars.githubusercontent.com/u/2384068?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/ntwb"><img alt="ntwb" src="https://avatars.githubusercontent.com/u/1016458?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/ricardogobbosouza"><img alt="ricardogobbosouza" src="https://avatars.githubusercontent.com/u/13064722?v=4&s=80" width="80"></a></th>
</tr>
</thead>
<tbody><tr>
<td align="center"><a href="https://github.com/srawlins">srawlins</a></td>
<td align="center"><a href="https://github.com/pipopotamasu">pipopotamasu</a></td>
<td align="center"><a href="https://github.com/Eugeno">Eugeno</a></td>
<td align="center"><a href="https://github.com/OriR">OriR</a></td>
<td align="center"><a href="https://github.com/ntwb">ntwb</a></td>
<td align="center"><a href="https://github.com/ricardogobbosouza">ricardogobbosouza</a></td>
</tr>
</tbody></table>
<table>
<thead>
<tr>
<th align="center"><a href="https://github.com/bjankord"><img alt="bjankord" src="https://avatars.githubusercontent.com/u/633148?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/kevindew"><img alt="kevindew" src="https://avatars.githubusercontent.com/u/282717?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/thibaudcolas"><img alt="thibaudcolas" src="https://avatars.githubusercontent.com/u/877585?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/AndyOGo"><img alt="AndyOGo" src="https://avatars.githubusercontent.com/u/914443?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/niksy"><img alt="niksy" src="https://avatars.githubusercontent.com/u/389286?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/alexander-akait"><img alt="alexander-akait" src="https://avatars.githubusercontent.com/u/4567934?v=4&s=80" width="80"></a></th>
</tr>
</thead>
<tbody><tr>
<td align="center"><a href="https://github.com/bjankord">bjankord</a></td>
<td align="center"><a href="https://github.com/kevindew">kevindew</a></td>
<td align="center"><a href="https://github.com/thibaudcolas">thibaudcolas</a></td>
<td align="center"><a href="https://github.com/AndyOGo">AndyOGo</a></td>
<td align="center"><a href="https://github.com/niksy">niksy</a></td>
<td align="center"><a href="https://github.com/alexander-akait">alexander-akait</a></td>
</tr>
</tbody></table>
<table>
<thead>
<tr>
<th align="center"><a href="https://github.com/vseventer"><img alt="vseventer" src="https://avatars.githubusercontent.com/u/638323?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/Calme1709"><img alt="Calme1709" src="https://avatars.githubusercontent.com/u/30140939?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/Deimos"><img alt="Deimos" src="https://avatars.githubusercontent.com/u/9033?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/diego-codes"><img alt="diego-codes" src="https://avatars.githubusercontent.com/u/5973294?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/EvanHahn"><img alt="EvanHahn" src="https://avatars.githubusercontent.com/u/777712?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/guoyunhe"><img alt="guoyunhe" src="https://avatars.githubusercontent.com/u/5836790?v=4&s=80" width="80"></a></th>
</tr>
</thead>
<tbody><tr>
<td align="center"><a href="https://github.com/vseventer">vseventer</a></td>
<td align="center"><a href="https://github.com/Calme1709">Calme1709</a></td>
<td align="center"><a href="https://github.com/Deimos">Deimos</a></td>
<td align="center"><a href="https://github.com/diego-codes">diego-codes</a></td>
<td align="center"><a href="https://github.com/EvanHahn">EvanHahn</a></td>
<td align="center"><a href="https://github.com/guoyunhe">guoyunhe</a></td>
</tr>
</tbody></table>
<table>
<thead>
<tr>
<th align="center"><a href="https://github.com/jantimon"><img alt="jantimon" src="https://avatars.githubusercontent.com/u/4113649?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/stormwarning"><img alt="stormwarning" src="https://avatars.githubusercontent.com/u/999825?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/keegan-lillo"><img alt="keegan-lillo" src="https://avatars.githubusercontent.com/u/3537963?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/manovotny"><img alt="manovotny" src="https://avatars.githubusercontent.com/u/446260?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/paulgv"><img alt="paulgv" src="https://avatars.githubusercontent.com/u/4895885?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/sajadtorkamani"><img alt="sajadtorkamani" src="https://avatars.githubusercontent.com/u/9380313?v=4&s=80" width="80"></a></th>
</tr>
</thead>
<tbody><tr>
<td align="center"><a href="https://github.com/jantimon">jantimon</a></td>
<td align="center"><a href="https://github.com/stormwarning">stormwarning</a></td>
<td align="center"><a href="https://github.com/keegan-lillo">keegan-lillo</a></td>
<td align="center"><a href="https://github.com/manovotny">manovotny</a></td>
<td align="center"><a href="https://github.com/paulgv">paulgv</a></td>
<td align="center"><a href="https://github.com/sajadtorkamani">sajadtorkamani</a></td>
</tr>
</tbody></table>
<table>
<thead>
<tr>
<th align="center"><a href="https://github.com/YozhikM"><img alt="YozhikM" src="https://avatars.githubusercontent.com/u/27273025?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/chalkygames123"><img alt="chalkygames123" src="https://avatars.githubusercontent.com/u/5608239?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/AM-77"><img alt="AM-77" src="https://avatars.githubusercontent.com/u/18232579?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/YodaDaCoda"><img alt="YodaDaCoda" src="https://avatars.githubusercontent.com/u/365349?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/freezy-sk"><img alt="freezy-sk" src="https://avatars.githubusercontent.com/u/661637?v=4&s=80" width="80"></a></th>
<th align="center"><a href="https://github.com/jeddy3"><img alt="jeddy3" src="https://avatars.githubusercontent.com/u/808227?v=4&s=80" width="80"></a></th>
</tr>
</thead>
<tbody><tr>
<td align="center"><a href="https://github.com/YozhikM">YozhikM</a></td>
<td align="center"><a href="https://github.com/chalkygames123">chalkygames123</a></td>
<td align="center"><a href="https://github.com/AM-77">AM-77</a></td>
<td align="center"><a href="https://github.com/YodaDaCoda">YodaDaCoda</a></td>
<td align="center"><a href="https://github.com/freezy-sk">freezy-sk</a></td>
<td align="center"><a href="https://github.com/jeddy3">jeddy3</a></td>
</tr>
</tbody></table>

## Important documents

- [Changelog](./CHANGELOG.md)
- [Contributing](./CONTRIBUTING.md)
- [License](./LICENSE)
