import { Schema } from 'mongoose';
import modelArgs from '../models/entity';

const EMPTY_OBJ = {};
const SIMPLE_CB = (res, next) => (err, data) => err ? next(err) : res.send(data);

/*get APIs for model*/
export default dbConnection => {
	const collectionPath = `/${modelArgs[2]}`;
	modelArgs[1] = new Schema(modelArgs[1]);
	const Model = dbConnection.model(...modelArgs);

	return {
		get: {
			[collectionPath]: (req, res, next) => {
				Model.find(EMPTY_OBJ, SIMPLE_CB(res, next));
			}
		},
		post: {
			[collectionPath]: (req, res, next) => {
				const record = new Model(req.body);
				record.save(SIMPLE_CB(res, next));
			}
		},
		patch: {},
		put: {},
		delete: {}
	};
};