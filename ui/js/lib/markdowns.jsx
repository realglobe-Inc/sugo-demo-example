
/**
 * !! This is an auto-generated file and do not edit manually !! 
 * Markdown contents
 * @namespace Markdowns
 */
'use strict'

let restore = (text) => text.replace(/&#x60;/g, '`').replace(/&#x3D;/g, '=')

/** Converted from "doc/guides/00.Requirements.md.hbs" */
exports[ '00.Requirements' ] = restore(`Requirements
-----

+ [Node.js ( &gt;&#x3D;6.x )][node_download_url]

[node_download_url]: https://nodejs.org/en/download/
`)

/** Converted from "doc/guides/01.Quick Start.md.hbs" */
exports[ '01.Quick Start' ] = restore(`Quick Start
-----

Deploy to the [Heroku][heroku_url] and play it!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)][heroku_deploy_url]

[heroku_url]: https://www.heroku.com/
[heroku_deploy_url]: https://heroku.com/deploy?template&#x3D;https://github.com//tree/heroku
`)

/** Converted from "doc/guides/10.How to.md.hbs" */
exports[ '10.How to' ] = restore(`How to
-------`)

/** Converted from "doc/guides/11.Setup Cloud.md.hbs" */
exports[ '11.Setup Cloud' ] = restore(`### Setup Cloud

Install the CLI

&#x60;&#x60;&#x60;bash
$ npm install sugo-demo-example -g
&#x60;&#x60;&#x60;

Then, start the server

&#x60;&#x60;&#x60;bash
$ PORT&#x3D;300 sugo-demo-example cloud
&#x60;&#x60;&#x60;

In the most of cases, you need to setup reverse-proxy (like [nginx][nginx_url]) to exports the server to the outer world.

[nginx_url]: https://www.nginx.com/
`)

/** Converted from "doc/guides/12.Run Spot.md.hbs" */
exports[ '12.Run Spot' ] = restore(`### Run Spot

Install the CLI


&#x60;&#x60;&#x60;bash
$ npm install sugo-demo-example -g
&#x60;&#x60;&#x60;

Then, connect the spot to cloud

&#x60;&#x60;&#x60;bash
$ HOSTNAME&#x3D;__your_cloud_hostname__ SPOT_KEY&#x3D;__your_own_spot_name__ sugo-demo-example spot
&#x60;&#x60;&#x60;
`)

/** Converted from "doc/guides/13.Use Terminal.md.hbs" */
exports[ '13.Use Terminal' ] = restore(`### Use Terminal


Install the CLI

&#x60;&#x60;&#x60;bash
$ npm install sugo-demo-example -g
&#x60;&#x60;&#x60;

Then, run the example terminal

&#x60;&#x60;&#x60;bash
$ HOSTNAME&#x3D;__your_cloud_hostname__ sugo-demo-example terminal
&#x60;&#x60;&#x60;

Or, you can try it from UI pages on the cloud.
`)

