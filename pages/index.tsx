import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import { useRouter } from 'next/router';
import { Schema } from '@/amplify/data/resource';
import '@aws-amplify/ui-react/styles.css';
import { Button, Flex, Table, TableCell, TableBody, TableHead, TableRow, ButtonGroup } from '@aws-amplify/ui-react';

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default function HomePage() {
  const router = useRouter();
  const [guests, setGuests] = useState<Schema['Guest'][]>([]);

  async function listGuests() {
    // fetch all guests
    const { data } = await client.models.Guest.list();
    setGuests(data);
  }

  async function editGuest(id: string) {
    router.push(`/guest/${id}`);
  }

  async function deleteGuest(id: string) {
    await client.models.Guest.delete({ id });
    router.push('/');
  }

  useEffect(() => {
    listGuests();
  }, []);

  return (
    <main>
      <Flex
        direction='column'
        gap='1rem'
      >
      <h1>Guest List</h1>
      <Button onClick={() => router.push('/guest/add')}>Add Guest</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell as='th'>Name</TableCell>
            <TableCell as='th'>Email</TableCell>
            <TableCell as='th'>Phone</TableCell>
            <TableCell as='th'>RSVP?</TableCell>
            <TableCell as='th'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {guests.map((guest) => (
            <TableRow key={guest.id}>
              <TableCell>{guest.name}</TableCell>
              <TableCell>{guest.email}</TableCell>
              <TableCell>{guest.phone}</TableCell>
              <TableCell>{guest.rsvp ? 'Y' : 'N'}</TableCell>
              <TableCell>
                <ButtonGroup>
                  <Button onClick={() => editGuest(guest.id)}>Edit</Button>
                  <Button onClick={() => deleteGuest(guest.id)}>Delete</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Flex>
    </main>
  );
}