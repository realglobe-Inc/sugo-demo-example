
/**
 * !! This is an auto-generated file and do not edit manually !! 
 * Markdown contents
 * @namespace Markdowns
 */
'use strict'

let restore = (text) => text.replace(/&#x60;/g, '`').replace(/&#x3D;/g, '=')

/** Converted from "doc/guides/01.Quick Start.md.hbs" */
exports[ '01.Quick Start' ] = restore(`Quick Start
-----

Deploy to the [Heroku][heroku_url] and play it!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template&#x3D;https://github.com/realglobe-Inc/sugo-demo-example/tree/heroku)

[heroku_url]: https://www.heroku.com/
`)

/** Converted from "doc/guides/10.How to.md.hbs" */
exports[ '10.How to' ] = restore(`How to
-------`)

/** Converted from "doc/guides/11.Setup Cloud.md.hbs" */
exports[ '11.Setup Cloud' ] = restore(`### Setup Cloud

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
exports[ '12.Run Spot' ] = restore(`### Run Spot


Install the CLI to machine which the spot runs on. 

&#x60;&#x60;&#x60;bash
$ npm install sugo-demo-example -g
&#x60;&#x60;&#x60;

Then, connect spot to the cloud

&#x60;&#x60;&#x60;bash
$ HOSTNAME&#x3D;__hostname_of_your_cloud__ SPOT_KEY&#x3D;__your_own_spot_name__ sugo-demo-example spot
&#x60;&#x60;&#x60;

`)

/** Converted from "doc/guides/13.Use Terminal.md.hbs" */
exports[ '13.Use Terminal' ] = restore(`### Use Terminal


Install the CLI to machine which the use terminal.

&#x60;&#x60;&#x60;bash
$ npm install sugo-demo-example -g
&#x60;&#x60;&#x60;

Then, rune the example terminal

&#x60;&#x60;&#x60;bash
$ HOSTNAME&#x3D;__hostname_of_your_cloud__ sugo-demo-example terminal
&#x60;&#x60;&#x60;`)

