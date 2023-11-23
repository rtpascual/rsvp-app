import GuestUpdateForm from "@/ui-components/GuestUpdateForm";
import { Flex, Button } from "@aws-amplify/ui-react";
import { useRouter } from "next/router"



export default function GuestEditForm() {
    const router = useRouter();
    const guestId = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;

    return (
        <Flex
        direction='column'
        gap='1rem'
    >
        <Flex><Button onClick={() => router.back()}>Back</Button></Flex>
        <GuestUpdateForm
            id={guestId}
            onSuccess={() => router.push('/')}
            overrides={{ rsvp: { label: 'RSVP' }}}
        />
    </Flex>
    )
}