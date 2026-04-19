import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import ExploreAthletes from "./pages/ExploreAthletes";
import Overview from "./pages/Overview";
import SavedExercisess from "./pages/SavedExercises";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import Accounts from "./pages/Accounts";
import WorkoutCreator from "./pages/WorkoutCreator.jsx";
import Payments from "./pages/Payments";
import Refunds from "./pages/Refunds";
import Exercises from "./pages/Exercises";
import AthleteProfile from "./components/AthleteProfile";
import SavedExercises from "./pages/SavedExercises";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";
import ExerciseDetail from "./components/ExerciseDetail";
import Workout from "./pages/Workout";
import RequireAuth from "./routes/RequireAuth";
 
 
 const App = () => { 
 
   const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {/* Public routes */}
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        {/* Protected routes */}
        <Route element={<RequireAuth/>}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="exploreathletes" element={<ExploreAthletes />}/>
          <Route path="overview" element={<Overview />}/>
          <Route path="savedexercises" element={<SavedExercises />}/>
          <Route path="exercises" element={<Exercises />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="users" element={<Users />}/>
          <Route path="messages" element={<Messages />}/>
          <Route path="accounts" element={<Accounts />}/>
          <Route path="workoutcreator" element={<WorkoutCreator />}/>
          <Route path="payments" element={<Payments />}/>
          <Route path="refunds" element={<Refunds />}/>
          <Route path="athlete/:slug" element={<AthleteProfile />} />
          <Route path="dashboard" element={<Home />}/>
          <Route path="exercise/:id" element={<ExerciseDetail />} />
          <Route path="workout" element={<Workout />} />
        </Route>
      </Route>
    )
  )
 
 
  return (
    <AuthProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
};
 
 export default App;
