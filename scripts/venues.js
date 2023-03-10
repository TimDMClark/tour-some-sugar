import { getVenues, getBands, getBookings } from "./database.js"

const venues = getVenues()
const bookings = getBookings()

const findBookingsByVenues = (venueId) => { 
    
    const matchingVenueObjects = []

    for (const venueObject of bookings) {
        if (venueObject.venueId === parseInt(venueId)) {
            matchingVenueObjects.push(venueObject)
        }
    }
    
    return matchingVenueObjects
}

const assignedBand = (objectsJustFound) => {
    
    const bands = getBands()

    let bandString  = ""

    for (const matchingObject of objectsJustFound) {
        for (const band of bands) {
            if(band.id === matchingObject.bandId) {
                bandString += ` ${band.name} `
            }
        }
    }

    return bandString
}

document.addEventListener(
    "click",
    (clickEvent) => {
     
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("venue")) {

            const [, venueId] = itemClicked.id.split("--")

            for (const venue of venues) {

                if (venue.id === parseInt(venueId)) {

                    const matchingObjects = findBookingsByVenues(venueId)
                    
                    const stringListOfBands = assignedBand(matchingObjects)
                    
                    window.alert(`${venue.name} is hosting ${stringListOfBands}`)
                }
            }
        }
    }
)

export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}