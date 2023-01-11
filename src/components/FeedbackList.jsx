
import FeedbackItem from './FeedbackItem'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    return (
        <div className='feedback-list'>
                {feedback.map((item) => (
                    <FeedbackItem key={item.id} item={item} />
                ))}
        </div>
    )
    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item) => (
    //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    //         ))}
    //     </div>
    // )
}


export default FeedbackList