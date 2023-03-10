import { getVenues, getBands, getBookings } from "./database.js"


const venues = getVenues()
const bands = getBands()
const bookings = getBookings()


const findVenue = (bookings, allBookings) => {
    let currentVenue = null

    for (const venue of allBookings) {
        if (venue.id === bookings.venueId) {
            currentVenue = venue
        }
    }

    return currentVenue
}

const findBand = (bookings, allBookings) => {
    let currentBand = null

    for (const band of allBookings) {
        if (band.id === bookings.bandId) {
            currentBand = band
        }
    }

    return currentBand
}

const findBandInfo = (bookings, allBookings) => {
    let currentBandInfo = ""

    for (const band of allBookings) {
        if (band.id === bookings.bandId) {
            currentBandInfo += `Name: ${band.name}\nGenre: ${band.genre}\nMembers: ${band.members}\nFormed: ${band.formed}`
        }
    }

    return currentBandInfo
}

document.addEventListener(
    "click",
    (clickEvent) => {
     
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("booking")) {

            const [, bookingId] = itemClicked.id.split("--")

            for (const booking of bookings) {

                if (booking.id === parseInt(bookingId)) {

                    const bandInfo = findBandInfo(booking, bands)
                    
                    window.alert(`${bandInfo}`)
                }
            }
        }
    }
)

export const Bookings = () => {
    let html = "<ul>"

    for (const booking of bookings) {
        const venue = findVenue(booking, venues)
        const band = findBand(booking, bands)

        html += `<li id ="booking--${booking.id}">${band.name} is performing at ${venue.name} on ${new Date(booking.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}