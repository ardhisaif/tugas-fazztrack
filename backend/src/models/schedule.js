const models = {}
const db = require('../database/connection')

models.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from public.schedule s inner join public.movie m on s.movie_id = m.movie_id')
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

models.addSchedule = ({ movie_id, price, premiere, location, date_start, date_end, time}) => {
    return new Promise((resolve, reject) => {
        db.query(
            `INSERT INTO public.schedule (movie_id, price, premiere, location, date_start, date_end, time) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING schedule_id;`,
            [movie_id, price, premiere, location, date_start, date_end, time]
        )
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

models.updateSchedule = ({ movie_id, price, premiere, location, date_start, date_end, time ,id }) => {
    return new Promise((resolve, reject) => {
        db.query(
            `UPDATE public.schedule SET movie_id = $1, price = $2, premiere = $3, location = $4, date_start = $5, date_end = $6, time = $7, updated_at = now() WHERE schedule_id = $8 RETURNING booking_id;`,
            [ movie_id, price, premiere, location, date_start, date_end, time, id ]
        )
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

models.deleteSchedule = ({id}) => {
    return new Promise((resolve, reject) => {
        db.query(
            `DELETE FROM public.schedule WHERE schedule_id = $1 RETURNING schedule_id;`,
            [id]
        )
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


module.exports = models
