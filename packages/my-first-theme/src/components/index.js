import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"


const Root = ({state}) => {
    const data = state.source.get(state.router.link)
    
    return (
        <>
        <h1>Frontity Workshop</h1>
        <p>current url: {state.router.link}</p>

        <nav>
            <Link link='/'>Home</Link><br />
            <Link link='/page/2'>More Posts</Link><br />
            <Link link='/about-us'>About Us</Link><br />
        </nav>
        <hr />
        <main>
            <Switch>
                <List when={data.isArchive} />
                <div when={data.isPost}>post</div>
                <div when={data.isPage}>page</div>
            </Switch>
        </main>


        </>
    )
}

export default connect(Root)