exports.listenIP = null; //Defaults to *
exports.listenPort = '8081'; //the SSL port things run on
exports.httpListenPort = '8080'; //this will all be redirected to SSL
exports.cacheApps = true;
exports.httpVisiblePort = '80'; //forwarded http port the user sees
exports.httpsVisiblePort = '443'; //forwarded https port the user sees


//SSL Info
exports.country = "England";
exports.state = "London";
exports.locale = "London";
exports.commonName = "captechz.local";
exports.subjectAltName = "DNS:192.168.0.1";


//Experimental
//
//Status Server
//  This can be used in conjundtion with the sample findcoder
//  appengine project. It allows multiple Coders on the same
//  NAT network to be discoverable. Coder devices will ping the
//  external server with their internal IP, and the server
//  will list the devices for any requesting machine that
//  originates from the same external IP.
exports.statusServer = '[yourpingserver].appspot.com';
exports.enableStatusServer = false;
