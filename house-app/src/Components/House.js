import React from "react";
import { NewRoomForm } from './NewRoomForm';

const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';


export const House = (props) => {
    const { house, updateHouse } = props;

//*CAN'T GET THE POST TO WORK */

    //      post = async () => {
    //     const res = await fetch(`${HOUSES_ENDPOINT}`, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             name: 'Test House'
    //     })
    // })};

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }
    
    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});

const rooms = () => (
    <ul>
        {house.rooms.map((room, index) => (
            <li key={index}>
                <label> {`${room.name} Area: ${room.area}`}</label>
                <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
            </li>
        ))}
    </ul>
);

return (
    <div> 
        <h1>{house.name}</h1>
        {
            rooms({ rooms, houseID: house._id, deleteRoom})
        }
        <NewRoomForm addNewRoom={addNewRoom} />
    </div>
);
    };