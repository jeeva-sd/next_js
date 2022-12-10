import { AiTwotoneFire, AiFillHome } from 'react-icons/ai';
import { BsFillTelephoneFill, BsFillPersonFill } from 'react-icons/bs';

const prod = true;
export const host = prod ? 'https://startling-fairy-195a44.netlify.app' : 'http://localhost:3000';

// https://jee6.vercel.app 
export const homeTabs = [
    {
        id: 'loaxsa',
        title: 'Home',
        path: '/',
        icon: <AiFillHome />
    },
    {
        id: 'loaxsa',
        title: 'Trending',
        path: '/trending',
        icon: <AiTwotoneFire />
    },
    {
        id: 'sedssa',
        title: 'About',
        path: '/p/about',
        icon: <BsFillPersonFill />
    },
    {
        id: 'assaa',
        title: 'Contact',
        path: '/p/contact',
        icon: <BsFillTelephoneFill />
    }
];