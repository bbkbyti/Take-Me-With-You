

export const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find({});
        res.json(trips);
    } catch (e) {
        console.log( e.message);
        res.status(500).json({ error: e.message });
    }
};

export const createTrip = async (req, res) => {
    try {
        const trip = new Trip(req.body);
        await trip.save();
        res.status(201).json(trip);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getTrip = async (req, res) => {
    try {
        const { id } = req.params;
        const trip = await Trip.findById(id);
        if (trip) {
            res.json(trip);
        } else {
            res.status(404).json({ error: "Trip not found" });
        }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
