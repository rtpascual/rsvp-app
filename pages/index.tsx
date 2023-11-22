import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '@/amplify/data/resource';
import '@aws-amplify/ui-react/styles.css';
import { Button, Table, TableCell, TableBody, TableHead, TableRow } from '@aws-amplify/ui-react';

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default function HomePage() {
  const [guests, setGuests] = useState<Schema['Guest'][]>([]);

  async function listGuests() {
    // fetch all guests
    const { data } = await client.models.Guest.list();
    setGuests(data);
  }

  useEffect(() => {
    listGuests();
  }, []);

  return (
    <main>
      <h1>Hello, Amplify 👋</h1>
      <Button>Add Guest</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell as='th'>Name</TableCell>
            <TableCell as='th'>Email</TableCell>
            <TableCell as='th'>Phone</TableCell>
            <TableCell as='th'>RSVP?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {guests.map((guest) => (
            <TableRow key={guest.id}>
              <TableCell>{guest.name}</TableCell>
              <TableCell>{guest.email}</TableCell>
              <TableCell>{guest.phone}</TableCell>
              <TableCell>{guest.rsvp ? 'Y' : 'N'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id}>{guest.name} {guest.email} {guest.phone} - RSVP ? {guest.rsvp ? 'Y' : 'N'}</li>
        ))}
      </ul>
    </main>
  );
}