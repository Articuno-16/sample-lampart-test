import { Icon1, Icon2, Icon3, Icon4 } from './Images'
import { useState } from 'react'

const items = [
    {
        id: 0,
        img: Icon1,
        title: 'AAAA',
        decription: 'Sit laboris fugiat cupidatat minim occaecat dolor amet eu sit ipsum magna.'
    },
    {
        id: 1,
        img: Icon2,
        title: 'DDDD',
        decription: 'Dolore enim voluptate labore anim mollit.'
    },
    {
        id: 2,
        img: Icon3,
        title: 'CCCC',
        decription: 'Consectetur et Lorem culpa adipisicing magna culpa proident irure occaecat.'
    },
    {
        id: 3,
        img: Icon4,
        title: 'BBBB',
        decription: 'Adipisicing ullamco quis labore in.'
    }
]



function Items({ item }) {
    const content = (text) =>{
        if (text.length <= 60)
            return text;
        text = text.slice(0, 60);
        return text + "...";
    }

    return (
        <div className="container-item">
            <img src={item.img} alt={item.title} className="icon"></img>
            <h4>{item.title}</h4>
            <p>{content(item.decription)}</p>
            <button className='readmore'>Read more</button>
            <div className='clear-float'></div>
        </div>
    )
}

function Services() {
    // console.log('...log from Services')
    const [active, setActive] = useState(0)

    return (
        <div className='row'>
            {items.map((item) =>
                <div 
                    className={active === item.id ? "active col-3 grid-item" : "col-3 grid-item"} 
                    key={item.id} 
                    onClick={() => setActive(item.id)}
                >
                    <Items item={item}/>
                </div>
            )}
            
        </div>
    )
}

export default Services