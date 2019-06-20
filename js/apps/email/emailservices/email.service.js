/*
• Has a filter object – null by default
• Has a computed property  ToShow that returns books based on the current filter
*/

import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const emailService = {
    query
}
const EMAIL_KEY = 'emails'

var emailsDB = [
    {
        "id": "O2e2G8w0skc",
        "subject": "Randy, me (5)",
        "from": "Randy",
        "sentAt": 1999,
        "body": `Please complete your Conceptboard signup &nbsp;&ndash;&nbsp;  You
    recently created a Conceptboard account, but you have not yet confirmed your email. Your email is used
    for notifications about board activity, invites, as well as account related tasks (like password
    retrieval).`,
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "OXeMG8wNskc",
        "subject": "Lucas Kriebel (via Twitter)",
        "from": "Eli",
        "sentAt": 1999,
        "body": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "JYOJa2NpSCq",
        "subject": "lorem euismod dictumst inceptos mi",
        "from":
            "Barbara Cartland"
        ,
        "sentAt": 1978,
        "body": `Last pic over my village &nbsp;&ndash;&nbsp;  Yeah i'd like that!
    Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the
    mountain view? I would love to see that one again!`,
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },

    {
        "id": "1y0Oqts35DQ",
        "subject": "gravida libero facilisis rhoncus urna etiam",
        "from":
            "Andrew Zimmer"
        ,
        "sentAt": 1999,
        "body": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "kSnfIJyikTP",
        "subject": "Still learning VueJs ?? ",
        "from":
            "Danielle Steel"
        ,
        "sentAt": 1978,
        "body": `Mochila Beta: Subscription Confirmed &nbsp;&ndash;&nbsp;  You've
    been confirmed! Welcome to the ruling class of the inbox. For your records, here is a copy of the
    information you submitted to us...`,
        "isRead": false,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "f4iuVmbuKCC",
        "subject": "interdum per habitasse luctus purus est",
        "from":
            "Dr. Seuss"
        ,
        "sentAt": 2011,
        "body": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
        "isRead": false,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "U2rfZO6oBZf",
        "subject": "Infinity HR",
        "from":
            "Leo Tolstoy"
        ,
        "sentAt": 1978,
        "body": "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
        "isRead": false,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "xI0wrXaaAcq",
        "subject": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
        "from":
            "Leo Tolstoy"
        ,
        "sentAt": 2011,
        "body": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "9laHCEdSpFy",
        "subject": "consectetur a eu tincidunt condimentum amet nisi",
        "from":
            "Dr. Seuss"
        ,
        "sentAt": 1999,
        "body": "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "nGhVwZvGCGp",
        "subject": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
        "from":
            "Jin Yong"
        ,
        "sentAt": 2011,
        "body": "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "Q8Q9Lsd03BD",
        "subject": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
        "from":
            "Dr. Seuss"
        ,
        "sentAt": 1978,
        "body": "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "bd7a76kARao",
        "subject": "pretium bibendum pharetra curabitur quisque dictumst",
        "from":
            "Danielle Steel"
        ,
        "sentAt": 2018,
        "body": "auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "qKyG0vqeO3e",
        "subject": "velit sapien eget tincidunt nunc tortor",
        "from":
            "Danielle Steel"
        ,
        "sentAt": 2018,
        "body": "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
        "isRead": false,
        "categories": [
            "Work",
            "Hack"
        ],
    },
    {
        "id": "2RvT48ZNInj",
        "subject": "etiam primis proin praesent placerat nisi fermentum nisi",
        "from":
            "Agatha Christie"
        ,
        "sentAt": 2011,
        "body": "nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "5z2s9pDXAYj",
        "subject": "ut placerat eu dapibus sapien sodales laoreet",
        "from":
            "Danielle Steel"
        ,
        "sentAt": 1999,
        "body": "etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "zBZu5cDEWha",
        "subject": "suscipit turpis etiam turpis libero lobortis",
        "from":
            "Jin Yong"
        ,
        "sentAt": 2011,
        "body": "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "aOI7tQuPZ2f",
        "subject": "neque eu purus euismod placerat adipiscing odio egestas consequat",
        "from":
            "Leo Tolstoy"
        ,
        "sentAt": 2011,
        "body": "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
        "isRead": false,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "WBooB82Uvwu",
        "subject": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
        "from":
            "Danielle Steel"
        ,
        "sentAt": 1999,
        "body": "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "xm1z5bbZjlS",
        "subject": "class habitant at commodo semper ligula a bibendum",
        "from":
            "Leo Tolstoy"
        ,
        "sentAt": 1999,
        "body": "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
        "isRead": false,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "u3j6QIKLlJb",
        "subject": "nullam class risus amet senectus scelerisque etiam curabitur",
        "from":
            "Agatha Christie"
        ,
        "sentAt": 1978,
        "body": "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    },
    {
        "id": "vxYYYdVlEH3",
        "subject": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
        "from":
            "William Shakespeare"
        ,
        "sentAt": 2011,
        "body": "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
        "isRead": true,
        "categories": [
            "Work",
            "Hack"
        ],

    }

]

function query() {
    var emails = emailsDB
    if (!emails) {
        emails = storageService.load(EMAIL_KEY)
        if (!emails) {
            emails = _generatEmails()
        }
    } else emailsDB = emails

    storageService.store(EMAIL_KEY, emails)
    return emailsDB
}

function _generatEmails() {
    var emails = []
    for (let index = 0; index < 20; index++) {
        var email = _createEmail()
        emails.push(email)

    }
    return emails;
}

function _createEmail() {
    var email = {
        id: utilService.makeId(),
        from: _randomName(),
        subject: utilService.makeLorem(10),
        sentAt: _randomDate(new Date(2019, 6, 6), new Date(2019, 21, 1)),
        body: utilService.getRandomInt(1900, 2000),
        isRead: Math.random() > 0.3 ? true : false


    }
    return email
}


function _randomName() {
    var namesFirst = ['Michael', 'Paula', 'Antonio', 'Mary', 'Martin', 'Amos', 'Oren', 'Maor']
    var namesLast = ['Holz', 'Wilson', 'Moreno', 'Saveley', 'Sommer', 'Oz', 'Ram', 'Alon']

    var len = namesFirst.length
    var numA = Math.floor(Math.random() * len)
    var numB = Math.floor(Math.random() * len)
    return namesFirst[numA] + ' ' + namesLast[numB]
}


function _randomDate(start, end) {
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date
}
