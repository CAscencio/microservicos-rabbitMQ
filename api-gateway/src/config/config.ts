const config:any  = {
    port: 3000,    
    services:{
        courses:process.env.COURSES ? `http://${process.env.COURSES}` : 'http://35.222.113.169:4002',
        // courses:process.env.COURSES ? `http://${process.env.COURSES}` : 'http://localhost:4002',
        users:process.env.USERS ? `http://${process.env.USERS}` : 'http://35.222.113.169:4001',
        // users:process.env.USERS ? `http://${process.env.USERS}` : 'http://localhost:4001',
    },
    rabbit:{
        host: `amqp://${process.env.RABBITMQ_DEFAULT_USER || 'admin'}:${process.env.RABBITMQ_DEFAULT_PASS || 'mypass'}@${process.env.RABBIT || '35.222.113.169'}`
        // host: `amqp://${process.env.RABBITMQ_DEFAULT_USER || 'admin'}:${process.env.RABBITMQ_DEFAULT_PASS || 'mypass'}@${process.env.RABBIT || 'localhost'}`
    }
};

export default config;
