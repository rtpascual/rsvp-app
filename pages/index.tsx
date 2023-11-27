import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import { useRouter } from 'next/router';
import { Schema } from '@/amplify/data/resource';
import '@aws-amplify/ui-react/styles.css';
import { Button, Flex, Table, TableCell, TableBody, TableHead, TableRow, ButtonGroup, Card, ScrollView } from '@aws-amplify/ui-react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import styles from '@/styles/Home.module.css';

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default function Home() {
  const router = useRouter();
  const [guests, setGuests] = useState<Schema['Guest'][]>([]);
  const [totalGuests, setTotalGuests] = useState(0);
  const [attendingCount, setAttendingCount] = useState(0);

  async function listGuests() {
    // fetch all guests
    const { data } = await client.models.Guest.list();
    const attending = data.filter(x => x.rsvp).length;
    setTotalGuests(data.length);
    setAttendingCount(attending);
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
        <Flex
          justifyContent="space-around"
        >
          <Card>
            <Flex
              direction="column"
              alignItems="center"
              gap="1rem"
            >
              <div>Attending</div>
              <div className={`${styles.data}`}>{attendingCount}</div>
            </Flex>
          </Card>
          <Card>
            <Flex
              direction="column"
              alignItems="center"
              gap="1rem"
            >
              <div>Total Guests</div>
              <div className={`${styles.data}`}>{totalGuests}</div>
            </Flex>
          </Card>
        </Flex>
        <Button onClick={() => router.push('/guest/add')}>Add Guest</Button>
        <ScrollView
        height="500px"
        >
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
                      <Button onClick={() => editGuest(guest.id)}><AiFillEdit /></Button>
                      <Button onClick={() => deleteGuest(guest.id)}><AiFillDelete /></Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollView>
      </Flex>
    </main>
  );
}