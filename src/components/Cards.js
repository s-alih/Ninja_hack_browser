import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>Check Out This Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon jungle'
                        label='Adventure'
                        path='/services'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
