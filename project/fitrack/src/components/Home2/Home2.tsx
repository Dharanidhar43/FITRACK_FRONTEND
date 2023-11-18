import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home2.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const Home2 = () => {
  const [workouts, setWorkouts] = React.useState<any[] | null>(null)

  const getWorkouts = async() => {
    let data: any = [
      {
        type: 'Chest',
        imageUrl: 'https://imgs.search.brave.com/wCNeNyIAgHO_lv_IZL2uGFPYIU8zPToLTQt43toHlhA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzEwLzYwLzkz/LzM2MF9GXzExMDYw/OTM1N182SFpvTjJp/TkVSWjJtNGJBeTc3/UFJOWlhOZXBrRzhC/Qy5qcGc',
        durationInMin: 30
      },
      {
        type: 'Shoulder',
        imageUrl: 'https://img.freepik.com/free-photo/back-view-muscled-man-lifting-up-weights_23-2148418214.jpg?size=626&ext=jpg',
        durationInMin: 40
      },
      {
        type: 'Back',
        imageUrl: 'https://media.istockphoto.com/id/1679800838/photo/close-up-of-feet-sportman-runner-running-on-treadmill-in-fitness-club-cardio-workout-healthy.webp?b=1&s=170667a&w=0&k=20&c=Z6BwvSQfMaJ8rAET68ziH6d5T1wwrbU-1Sg7BE3vQjU=',
        durationInMin: 70
      },
      {
        type: 'Biceps',
        imageUrl: 'https://imgs.search.brave.com/PQN3suiyxreQAvE5ifrixcmItSSTqlK4XozdKmaGkLU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NTA2NDM3L3Bob3Rv/L2Nsb3NlLXVwLW9m/LWJpY2VwLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1MOVha/YnR5ZXUzQ21DZW5h/TTQ1LVRudU54bVV4/VGdwQWtoVjBSRXl2/UDNVPQ',
        durationInMin: 50
      },
      {
        type: 'Triceps',
        imageUrl: 'https://imgs.search.brave.com/9h8K9DlK-tJ4by-gzE6uEk75wHTgBmUyuB7Y99FLTOw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzIzLzIyLzc4/LzM2MF9GXzEyMzIy/NzgzMF9aOEdoQTBE/VnpwOWM0SndsdXFC/VkRick4ybUFxMHNq/US5qcGc',
        durationInMin: 60
      },
      {
        type: 'Legs',
        imageUrl: 'https://imgs.search.brave.com/IPC8pEf8mM67i62YiB9I3gdWIGnmeNVUDgd2UyjbSmY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdnNocmVk/LmNvbS9ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzA2/L2x1bmdlcy13aXRo/LWJhcmJlbGxzLmpw/Zz9yZXNpemU9NjI1/LDQxNyZzc2w9MQ',
        durationInMin: 80
      },
      {
        type: 'Cardio',
        imageUrl: 'https://imgs.search.brave.com/uWsncP-TPtciIX_LRIaccJ2NGHmvOVMSXsTheTKJYd8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVyeXdlbGxmaXQu/Y29tL3RobWIvWS1w/VVBUZ1cwblFPd2ZC/ejdhaFZSYVRNSEJn/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/ZXZlcnl0aGluZy15/b3UtbmVlZC10by1r/bm93LWFib3V0LWNh/cmRpby0xMjI5NTUz/LThlMDg4NDdmZmNm/YjQ4NDViMjljMDhm/YTI3ZTc2ZDMyLmpw/Zw',
        durationInMin: 100
      },
      {
        type: 'Forearms',
        imageUrl: 'https://images.unsplash.com/photo-1591940742878-13aba4b7a34e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZWFybXxlbnwwfHwwfHx8MA%3D%3D',
        durationInMin: 110
      }
    ]
    setWorkouts(data)
  }
  React.useEffect(() => {
    getWorkouts()
  }, [])

  return (
    <div>
      <h1 className='mainhead1'>FITRACK</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          workouts && workouts.map((item, index) =>{
            return(
              <SwiperSlide key={index} >
                <div className='swiper-slide'
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                  onClick={() => {
                    window.location.href = `/workout/${item.type}`
                  }}
                  
                >
                  <div className='swiper-slide-content'>
                    <h2>{item.type}</h2>
                    <p>{item.durationInMin} min</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper> 
    </div>
  )
}

export default Home2