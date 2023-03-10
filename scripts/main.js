import { Bookings } from "./bookings.js"
import { Bands } from "./bands.js"
import { Venues } from "./venues.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar on Me</h1>
<article class="details">
    <section class="detail--column list details__bookings">
        <h2>Bookings</h2>
        ${Bookings()}
    </section>
</article>
<article class="details">
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
