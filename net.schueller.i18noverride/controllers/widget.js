/**
 *    Script to handle customer specific override strings
 *
 *    Files are not in the standard location. Reason being that on Android the strings.xml is override by modules that contain
 *    a strings.xml in their platform folder. http://docs.appcelerator.com/titanium/3.0/#!/guide/Internationalization
 *
 *    Use the following folder structure:
 *
 *
 *    /app/assets/i18n/{language}/strings.xml         --> Standard strings.xml as defined here: http://docs.appcelerator.com/titanium/3.0/#!/guide/Internationalization
 *    /app/assets/i18n/{language}/strings_custom.xml  --> Strings to be overriden using same format as strings.xml
 *
 */

/**
 * L function override
 *
 * @param string string to translate
 * @param default_text default text to use if string it not found
 *
 * @returns {*} string
 * @constructor
 */
exports.L = function (string, default_text) {
    // get custom strings file
    var file = Titanium.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'i18n/' + Titanium.Locale.getCurrentLanguage() + '/strings_custom.xml');

    // check if file and string exist
    if (file.exists()) {
        var customString = decodeXMLFile(file, string);
        if (customString) {
            return customString;
        }
    }

    // get standard string file
    file = Titanium.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'i18n/' + Titanium.Locale.getCurrentLanguage() + '/strings.xml');

    // check if file and string exist
    if (file.exists()) {
        var standardString = decodeXMLFile(file, string);
        if (standardString) {
            return standardString;
        }
    }

    // no string found, return default
    return default_text;
};

/**
 * finds a language string in an xml file
 *
 * @param file xml file to look in
 * @param string string to look for
 *
 * @returns {*} false if not found or string
 */
function decodeXMLFile(file, string) {

    var xmldata = Titanium.XML.parseString(file.read().text);
    var elements = xmldata.documentElement.getElementsByTagName('string');
    for (var i = 0; i < elements.length; i++) {
        if (elements.item(i).getAttribute('name') == string) {
            return elements.item(i).text;
        }
    }
    return false;

}