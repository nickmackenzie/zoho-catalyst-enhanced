import * as catalyst from 'zcatalyst-sdk-node';
import { Table } from 'zcatalyst-sdk-node/lib/datastore/table'; // Updated import
import { Request, Response } from 'express'; // Assuming you're using Express.js
 // Import the CatalystApp type

export default async function copyData(req: Request, res: Response) {
  try {
    const catalystApp:any = catalyst.initialize(req);
    const datastore = catalystApp.datastore();

    // Correctly typed as an array of 'Table' from the SDK
    const tables: Table[] = await datastore.getAllTables();

    // Send the array of tables
    res.status(200).json(tables);
  } catch (err: any) {
    // Consider using a more specific type if possible
    console.error(err);

    // Handle error based on the type of error or its message
    if (err.message === 'Specific error message for 400 status') {
      res.status(400).send('Bad Request: ' + err.message);
    } else {
      res.status(500).send('Internal Server Error: ' + err.message);
    }
  }
}
