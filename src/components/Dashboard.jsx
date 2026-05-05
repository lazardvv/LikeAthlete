import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="dashboard-cards">
                <Link to="/overview" className="dashboard-card">
                    <h2>Overview</h2>
                    <p>Pregled statistike</p>
                </Link>
                <Link to="/savedexercises" className="dashboard-card">
                    <h2>Saved Exercises</h2>
                    <p>Sačuvane vježbe</p>
                </Link>
                <Link to="/reports" className="dashboard-card">
                    <h2>Reports</h2>
                    <p>Izvještaji i analize</p>
                </Link>
                <Link to="/users" className="dashboard-card">
                    <h2>Users</h2>
                    <p>Lista korisnika</p>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;