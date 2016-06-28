sugo-demo-example
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sugo-demo-example
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sugo-demo-example
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sugo-demo-example.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sugo-demo-example
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sugo-demo-example.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sugo-demo-example/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sugo-demo-example
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sugo-demo-example.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sugo-demo-example.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sugo-demo-example
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sugo-demo-example.svg
[bd_npm_url]: http://www.npmjs.org/package/sugo-demo-example
[bd_npm_shield_url]: http://img.shields.io/npm/v/sugo-demo-example.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Demo of sugo example

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


[![favicon_url]][app_url]

[app_url]: http://sugo-demo-example.herokuapp.com
[favicon_url]: http://realglobe-inc.github.io/sugo-demo-example/images/favicon.svg


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/00.Requirements.md.hbs" Start -->

<a name="section-doc-guides-00-requirements-md"></a>
Requirements
-----

<a href="https://nodejs.org">
  <img src="https://realglobe-inc.github.io/sugos-assets/images/nodejs-banner.png"
       alt="Node.js"
       height=""
       style="height:px"
  /></a>
<a href="https://docs.npmjs.com/">
  <img src="https://realglobe-inc.github.io/sugos-assets/images/npm-banner.png"
       alt="NPM"
       height=""
       style="height:px"
  /></a>

+ [Node.js ( >=6.x )][node_download_url]
+ [npm ( >=3.x )][npm_url]

[node_download_url]: https://nodejs.org/en/download/
[npm_url]: https://docs.npmjs.com/


<!-- Section from "doc/guides/00.Requirements.md.hbs" End -->

<!-- Section from "doc/guides/01.Quick Start.md.hbs" Start -->

<a name="section-doc-guides-01-quick-start-md"></a>
Quick Start
-----

Deploy to the [Heroku][heroku_url] and play it!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)][heroku_deploy_url]

[heroku_url]: https://www.heroku.com/
[heroku_deploy_url]: https://heroku.com/deploy?template=https://github.com/realglobe-Inc/sugo-demo-example/tree/heroku


<!-- Section from "doc/guides/01.Quick Start.md.hbs" End -->

<!-- Section from "doc/guides/10.How to.md.hbs" Start -->

<a name="section-doc-guides-10-how-to-md"></a>
How to
-------

<!-- Section from "doc/guides/10.How to.md.hbs" End -->

<!-- Section from "doc/guides/11.Setup Cloud.md.hbs" Start -->

<a name="section-doc-guides-11-setup-cloud-md"></a>
### Setup Cloud

Install the CLI

```bash
$ npm install sugo-demo-example -g
```

Then, start the server

```bash
$ PORT=300 sugo-demo-example cloud
```

In the most of cases, you need to setup reverse-proxy (like [nginx][nginx_url]) to exports the server to the outer world.

[nginx_url]: https://www.nginx.com/


<!-- Section from "doc/guides/11.Setup Cloud.md.hbs" End -->

<!-- Section from "doc/guides/12.Run Spot.md.hbs" Start -->

<a name="section-doc-guides-12-run-spot-md"></a>
### Run Spot

Install the CLI


```bash
$ npm install sugo-demo-example -g
```

Then, connect the spot to cloud

```bash
$ HOSTNAME=__your_cloud_hostname__ SPOT_KEY=__your_own_spot_name__ sugo-demo-example spot
```


<!-- Section from "doc/guides/12.Run Spot.md.hbs" End -->

<!-- Section from "doc/guides/13.Use Terminal.md.hbs" Start -->

<a name="section-doc-guides-13-use-terminal-md"></a>
### Use Terminal


Install the CLI

```bash
$ npm install sugo-demo-example -g
```

Then, run the example terminal

```bash
$ HOSTNAME=__your_cloud_hostname__ sugo-demo-example terminal
```

Or, you can try it from UI pages on the cloud.


<!-- Section from "doc/guides/13.Use Terminal.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sugo-demo-example/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [sugos](https://github.com/realglobe-Inc/sugos)

<!-- Links End -->
