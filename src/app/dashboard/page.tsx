import Card from "@/app/components/dashboard/card";
import {DUMMY_POSTS} from "@/data/data";
import { lusitana } from '@/app/components/fonts';

export default function dashboard() {
    return (
        <>   
            <main>
                <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {DUMMY_POSTS?.map((post:any) => (
                        <Card key={post.id} post={post} />
                    ))}
                </div>
            </main>
        </>
    )
}