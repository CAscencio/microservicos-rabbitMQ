const config:any  = {         
    email:{
        'service':'Gmail',
        'userEmail':'ascencio.luyo@gmail.com',
        'userPass':'DeejayCermixx14',
        host:'104.215.92.219', //Estaba en localhost
    },
    ports : 4003,
    rabbit:{
        host: `amqp://${process.env.RABBITMQ_DEFAULT_USER || 'admin'}:${process.env.RABBITMQ_DEFAULT_PASS || 'mypass'}@${process.env.RABBIT || 'localhost'}`        
    }
};

export default config;
