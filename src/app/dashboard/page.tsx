import Card from "../components/card"

const DUMMY_POSTS = [
    {
        id: 1,
        title: "Booked",
        value: "120"
    },
    {
        id: 2,
        title: "Pending",
        value: "20"
    },
    {
        id: 3,
        title: "Available",
        value: "50"
    },
]

export default function dashboard() {
    return (
        <>        
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {DUMMY_POSTS?.map((post:any) => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
        </>
    )
}