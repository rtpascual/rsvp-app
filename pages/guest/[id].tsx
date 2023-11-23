import GuestUpdateForm from "@/ui-components/GuestUpdateForm";
import { useRouter } from "next/router"



export default function GuestEditForm() {
    const router = useRouter();
    const guestId = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;

    return (
        <GuestUpdateForm id={guestId} onSuccess={() => router.push('/')} />
    )
}