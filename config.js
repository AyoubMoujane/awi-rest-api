const Config = function(){
    switch(process.env.NODE_ENV){
        case 'development':
            return {
                corsOptions : {
                    origin: "http://localhost:3000"
                }
            };

        case 'production':
            return {
                corsOptions : {
                    origin: "http://13.36.72.231:3000"
                }
            };

        default:
            return {
                corsOptions : {
                    origin: "http://localhost:3000"
                }
            };
    }
};

module.exports = Config()