import React from 'react'

const page = async ({ params }) => {
    const { data } = await params;
    return (
        <div>
            <h1>Docs Page</h1>
            {data?.join('/')}
        </div> 
    )
}

export default page
//"data" this is teh name of tehe folder as well as the name of the object 


//[...]this acts as a catch all routeswhich meansd that anything after /docs/{anything here} ka data can be accessed using params
//now /docs will give an 404 error
//[[...]] comes in here it is called as the optional catch all routes which helps in giving data on the docs page as well