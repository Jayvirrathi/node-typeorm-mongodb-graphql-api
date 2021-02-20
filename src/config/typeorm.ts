import {createConnection} from 'typeorm'
import path from 'path'

export async function connect() {
  await createConnection({
    type:"mongodb",
    host: "localhost",
    port: 27017,
    database: "typeorm_testgraphql",
    entities: [
      path.join(__dirname, '../entity/**/**.ts')
    ],
	  synchronize: true,
	useUnifiedTopology:true
  });
  console.log('Database is Connected')
}
