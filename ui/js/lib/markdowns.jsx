
/**
 * Markdown contents
 * @namespace Markdowns
 */
 'use strict'

let restore = (text) => text.replace(/&#x60;/g,'`')

/** Converted from "doc/guides/01.Quick Start.md.hbs" */
exports['01.Quick Start'] = restore(`Quick Start
-----

Deploy to the [Heroku][heroku_url] and play it!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

[heroku_url]: https://www.heroku.com/`)

/** Converted from "doc/guides/10.Setup Cloud.md.hbs" */
exports['10.Setup Cloud'] = restore(`Setup Cloud
-----

Install the CLI to your spot server

&#x60;&#x60;&#x60;bash
$ npm install sugo-demo-example -g
&#x60;&#x60;&#x60;

Then, start the server

&#x60;&#x60;&#x60;bash
$ PORT&#x3D;300 sugo-demo-example cloud
&#x60;&#x60;&#x60;

In the most of cases, you need to setup reverse-proxy (like [nginx][nginx_url]) to exports the server to outer world.

[nginx_url]: https://www.nginx.com/
`)

/** Converted from "doc/guides/12.Run Spot.md.hbs" */
exports['12.Run Spot'] = restore(`Run Spot
-----

Install the CLI to machi which the spot runs on. 

&#x60;&#x60;&#x60;bash
$ npm install sugo-demo-example -g
&#x60;&#x60;&#x60;

Then, connect spot to the cloud

&#x60;&#x60;&#x60;bash
$ HOST&#x3D;__hostname_of_your_cloud__ sugo-demo-example cloud 
&#x60;&#x60;&#x60;
`)

/** Converted from "doc/guides/13.Use Terminal.md.hbs" */
exports['13.Use Terminal'] = restore(`Use Terminal
-----

&#x60;&#x60;&#x60;jsx

&#x60;&#x60;&#x60;`)

