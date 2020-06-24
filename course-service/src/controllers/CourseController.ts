import {default as Course} from '../models/Course';
import { Request, Response, NextFunction,IRoute } from "express";
import { abstractControl} from './abstractControl';

export class CourseController extends abstractControl{

    constructor(router:any){
        super(router,Course);

        setTimeout(()=>{
            this.defaultDB();
        },1000)
    }

    defaultDB(){
        this.model.find( (err:any,resp:any)=>{
            // if(err) this.handleError(res)(err);
            if(resp.length == 0){
                let courses :Array<any>=[
                    {
                        autor: 'Joan Ribas Lequerica',
                        name:'Desarrollo de aplicaciones para android',
                        image:'https://i.pinimg.com/originals/c2/33/25/c233255edeb6569778c291cda2856482.jpg',
                        description:'Aprendiendo las bases solidas para el desarrollo de aplicaciones robustas y escalables en Android'
                    },
                    {
                        autor: 'Fernando Herrera',
                        name:'Angular 9+',
                        image:'https://m.media-amazon.com/images/I/41hVjSst7AL.jpg',
                        description:'Aprendiendo lo nuevo de Angular 9, todas las nuevas funcionalidades actualizadas 2020'
                    },
                    {
                        autor: 'Moises Macero',
                        name:'Spring Boot',
                        image:'https://www.consultorjava.com/wp/wp-content/uploads/2018/05/Learn-Microservices-with-Spring-Boot.jpg',
                        description:'Aprendiendo a construir microservicios con Sprin Boot y RabbitMQ'
                    },
                    {
                        autor: 'Pablo Neruda',
                        name:'Canto General',
                        image:'https://cloud10.todocoleccion.online/libros-segunda-mano-poesia/tc/2017/08/11/16/95357079.jpg',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                    },
                    {
                        autor: 'Gabriel Garcia Marquez',
                        name:'Cien años de Soledad',
                        image:'https://http2.mlstatic.com/cien-anos-de-soledad-garcia-marquez-alfaguara-D_NQ_NP_627111-MCO20493262727_112015-F.jpg',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                    },
                    {
                        autor: 'Juan Lechin',
                        name:'La gula del picaflor',
                        image:'https://images-na.ssl-images-amazon.com/images/I/71qi4Kz80GL.jpg',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                    },
                    {
                        autor: 'og Mandino',
                        name:'Jesus y el tercer dia',
                        image:'https://images.gr-assets.com/books/1348461390l/942053.jpg',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                    },
                    {
                        autor: 'Pablo Neruda',
                        name:'Poema 20',
                        image:'https://i.pinimg.com/originals/6e/eb/b6/6eebb65f9e81e0213b4cff4ad9f2fa19.jpg',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                    },
                    {
                        autor: 'Dante Alighieri',
                        name:'Divine Comedy',
                        image:'https://http2.mlstatic.com/divina-comedia-dante-alighieri-pluton-D_NQ_NP_20287-MCO20186565015_102014-F.jpg',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                    }
                ]

                this.model.insertMany(courses,(e:any,data:any)=>{
                    console.log(e)
                    console.log(data)
                })

            }            
        });
    }
}