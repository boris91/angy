import mongoose from 'mongoose';
import dbConfig from './config';
import createAndRegisterAPIs from './apis/create-and-register-apis';

/*connect to DB & register APIs*/
export default server => {
	const dbURI = `${dbConfig.type}://${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`;
	const dbConnection = mongoose.createConnection(dbURI);
	createAndRegisterAPIs(dbConnection, server);
};