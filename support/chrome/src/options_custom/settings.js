window.addEvent("domready", function () {
    // Option 1: Use the manifest:
    // new FancySettings.initWithManifest(function (settings) {
    //     settings.manifest.myButton.addEvent("action", function () {
    //         alert("You clicked me!");
    //     });
    // });
    
    // Option 2: Do everything manually:
    
    var settings = new FancySettings("Your Majesty's Royal Door-opener", "icon.png");
    
    var server = settings.create({
        "tab": "server",
        "group": "server",
        "name": "url",
        "type": "text",
        "label": "URL",
        "text": "http://172.16.1.65:9292"
    });

    var username = settings.create({
        "tab": "server",
        "group": "server",
        "name": "username",
        "type": "text",
        "label": "User",
        "text": "Theo"
    });
    
    /*
    var password = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("login"),
        "name": "password",
        "type": "text",
        "label": i18n.get("password"),
        "text": i18n.get("x-characters-pw"),
        "masked": true
    });
    
    var myDescription = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("login"),
        "name": "myDescription",
        "type": "description",
        "text": i18n.get("description")
    });
    
    var myButton = settings.create({
        "tab": "Information",
        "group": "Logout",
        "name": "myButton",
        "type": "button",
        "label": "Disconnect:",
        "text": "Logout"
    });
    
    // ...
    
    myButton.addEvent("action", function () {
        alert("You clicked me!");
    });
    
    settings.align([
        username,
        password
    ]);
    */
});
