const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config();
const app = express()

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())
app.use(express.static('/../public/build'))

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
    dbInstance.seedFile()
        .then(res => console.log('that sucSEEDed...'))
        .catch(err => console.log('aww shit..', err))

    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.get('/api/getBehIncidents',
    (req, res, next) => {
       
        //const dbInstance = req.app.get('db')
        req.app.get('db').get_beh_reports().then(
            beh_reports => {
                res.status(200).send(beh_reports)
            }
        )
    })
    app.get('/api/getMedIncidents',
    (req, res, next) => {
       console.log('hit it getmedincidents')
        //const dbInstance = req.app.get('db')
        req.app.get('db').get_med_reports().then(
            med_reports => {
                res.status(200).send(med_reports)
            }
        )
    })

app.put('/api/getBehIncidentsGraph',
    (req, res, next) => {
        console.log('hit it', req.body)
        //const dbInstance = req.app.get('db')
        req.app.get('db').get_last_month_beh([req.body.clientName]).then(
            beh_reports => {
                console.log(beh_reports, 'behreports')
               return res.status(200).send(beh_reports)
            }
        )
    })

    app.put('/api/getMedIncidentsGraph',
    (req, res, next) => {
        console.log('hit get medIncidentsGraph', req.body)
        //const dbInstance = req.app.get('db')
        req.app.get('db').get_last_month_med([req.body.clientName]).then(
            med_reports => {
                console.log(med_reports, 'medreports')
               return res.status(200).send(med_reports)
            }
        )
    })

app.post('/api/reportM',
    (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { clientName, date, duration, incidentType, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved } = req.body
        dbInstance.new_med_report([clientName, date, duration, incidentType, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved])
            .then(() => res.status(200).send('that workedM'))
            .catch((err) => console.log(err))
    })

app.post('/api/reportB',
    (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { clientName, date, duration, behaviorExhibited, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved } = req.body
        dbInstance.new_beh_report([clientName, date, duration, behaviorExhibited, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved])
            .then(() => res.status(200).send('that workedB'))
            .catch((err) => console.log(err))
    })

app.delete('/api/deleteBehIncident/:id',
    (req, res, next) => {

        const dbInstance = req.app.get('db')
        dbInstance.delete_beh_report(req.params.id)
            .then((behReports) => {

                res.status(200).send(behReports)
            })
    }
)

app.delete('/api/deleteMedIncident/:id',
    (req, res, next) => {

        const dbInstance = req.app.get('db')
        dbInstance.delete_med_report(req.params.id)
            .then((medReports) => {

                res.status(200).send(medReports)
            })
    }
)

app.put('/api/updateBehIncident/:id',
    (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { clientName, duration, behaviorExhibited, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved } = req.body
        dbInstance.update_beh_report([clientName, duration, behaviorExhibited, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved, req.params.id])
            .then((behReports) => {
                res.status(200).send(behReports)
            })
    })
    app.put('/api/updateMedIncident/:id',
    (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { clientName, duration, incidentType, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved } = req.body
        dbInstance.update_med_report([clientName, duration, incidentType, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved, req.params.id])
            .then((medReports) => {
                res.status(200).send(medReports)
            })
    })
const port = process.env.PORT
app.listen(port, (() => { console.log('YAY') }))