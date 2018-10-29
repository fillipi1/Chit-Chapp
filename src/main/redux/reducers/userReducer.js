import elon from '../../components/pictures/elon.jpg';
import pek from '../../components/pictures/pek.jpg';
import indiana from '../../components/pictures/indiana.jpg';
import yoshi from '../../components/pictures/yoshi.jpg';
import jesus from '../../components/pictures/jesus.jpg';
import buddha from '../../components/pictures/Budha.jpg';
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
import jesus1 from '../../components/pictures/jesus1.jpg';
import jesus2 from '../../components/pictures/jesus2.jpg';
import buddha1 from '../../components/pictures/buddha1.jpg';
import buddha2 from '../../components/pictures/buddha2.jpg';
import buddha3 from '../../components/pictures/buddha3.jpg';
import elon1 from '../../components/pictures/elon1.jpg';
import elon2 from '../../components/pictures/elon2.jpg';
import elon3 from '../../components/pictures/elon3.jpg';
// import firebase from '../../firebase';

// var messagesRef = firebase.database().ref('received messages');
// messagesRef.on('value', data => {
//     console.log(Object.keys(data.val()).map(x => data.val()[x].incomingText).pop())
//   var messages = (Object.keys(data.val()).map(x => data.val()[x].incomingText).pop());
//  return messages;
// })
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
        id: 4, 
        avatar: elon3,
        name: 'A.I' ,
        recentMessage: '',
        message: 'Wana come over to my place for supper?',
        newMessage: [],
        time: '11:11 AM',
        active: '2 millenniums ago',
        badge: 6,
        phone: '(+12 510 334 6789)',
        img: [{img:jesus1},{img:jesus2}]

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
        {
        id:6,
        avatar: buddha ,
        name: 'Buddha' ,
        message: 'OMMMMMMM',
        newMessage: [],
        time: '1:30 PM',
        active: ' 3 thousand years ago',
        badge: 1,
        phone: '(+12 202 555 9098)',
        img: [{img:buddha1},{img:buddha2}, {img:buddha3}]
        },
        {
        id: 7,    
        avatar: elon3,
        name:'A.I' ,
        message: '1001101010101',
        newMessage: [],
        time: '6:30 PM',
        active: '2h ago',
        badge: 0,
        phone: '(+12 787 222 9943)',
        img: [{img:elon1},{img:elon2}, {img:elon3}]
        },
        {
        id: 8,    
        avatar: yoshi1,
        name:'Bean' ,
        message: 'Where is Mario?!',
        newMessage: [],
        time: '6:30 PM',
        active: '2h ago',
        badge: 0,
        phone: '(+12 787 222 9943)',
        img: [{img:elon1},{img:elon2}, {img:elon3}]
        },
        {
        id: 9,    
        avatar: artifact2,
        name:'Sacred Skull' ,
        message: 'We are one with God',
        newMessage: [],
        time: '6:30 PM',
        active: '2h ago',
        phone: '(+12 787 222 9943)',
        img: [{img:elon1},{img:elon2}, {img:elon3}]
        },
];

    export default function leftPanelReducer(state = users, action){
        return state;
    }
