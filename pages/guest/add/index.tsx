import GuestCreateForm from "@/ui-components/GuestCreateForm";
import { useRouter } from "next/router";

export default function GuestAddForm() {
    const router = useRouter();

    return (<GuestCreateForm
        onSuccess={() => router.push('/')}
        overrides={{ rsvp: { label: 'RSVP' }}} />)
}