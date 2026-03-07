const page = async ({ params }) => {
    const { Id } = await params;

    return <div>page ProductID:{Id}</div>
}

export default page;