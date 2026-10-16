import { getRouteById, getSchedulesByRoute } from '../../models/model.js';
import { getMonthAbbreviation } from '../../includes/helpers.js';

export default async (req, res) => {
    const { routeId } = req.params;
    const details = await getRouteById(routeId);
    details.operatingMonths = details.operatingMonths.map(getMonthAbbreviation);
    details.schedules = await getSchedulesByRoute(routeId);
    if (details.schedules && Array.isArray(details.schedules)) {
        details.schedules = details.schedules.map(schedule => {
            return {
                ...schedule,
                month: getMonthAbbreviation(schedule.month) 
            };
        });
    }

    res.render('routes/details', {
        title: 'Route Details',
        details
    });
};