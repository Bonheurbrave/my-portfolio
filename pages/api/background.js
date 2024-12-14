const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Code craft infoTEch',
                degree: "Certified in Fullstack web Development",
                detail: "Graduated  in Fullstack Web Engineering from Code Craft Kigali.",
                year: '2018-2022'
            },
            {
                id: 1,
                title: 'Cognitive Class Ai',
                degree: 'Certified in Data analysis with Python ',
                detail: "Completed course part 1 and part 2 in Pre-Engineering from Cognitive class remotely.",
                year: '2023-2024'
            },
            {
                id: 2,
                title: 'Acodes Mushishiro tss',
                degree: 'Diploma in software development',
                detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
                year: '2022-2024'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Acodes Tss',
                role: 'Frontend Developer',
                url: 'https://www.acodesmushishiro.ac.rw',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '02/2023 - Present',
                location: 'Kigali, Rwanda'
            },
            {
                id: 2,
                title: 'Diolichat',
                role: 'Intern',
                url: 'https://www.diolichat.com',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2023',
                location: 'Kigali, Rwanda'
            },
            {
                id: 3,
                title: 'Code craft Info tech',
                role: 'Fullstack web Developer',
                url: 'https://www.codecraftinfotech.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2020 - 02/2021',
                location: 'Kigali, Rwanda'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
