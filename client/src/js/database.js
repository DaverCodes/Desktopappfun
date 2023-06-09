import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: T1
export const putDb = async (content) => {
  console.log('Post to the database');
  console.error('putDb not implemented');
  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Call the .add() method to add the data to the object store.
  const addedId = store.put({id: 1, value: content });

  // Wait for the transaction to complete.
  const result = await addedId

  console.log('🚀 - data saved to the database with ID', result.value);
};

export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.get(1);

  // Get confirmation of the request.
  const result = await request;
  result 
    ? console.log('result.value', result.value)
    : console.log("data not found in db")
  return result?.value;
};


initdb();
