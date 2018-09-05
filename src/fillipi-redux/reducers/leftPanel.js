import elon from './pictures/elon.jpg';
import pek from './pictures/pek.jpg';
import indiana from './pictures/indiana.jpg';
import yoshi from './pictures/yoshi.jpg';
import jesus from './pictures/jesus.jpg';

 const users = [

        {
        avatar: indiana ,
        name: 'Indian jones' ,
        message: 'have the crystal skull!!!',
        time: '2:40 AM',
        active: '1 hour ago',
        chat: "1",

        },

        {
        avatar: pek,
        name: 'Pek Pongpaet' ,
        message: 'Never buy lemon bubly again',
        time: '12:19 PM',
        active: '4 hour ago',
        chat: "2",

        },

        {
        avatar: elon,
        name:'Elon Musk' ,
        message: 'THE ROBOTS ARE COMING!!',
        time: '6:30 PM',
        active: '2 hour ago',
        chat: "3",

        },

        {
        avatar: jesus,
        name: 'Jesus Christ' ,
        message: 'Wana come over to my place for supper?',
        time: '11:11 AM',
        active: '2 centuries ago',
        chat: "4",

        },
        {
        avatar: yoshi ,
        name: 'Yoshi' ,
        message: 'Can I get a treatment, my back hurts. Mario has gotten so fat!',
        time: '5:30 PM',
        active: '1 hour ago',
        chat: "5",

        },
    
    ];

    export default function leftPanelReducer(state = users, action){
        return state;
    }
