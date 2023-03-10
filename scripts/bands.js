import { getBands, getVenues, getBookings } from "./database.js"

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

const findBookingsByBands = (bandId) => { 
    
    const matchingBandObjects = []

    for (const bandObject of bookings) {
        if (bandObject.bandId === parseInt(bandId)) {
            matchingBandObjects.push(bandObject)
        }
    }
    
    return matchingBandObjects
}

const assignedVenues = (objectsJustFound) => {

    let venueString  = ""

    for (const matchingObject of objectsJustFound) {
        for (const venue of venues) {
            if(venue.id === matchingObject.venueId) {
                venueString += ` ${venue.name} `
            }
        }
    }

    return venueString
}

document.addEventListener(
    "click",
    (clickEvent) => {
     
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("band")) {

            const [, bandId] = itemClicked.id.split("--")

            for (const band of bands) {

                if (band.id === parseInt(bandId)) {

                    const matchingObjects = findBookingsByBands(bandId)
                    
                    const stringListOfVenues = assignedVenues(matchingObjects)
                    
                    window.alert(`${band.name} is playing at ${stringListOfVenues}`)
                }
            }
        }
    }
)

export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}