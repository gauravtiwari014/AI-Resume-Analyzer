import {
Home,
Upload,
History,
User
} from "lucide-react";

import {
Link
} from "react-router-dom";

function Sidebar() {

return(

<div className="w-64 bg-gray-900 text-white">

<h1 className="text-2xl p-5">

AI Resume

</h1>

<Link to="/dashboard">

<Home/>

Dashboard

</Link>

<Link to="/upload">

<Upload/>

Upload

</Link>

<Link to="/history">

<History/>

History

</Link>

<Link to="/profile">

<User/>

Profile

</Link>

</div>

);

}

export default Sidebar;