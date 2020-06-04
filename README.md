# SIMPLE VAULT JS

A node js password manager application.

![Alt][1]

## Description

This project is inspred from [SimpleVault][2] PHP project and ported to node js platform.

## Getting Started

### Dependencies

* consolidate
* crypto-js: used for crypting passwords
* express
* lokijs: document database
* underscore: used as templating engine

### Installing

* Download and unzip this repository
* Optional: change the password hash in file crypt.js line 9 and line 15 (this operation is not reversible) and must done once before installation
* Issue the command: npm install
* If you want to install this application on the web, make sure to use TLS encryption. Queries are issued with GET method and can be visible to third parties whith no TLS encryption

### Executing
* Run command: node main.js this will run rhe application on the host machine at port 5000
* To change application port run: port=xxxx node main.js (replace xxxx with your port number)

## Help

Contact me for any advise, for common problems or issues.

## Author

[@Author][3]

[1]: /simplevaultjs.png "SimpleVaultJS"
[2]: http://simplevault.sourceforge.net/
[3]: http://akconcept.epizy.com
