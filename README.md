# ACenterA PaaS Community Edition (Core)

If you wish to use this "Play Framework Module", please follow the instruction from : [acentera-web](https://github.com/ACenterAInc/acentera-web)

Commercial product differ from this open source solution, visit us at http://www.acentera.com/

OpenSouce Cloud Platform / Platform As A Service  - Web Portal

## HipChat

Stick with us on HipChat :  https://www.hipchat.com/invite/118632/c4964afb5fdd2211c7399bd8f8e09908


## Features

    * i18N
    * EmberJs
    * Play Framework
    * Role Base Access
    * Team cooperation
    * Admin interface *not yet anything implemented, but support is there*

Please add your [Feature Requests](http://www.acentera.com/features/)

Feel free to contribute by providing a pull request if you wish to create a "command line client"

This currently support Digital Ocean's to manage servers with multiple accounts, *still working on Role Base Access logic*.

The web framework is based on EmberJS with Play, we have integrated and made custom changes to the Play-Ember module from [Play-EmberJs](https://github.com/krumpi/play-emberjs)

The i18N Support works as

## Development Compile Installation
## This should only be used as "MODULE" 

see https://github.com/ACenterAInc/acentera-web

### Memcache

For sessions, you should use memcached and configure the conf/application.conf

### IDEA Extra Configuration

    You will need to install and configure the IDEA Lombok Plugin

### ReCatpcha For Signup

Create yourself a recaptcha public and private key at https://www.google.com/recaptcha/admin#whyrecaptcha

Insert the key and secret into conf/application.conf at the appropriate location.


### EmberJS

The EmberJS using play-ember, thanks for that plugin, takes the various *.handlebars files and *.js from the following folders in that order

    * app/assets/templates/base/common/{view,models,controller}

    * app/assets/templates/base/admin/{view,models,controller}
    * app/assets/templates/base/user/{view,models,controller}

The Javascript files generated generated are imported from following html file in a specific order

    * app/assets/views/main.scala.html



### i18N

We have not yet modified or created all of the i18N texts, feel free to create or update the various views and send us a pull request. We will be happy to look at them and integrate it.

    * Browser base Text Replacement

EmberJS i18n.js file is located at app/assets/templates/base/i18n.js
```javascript
    App.get("i18n").reopen({
        fr : {
                leftmenu: {
                        project_list: "Liste de Projets"
                },
                first_name: "Prenom",
                last_name: "Nom de famille",
        },
        en : {
                leftmenu: {
                    project_list: "Project List"
                },
                first_name: "First Name"
        }
    });
```

The i18N usage in a view is simple as this :

    {{i18n "first_name"}}

or if you have a bootstrap tooltip we have created a small bind-attr-i18n handlebars helper

    {{bind-attr-i18n data-original-title="last_name"}}


A Simple rule exists, if no token "last_name" has been found... it will replace the 1st character with a "Capital letter" and replace dot or underscoes with a space


    * Server Text Replacement

You will find a conf/messages file in the root of this repo.

    Not much have been done or looked into how Play Framework support i18n.



## ACenterA Commercial Product
Sign up for free at [ACenterA - Cloud & Database Managed Services](http://www.acentera.com/)



##License

ACenterA Community Cloud Portal is under MIT license. See [LICENSE.txt](https://github.com/ACenterAInc/acentera-web/blob/master/LICENSE.txt)

*Only meant for internal uses, if you want to use this service to present this UI for re-seller commercial activities... You should contact support@acentera.com for help on a commercial usage*
