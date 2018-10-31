import elon from '../../components/pictures/elon.jpg';
import pek from '../../components/pictures/pek.jpg';
import indiana from '../../components/pictures/indiana.jpg';
import yoshi from '../../components/pictures/yoshi.jpg';
import yoshiworld from '../../components/pictures/yoshiworld.png';
import marioland from '../../components/pictures/marioland.jpg';
import artifact1 from '../../components/pictures/artifact1.jpg';
import yoshi1 from '../../components/pictures/yoshi2.jpg';
import yoshi2 from '../../components/pictures/yoshi.jpg';
import artifact2 from '../../components/pictures/artifact2.jpg';
import artifact3 from '../../components/pictures/artifact3.jpg';
import artifact4 from '../../components/pictures/artifact4.jpg';
import pek1 from '../../components/pictures/pek1.jpg';
import pek2 from '../../components/pictures/pek2.jpg';
import elon1 from '../../components/pictures/elon1.jpg';
import elon2 from '../../components/pictures/elon2.jpg';
import elon3 from '../../components/pictures/elon3.jpg';

 const users = [
        {
        id: 1,
        avatar: indiana ,
        name: 'Indiana jones' ,
        recentMessage: '',
        newMessage: [],
        message: '',
        time: '2:40 AM',
        active: '1h ago',
        badge: 1,
        phone: '(+1 510 334 2286)',
        img: [{img:artifact1},{img:artifact2}, {img:artifact3},{img:artifact4}]
        },
        {
        id: 2,
        avatar: pek,
        name: 'Pek Pongpaet' ,
        message: "It taste like lemon grass",
        recentMessage: '',
        newMessage: [],
        time: '12:19 PM',
        active: '5m ago',
        badge: 3,
        phone: '(+1 312 493 6881)',
        img: [{img:pek1},{img:pek2}]
        },
        {
        id: 3,    
        avatar: elon,
        name:'Meek' ,
        message: 'THE ROBOTS ARE COMING!!',
        recentMessage: '',
        newMessage: [],
        time: '6:30 PM',
        active: '2h ago',
        badge: 0,
        phone: '(+1 408 816 9237)',
        img: [{img:elon1},{img:elon2}, {img:elon3}]
        },
        {
        id: 5,
        avatar: yoshi ,
        name: 'Ida' ,
        recentMessage: '',
        message: 'Can I get a treatment, my back hurts. Mario has gotten so fat!',
        newMessage: [],
        time: '5:30 PM',
        active: '1h ago',
        badge: 0,
        phone: '(+1 650 245 5080)',
        img: [{img:yoshiworld},{img:marioland},{img:yoshi1}, {img:yoshi2}]
        },
];

    export default function leftPanelReducer(state = users, action){
        return state;
    }
