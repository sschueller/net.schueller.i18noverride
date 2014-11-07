# i18n Override Widget [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://appcelerator.com/titanium/) [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)
This is a widget for the [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework of [Appcelerator](http://www.appcelerator.com)'s [Titanium](http://www.appcelerator.com/platform) platform.

It provides a method to override internationalization strings allowing customer custom strings. Useful for white label apps.

## Usage [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/net.schueller.i18noverride)
1. Install [i18n Override](http://gitt.io/component/net.schueller.i18noverride) via [gitTio](http://gitt.io):

	`gittio install net.schueller.i18noverride`
	
2. Organize your language files like so:
    ```
     /app/assets/i18n/{language}/strings.xml         
     /app/assets/i18n/{language}/strings_custom.xml
    ```
	
	strings.xml is the default file in the standard format: http://docs.appcelerator.com/titanium/3.0/#!/guide/Internationalization
	strings_custom.xml is the same format at strings.xml but only contians string to override.

	
	**strings.xml**
	```
        <?xml version="1.0" encoding="UTF-8"?>
        <resources>
            <string name="some_string">Some String</string>
            <string name="some_other_string">Some Other String</string>
        </resources>	
	
	```
	
	**strings_custom.xml**
	```
        <?xml version="1.0" encoding="UTF-8"?>
        <resources>
            <string name="some_other_string">Customer specific string</string>
        </resources>	
	
	```	
	
	**NOTE**: The standard location of i18n files (/app/i18n/...) does not work with android when using modules that have a strings.xml file in their platform folder.
	
2. In your `app/alloy.js` place the following to override L():

	```
    // Override L function
    L = Alloy.createWidget("net.schueller.i18noverride").L;

	```
3. Use L() like before:
	
	`$.label.text = L('my_string', 'Default string');`
	

## Changelog
- 1.0.0: First version.

## License

<pre>
Copyright 2014 Stefan Schüller

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>
