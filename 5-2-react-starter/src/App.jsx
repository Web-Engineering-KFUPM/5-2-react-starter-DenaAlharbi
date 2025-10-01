import './App.css'
import StudentCard from "./components/StudentCard"
function App() {
    return (
        <div className="app">
            <header className="dashboard-header">
                <h1>Student Information Dashboard</h1>
                <p>View and manage student details</p>
            </header>

            <main className="dashboard-main">
                <div className="cards-container">

                    <div>
                        <h1>Student Info</h1>
                        <StudentCard name="Dena Alharbi" id="2022505060" Department="Software Engineering"/>
                        <StudentCard name="Dena Alharthi" id="202256599" Department="Chemical Engineering"/>

                    </div>

                </div>
            </main>
        </div>
    )
}

export default App

