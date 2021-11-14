import User from '../user/';
import { useState, useEffect } from 'react';
import './index.css'

function Users() {
    const [usersData, setUsersData] = useState([]);
    useEffect(async () => {
        const response = await fetch("https://dummyapi.io/data/v1/user", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'app-id': '6190ddd173d8c31f47931446'
            }
        });

        const result = await response.json();
        setUsersData(result.data);
        alert(JSON.stringify(result.data));
    }, []);

    const ud = usersData.map(({id, title, firstName, lastName, picture}) => (
        <User key={id} id={id} title={title} firstName={firstName} lastName={lastName} picture={picture} />
    ));

    return (
        <div className="users">
            {ud}
        </div>
    );
}

export default Users;
