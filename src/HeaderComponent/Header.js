import React from "react"
import './Header.css'

// export default function Header() {
//     return (<div>
//         <h1>Bidding Process for Spring Semester - SOM 23</h1>
//         <section id="navigation">
//             <a href="/rules">Rules</a>
//             <a href="https://docs.google.com/spreadsheets/d/1LNUo-Pp7n_oKu_24qlXLE2cMNpVvSa7E/edit?usp=share_link&ouid=100525523692143994751&rtpof=true&sd=true">Teaching Plan</a>
//             <a href="https://docs.google.com/document/d/1EGvf1TyY1p3FfmlcCmeTfmhvb4uvyjlG/edit?usp=share_link&ouid=100525523692143994751&rtpof=true&sd=true">Course Outlines</a>
//             <a href="https://docs.google.com/spreadsheets/d/1J1V38xx8WekU4sWymJLWlhS_OdGNCXJm/edit?usp=share_link&ouid=100525523692143994751&rtpof=true&sd=true">Time Table</a>
//         </section>
//     </div>)
// }

export default function Header() {
    return (<div>
        {/* <a href="https://front.codes/" class="logo" target="_blank">
            <img src="https://i.ibb.co/Pr7CQhn/picture.png" alt="picture" border="0"></img>
        </a> */}
        <h1>Bidding Process for Spring Semester - SOM 23</h1>
        <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
        <label for="menu-icon"></label>
        <nav class="nav">
            <ul class="pt-5">
                <li> <a href="/rules">Rules</a></li>
                <li><a href="https://docs.google.com/spreadsheets/d/1LNUo-Pp7n_oKu_24qlXLE2cMNpVvSa7E/edit?usp=share_link&ouid=100525523692143994751&rtpof=true&sd=true">Teaching Plan</a></li>
                <li><a href="https://docs.google.com/document/d/1EGvf1TyY1p3FfmlcCmeTfmhvb4uvyjlG/edit?usp=share_link&ouid=100525523692143994751&rtpof=true&sd=true">Course Outlines</a></li>
                <li><a href="https://docs.google.com/spreadsheets/d/1J1V38xx8WekU4sWymJLWlhS_OdGNCXJm/edit?usp=share_link&ouid=100525523692143994751&rtpof=true&sd=true">Time Table</a></li>
            </ul>
        </nav>

        {/* <div class="section-center">
            <h1 class="mb-0">Bidding Process for Spring Semester - SOM 23</h1>
        </div> */}
    </div>)
}


