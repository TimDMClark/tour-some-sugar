const database = {
    venues: [{
        id: 1,
        name: "Step Up, Stand Out",
        address: "1800 Boulevard Way",
        squareFoot: 6000,
        maxOccupancy: 434,
    }, {
        id:2,
        name: "Sloppy Sally's",
        address: "220 Slopshop Lane",
        squareFoot: 2400,
        maxOccupancy: 95,
    }, {
        id: 3,
        name: "Jumper's Ball",
        address: "42 Jump Street",
        squareFoot: 3600,
        maxOccupancy: 180,
    }],
    bands: [{
        id: 1,
        name: "Solo Bolo",
        members: 1,
        genre: "Slam Poetry",
        formed: 2020,
    }, {
        id: 2,
        name: "The 3 Musty Beers",
        members: 3,
        genre: "Folk",
        formed: 1974,
    }, {
        id: 3,
        name: "Droopy Loops",
        members: 5,
        genre: "Electronic",
        formed: 2013,
    }],
    bookings: [{
        id: 1,
        venueId: 2,
        bandId: 2,
        timestamp: 1698728400000,
    }, {
        id: 4,
        venueId: 2,
        bandId: 1,
        timestamp: 1702443600000
    }, {
        id: 3,
        venueId: 3,
        bandId: 2,
        timestamp: 1721278800000,
    }, {
        id: 2,
        venueId: 1,
        bandId: 3,
        timestamp: 1762837200000,
    }]
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}