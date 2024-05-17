import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import homeStyles from '~/styles/home.css'
import MainNavigation from "~/components/MainNavigation";

export default function Index() {
  return (
    <main id="content">
          <h1>A better way to take notes</h1>
        <p>Note taking has reshaped with this app</p>
          <p id="cta">
            <Link to="/notes">Try it now</Link>
          </p>
    </main>
    );
  }
export const links: LinksFunction = () => {
return[ {rel: 'stylesheet', href: homeStyles}]  
}

