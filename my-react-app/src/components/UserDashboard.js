import React from 'react';
import UserCard from './UserCard';
import users from '../data/users';

const UserDashboard = () => {
    return (
        <div>
            <h1>User Dashboard</h1>
            <div>
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UserDashboard;