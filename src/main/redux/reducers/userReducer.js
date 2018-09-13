import elon from '../../components/pictures/elon.jpg';
import pek from '../../components/pictures/pek.jpg';
import indiana from '../../components/pictures/indiana.jpg';
import yoshi from '../../components/pictures/yoshi.jpg';
import jesus from '../../components/pictures/jesus.jpg';
import buddha from '../../components/pictures/Budha.jpg'

 const users = [

        {
        id: 1,
        avatar: indiana ,
        name: 'Indiana jones' ,
        message: "No dude! wrong Harsion Ford! this is Indiana Jones",
        time: '2:40 AM',
        active: '1h ago',
        chat1: "have the crystal skull!!!",
        chat2: "Nah uh! Did you find chewbaca too?!",
        chat3: "No dude! wrong Harsion Ford! this is Indiana Jones",
        chat4: "O right my bad...may the force be with you",
        chat5: "By the way Luke is a terrible actor lol!",
        badge: 1,
        phone: '(+12 510 334 5683)'

        },

        {
        id: 2,
        avatar: pek,
        name: 'Pek Pongpaet' ,
        message: "It taste like lemon grass",
        time: '12:19 PM',
        active: '5m ago',
        chat1: 'Never buy lemon bubly again',
        chat2: "Why not?",
        chat3: "It taste like lemon grass",
        chat4: "I Love lemon grass",
        chat5: "It's like my favorite flavor",
        badge: 3,
        phone: '(+12 228 101 1343)'

        },

        {
        id: 3,    
        avatar: elon,
        name:'Elon Musk' ,
        message: 'THE ROBOTS ARE COMING!!',
        time: '6:30 PM',
        active: '2h ago',
        chat1: "1001101010101",
        chat2: "what...?",
        chat3: 'THE ROBOTS ARE COMING!!',
        chat4: "was that suppose to be morse code or seomthing?",
        chat5: "You've been soking too much weed now that you're friends with joe rogan",
        badge: 0,
        phone: '(+12 787 222 9943)'

        },

        {
        id: 4, 
        avatar: jesus,
        name: 'Jesus Christ' ,
        message: 'Wana come over to my place for supper?',
        time: '11:11 AM',
        active: '2 millenniums ago',
        chat1: 'Yo whats good homie',
        chat2: "Not much bro, what you got going on?",
        chat3: "getting ready for passover, Wana come over to my place for supper?",
        chat4: "Sure!",
        chat5: "As long as Judas doesn't go, that guy is such a douche, idk why you let him hang out with you",
        badge: 6,
        phone: '(+12 510 334 6789)'

        },
        {
        id: 5,
        avatar: yoshi ,
        name: 'Yoshi' ,
        message: 'Can I get a treatment, my back hurts. Mario has gotten so fat!',
        time: '5:30 PM',
        active: '1h ago',
        chat1: "Yo whats up Luigi",
        chat2: "Sup Dino",
        chat3: "Can I get a treatment, my back hurts. Mario has gotten so fat!",
        chat4: "Sure come by around 5",
        chat5: "Must be all those mushrooms he's eating",
        badge: 0,
        phone: '(+12 202 777 1123)'

            },
        {
        id:6,
        avatar: buddha ,
        name: 'Buddha' ,
        message: 'OMMMMMMM',
        time: '1:30 PM',
        active: ' 3 thousand years ago',
        chat1: "Have you meditated today?",
        chat2: 'No not yet',
        chat3: "OMMMMM!",
        chat4: "O jeez...",
        chat5: "I can't ommm over text",
        badge: 1,
        phone: '(+12 202 555 9098)'

            },
            
    
    ];

    export default function leftPanelReducer(state = users, action){
        return state;
    }
