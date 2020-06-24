const config:any  = {         
    email:{
        'service':'Gmail',
        'userEmail':'ascencio.luyo@gmail.com',
        'userPass':'DeejayCermixx14',
        // 'userEmail':'marcos.alarconh@gmail.com',
        // 'userPass':'Alarcon200113',
        host:'35.222.113.169', //Estaba en localhost
    },
    ports : 4003,
    rabbit:{
        host: `amqp://${process.env.RABBITMQ_DEFAULT_USER || 'admin'}:${process.env.RABBITMQ_DEFAULT_PASS || 'mypass'}@${process.env.RABBIT || '35.222.113.169'}`        
        // host: `amqp://${process.env.RABBITMQ_DEFAULT_USER || 'admin'}:${process.env.RABBITMQ_DEFAULT_PASS || 'mypass'}@${process.env.RABBIT || 'localhost'}`        
    }
};

export default config;
