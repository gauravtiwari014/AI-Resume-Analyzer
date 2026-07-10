function StatsCard({

title,

value

}){

return(

<div className="bg-white shadow rounded-xl p-6">

<h2>{title}</h2>

<h1 className="text-3xl">

{value}

</h1>

</div>

);

}

export default StatsCard;