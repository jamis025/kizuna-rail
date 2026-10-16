import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    const allRoutes = await getAllRoutes();
    const seasons = await getListOfSeasons();
    const getSelectedFilter = (value, options) => {
        if (typeof value !== 'string' || value.toLowerCase() === 'all') {
            return undefined;
        }

        return options.find(option => option.toLowerCase() === value.toLowerCase());
    };
    const selectedRegion = getSelectedFilter(req.query.region, regions);
    const selectedSeason = getSelectedFilter(req.query.season, seasons);
    const routes = allRoutes.filter(route =>
        (!selectedRegion || route.region.toLowerCase() === selectedRegion.toLowerCase()) &&
        (!selectedSeason || route.bestSeason.toLowerCase() === selectedSeason.toLowerCase())
    );

    res.render('routes/list', {
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons,
        query: {
            region: selectedRegion,
            season: selectedSeason
        }
    });
};