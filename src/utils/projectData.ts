import pokeApp from "@/public/static/img/projectsImgs/poke-app.png"
import techHub from "@/public/static/img/projectsImgs/tech-hub.png"
import burguerNow from "@/public/static/img/projectsImgs/burguer-now.png"
import vemSaude from "@/public/static/img/projectsImgs/vem-saude.png"
import companies from "@/public/static/img/projectsImgs/2023-04-29 (1).png"
import contacts from "@/public/static/img/projectsImgs/contacts.png"
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa"
import { SiJavascript, SiStyledcomponents, SiTypescript, SiNextdotjs, SiTailwindcss, SiNestjs } from "react-icons/si"


export const projects = [
    {id: "pokeapp", img:pokeApp, name: "PokeApp", description:"", gitLink:"https://github.com/PauloMorenoD/PokeApp", appLink:"https://pokeapp-paulomorenod.vercel.app", techs:[
        {title:"javascript",img: SiJavascript},
        {title:"HTML5",img: FaHtml5},
        {title:"CSS3", img: FaCss3},
    ]},
    {id:"vemsaude",img:vemSaude, name: "Vem Saude", description:"", gitLink:"https://github.com/PauloMorenoD/vem-saude-m3", appLink:"https://vem-saude.vercel.app", techs:[
        {title:"react", img: FaReact},
        {title:"typescript", img: SiTypescript},
        {title:"styled-components", img: SiStyledcomponents},
    ]},
    {id:"burguernow",img:burguerNow, name: "burguerNow", description:"", gitLink:"https://github.com/PauloMorenoD/hamburgueria-paulomorenod", appLink:"https://hamburgueria-paulomorenod-paulomorenod.vercel.app/", techs:[
        {title:"react", img: FaReact},
        {title:"typescript",img: SiTypescript},
        {title:"styled-components", img: SiStyledcomponents},
    ]},
    {id:"techub",img:techHub, name: "Tech Hub", description:"", gitLink:"https://github.com/PauloMorenoD/tech-hub-paulo-moreno-d", appLink:"https://tech-hub-paulo-moreno-d-paulomorenod.vercel.app" , techs:[
        {title:"react", img: FaReact},
        {title:"styled-components", img: SiStyledcomponents},
    ]},
    {id:"companies",img:companies, name: "Companies", description:"", gitLink:"https://github.com/PauloMorenoD/project-paulomoreno-frontend", appLink:"https://project-companies-paulomorenod.vercel.app" , techs:[
        {title:"react", img: FaReact},
        {title:"typescript", img: SiTypescript},
        {title:"styled-components", img: SiStyledcomponents},
    ]},
    {id:"companies",img:contacts, name: "Contacts", description:"", gitLink:"https://github.com/PauloMorenoD/projeto-fullstack-frontend", appLink:"" , techs:[
        {title:"Nest.js", img: SiNestjs},
        {title:"Next.js", img: SiNextdotjs},
        {title:"typescript", img: SiTypescript},
        {title:"styled-components", img: SiTailwindcss},
    ]}

]