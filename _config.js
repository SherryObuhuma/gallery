var config = {}

// Update to have your correct username and password
config.mongoURI = {
    mongodb+srv://sherry:Macherie2015@cluster1.mabot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
    production: 'mongodb+srv://sherry:Macherie2015@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://sherry:Macherie2015@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://sherry:Macherie2015@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
