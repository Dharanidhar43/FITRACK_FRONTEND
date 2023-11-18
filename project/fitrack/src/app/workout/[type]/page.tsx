"use client"
import React from 'react'
import './workoutPage.css'
const page = () => {
    const [workout, setWorkout] = React.useState<any>(null)


    const getworkout = async () => {
        let data: any = {
            type: 'Chest',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            durationInMin: 30,
            exercises: [
                {
                    exercise: 'Dumbell Bench Press',
                    videoUrl: 'https://newlife.com.cy/wp-content/uploads/2019/11/16241301-Dumbbell-Reverse-Bench-Press_Chest_360-360x200.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                },
                {
                    exercise: 'Incline Bench Press',
                    videoUrl: 'https://newlife.com.cy/wp-content/uploads/2019/11/00471301-Barbell-Incline-Bench-Press_Chest_360-360x200.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'

                },
                {
                    exercise: 'Decline Bench Press',
                    videoUrl: 'https://newlife.com.cy/wp-content/uploads/2019/11/00331301-Barbell-Decline-Bench-Press_Chest_360-360x200.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'

                },
                {
                    exercise: 'Stability ball push-up',
                    videoUrl: 'https://newlife.com.cy/wp-content/uploads/2018/12/06551301-Push-up-on-stability-ball_Chest_360.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                }
            ]
        }

        setWorkout(data)
    }

    React.useEffect(() => {
        getworkout()
    }, [])
    return (
        <div className='workout'>
            <h1 className='mainhead1'> {workout?.type} Workout</h1>
            <div className='workout__exercises'>
                {
                    workout?.exercises.map((item: any, index: number)=>{
                        return (
                            <div className={
                                index % 2 === 0 ? 'workout__exercise' : 'workout__exercise workout__exercise--reverse'
                            }>
                                <h3>{index+1}</h3>
                                <div className='workout__exercise__image'>
                                    <img src={item.videoUrl} alt="" />
                                </div>
                                <div className='workout__exercise__content'>
                                    <h2>{item.exercise}</h2>
                                    <span>{item.sets} sets X {item.reps} reps</span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default page