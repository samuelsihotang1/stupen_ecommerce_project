import SequelizeStore from 'connect-session-sequelize';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import db from './config/Database.js';
import ArticleRoute from './routes/ArticleRoute.js';
import AuthRoute from './routes/AuthRoute.js';
import ImageProductRoute from './routes/ImageProductRoute.js';
import ProductRoute from './routes/ProductRoute.js';
import UserRoute from './routes/UserRoute.js';
import SeederArticle from './seeder/SeederArticle.js';
import SeederProduct from './seeder/SeederProduct.js';
import SeederUser from './seeder/SeederUser.js';
import SeederImageProduct from './seeder/SeederImageProduct.js';

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
	db: db,
});

// Aktifkan untuk membuat database
(async () => {
	await db.sync();

	SeederArticle();
	SeederUser();
	SeederProduct();
    SeederImageProduct();
})();

app.use(
	session({
		secret: process.env.SESS_SECRET,
		resave: false,
		saveUninitialized: true,
		store: store,
		cookie: {
			secure: 'auto',
		},
	})
);

app.use(
	cors({
		credentials: true,
		origin: 'http://localhost:3000',
	})
);
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);
app.use(ArticleRoute);
app.use(ImageProductRoute);

// Aktifkan untuk mengisi ke database
// store.sync();

app.listen(process.env.APP_PORT, () => {
	console.log('Server up and running on 127.0.0.1:' + process.env.APP_PORT);
});
