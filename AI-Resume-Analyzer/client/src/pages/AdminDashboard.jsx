import {useEffect,useState} from "react";

import axios from "axios";

function AdminDashboard(){

const[stats,setStats]=useState({});

useEffect(()=>{

load();

},[]);

const load=async()=>{

const token=
JSON.parse(
localStorage.getItem("user")
).token;

const res=
await axios.get(

"http://localhost:5000/api/admin/dashboard",

{

headers:{

Authorization:

`Bearer ${token}`

}

}

);

setStats(res.data);

}

return(

<div>

<h1>

Admin Dashboard

</h1>

<h2>

Users

{stats.users}

</h2>

<h2>

Resumes

{stats.resumes}

</h2>

<h2>

Analysis

{stats.analysis}

</h2>

</div>

);

}

export default AdminDashboard;