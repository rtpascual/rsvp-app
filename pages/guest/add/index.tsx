import GuestCreateForm from "@/ui-components/GuestCreateForm";
import { Button, Flex } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

export default function GuestAddForm() {
    const router = useRouter();

    return (
    <Flex
        direction='column'
        gap='1rem'
    >
        <Flex><Button onClick={() => router.back()}>Back</Button></Flex>
        <GuestCreateForm
        onSuccess={() => router.push('/')}
        overrides={{ rsvp: { label: 'RSVP' }}} />
    </Flex>)
}