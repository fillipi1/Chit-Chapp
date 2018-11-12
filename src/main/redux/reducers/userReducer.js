import indiana from '../../components/pictures/indiana.jpg';
import artifact1 from '../../components/pictures/artifact1.jpg';
import artifact2 from '../../components/pictures/artifact2.jpg';
import artifact3 from '../../components/pictures/artifact3.jpg';
import artifact4 from '../../components/pictures/artifact4.jpg';


const users = [
    {
    id: 1,
    avatar: indiana ,
    name: 'Indiana jones' ,
    recentMessage: '',
    newMessage: [],
    messages: [{text:"wassup"}],
    time: '2:40 AM',
    active: '1h ago',
    badge: 0,
    chatId: "-LQqGKCHLrBnhlE1oZWQ",
    phone: '(+1 510 334 2286)',
    img: [{img:artifact1},{img:artifact2}, {img:artifact3},{img:artifact4}]
    },
    
];

    export default function leftPanelReducer(state = users, action){
        return state;
    }
