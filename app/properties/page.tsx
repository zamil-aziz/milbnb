import EmptyState from "../Components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient"

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        <EmptyState
            title="Unauthorized"
            subtitle="Please Login"
        />
    }

    const listings = await getListings({
        userId: currentUser?.id
    });

    if(listings.length === 0) {
        return(
            <EmptyState
                title="No properties found"
                subtitle="Looks like you have no properties."
            />
        )
    }

    return (
        <PropertiesClient
            listings={listings}
            currentUser={currentUser}
        />
    )
}

export default ReservationsPage;