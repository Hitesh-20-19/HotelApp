import React from 'react'
 import RoomsFilter from './RoomFilter.js'
 import RoomsList from './RoomList.js'
 import {withRoomConsumer} from '../Context'
 import Loading from './Loading'

 function RoomContainer({context}){
    const {loading , sortedRooms , rooms} = context ;
    if (loading){
                        return <Loading />
                    }
                    
                    return (
                        <>
                            <RoomsFilter rooms ={rooms} />
                            <RoomsList rooms ={sortedRooms}/>
                        </>
                    )
 }

 export default withRoomConsumer(RoomContainer)










// import React from 'react'
// import RoomsFilter from './RoomFilter.js'
// import RoomsList from './RoomList.js'
// import {RoomConsumer} from '../Context'
// import Loading from './Loading'

// const RoomsContainer = () => {
//     return(
//     <RoomConsumer>

//         {value => {
//             const {loading , sortedRooms , rooms } = value

//             if (loading){
//                 return <Loading />
//             }
            
//             return (
//                 <div>
//                     hello from rooms containner 
//                     <RoomsFilter rooms ={rooms} />
//                     <RoomsList rooms ={sortedRooms}/>
//                 </div>
//             )

//         }}

//     </RoomConsumer>
//     );
    
// }

// export default RoomsContainer
