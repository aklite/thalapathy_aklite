import Image from "next/image"
import Link from "next/link"
import { HighlightOnHover } from "../components/HighlightOnHover"
import Layout from "../components/Layout"

export default function oops() {
    return (
        <div>
            <Layout>
                <div className="text-center my-28 ">
                <Image
            src="/nervous.png"
            width={64}
            height={64}
            priority={true}
            alt=""
         /> <p>Uh oh. It looks like this page isn't ready yet.</p>
                    <HighlightOnHover>
                   
                        <Link href="/" legacyBehavior>
                            <a className="font-medium">Go back</a>
                        </Link>
                    </HighlightOnHover>
                </div>
            </Layout>
        </div>
    )
}