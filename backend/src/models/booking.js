const models = {}
const db = require('../database/connection')

models.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from public.booking s inner join public.movie m on s.movie_id = m.movie_id')
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

models.addBooking = ({ schedule_id, username, paid, ticket_used, qr_code}) => {
    return new Promise((resolve, reject) => {
        db.query(
            `INSERT INTO public.booking (schedule_id, username, paid, ticket_used, qr_code) VALUES($1, $2, $3, $4, $5) RETURNING booking_id;`,
            [schedule_id, username, paid, ticket_used, qr_code]
        )
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

models.updateBooking = ({ schedule_id, username, paid, ticket_used, qr_code ,id }) => {
    return new Promise((resolve, reject) => {
        db.query(
            `UPDATE public.booking SET schedule_id = $1, username = $2, paid = $3, ticket_used = $4, qr_code = $5, updated_at = now() WHERE booking_id = $6 RETURNING booking_id;`,
            [schedule_id, username, paid, ticket_used, qr_code, id ]
        )
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

models.deleteBooking = ({id}) => {
    return new Promise((resolve, reject) => {
        db.query(
            `DELETE FROM public.booking WHERE booking_id = $1 RETURNING booking_id;`,
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
