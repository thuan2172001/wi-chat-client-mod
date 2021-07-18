import 'dotenv/config';

export const { END_POINT_URL } = process.env;

module.exports = {
    local: 'http://localhost:4200',
    dev: 'http://localhost:4200',
    prod: 'https://chat.i2g.cloud'
}
