'use client';
import Container from "@/app/Components/Container";
import ListingHead from "@/app/Components/listings/ListingHead";
import ListingInfo from "@/app/Components/listings/ListingInfo";
import { categories } from "@/app/Components/navbar/Categories";
import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { useMemo } from "react";

interface ListingClientProps {
    reservations?: Reservation[];
    listing: SafeListing & { user: SafeUser};
    currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    currentUser
}) => {
    const category = useMemo(() => {
        if (typeof window !== 'undefined') {
            return categories.find((item) => item.label === listing.category);
        }
        return null; // Return a default value or handle the case where the code is running on the server-side(Thanks Chat)
    }, [listing.category]);
    
    return(
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap=6">
                    <ListingHead
                        title={listing.title}
                        imageSrc={listing.imageSrc}
                        locationValue={listing.locationValue}
                        id={listing.id}
                        currentUser={currentUser}
                    />
                    <div 
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-7
                            md:gap-10
                            mt-6
                        "
                    >
                        <ListingInfo
                            user={listing.user}
                            category={category}
                            description={listing.description}
                            roomCount={listing.roomCount}
                            guestCount={listing.guestCount}
                            bathroomCount={listing.bathroomCount}
                            locationValue={listing.locationValue}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ListingClient;