import Link from "next/link";
import { useEffect  } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router global(-1)
            router.push('/');
        }, 3000)
    }, [])
    return ( 
        <div className="not-found">
            <h1>Oooops!!!!!</h1>
            <h2>Page not found</h2>
            <p>Go back to   
                <Link href="/"> 
                    <a> <span>Home</span> </a> 
                </Link> 
            </p>
        </div>
     );
}
 
export default NotFound;