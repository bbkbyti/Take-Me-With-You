

export const getTrips = async (req, res) => {
    try{
        const trips = await Trip.find({});
        res.json(todos);
    }catch(e){
        res.status(500).json({ error: e.message });
    }
};