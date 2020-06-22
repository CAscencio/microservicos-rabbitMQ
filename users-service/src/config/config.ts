const config:any  = {
    port: 4001,
    db: {
        host: `mongodb://${process.env.MONGO_HOST || '35.222.113.169'}/`,        
        // host: `mongodb://${process.env.MONGO_HOST || 'localhost'}/`,        
        database: 'UsersMongo',
        user: '',
        password: '',
        port: 3306
    },
    rabbit:{
        host: 'amqp://admin:mypass@35.222.113.169'
        // host: 'amqp://admin:mypass@localhost'
    }
};

export default config;
