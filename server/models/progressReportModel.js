module.exports = (sequelize,DataTypes)=>{
    const Progress_Report = sequelize.define("progress_report",{
        current_semester:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        fellowship_status:{
            type:DataTypes.ENUM,
            values:["JRF","SRF"],
            allowNull:false
        },
        comprehensive_exam_status:{
            type:DataTypes.ENUM,
            values:["S","X","pending"]
        },
        rps_status:{
            type:DataTypes.ENUM,
            values:["S","X","pending"],
        },
        pss_status:{
            type:DataTypes.ENUM,
            values:["S","X","pending"]
        },
        phd_degree:{
            type:DataTypes.ENUM,
            values:["awarded","pending"]
        },
        viva_voice_status:{
            type:DataTypes.ENUM,
            values:["S","X","pending"]
        },
        thesis_submission_status:{
            type:DataTypes.ENUM,
            values:["submitted","pending"]
        },
        thesis_evaluation_status:{
            type:DataTypes.ENUM,
            values:["evaluated","pending"]
        },
        CGPA:{
            type:DataTypes.FLOAT
        }
    });

    return Progress_Report;
}
// '19JE0599', 'Pattewar Darshan', '$2a$10$VYrdsszLxNUUVa1/GgY4MOSxib.NBEUCTbJujWHJ3.5zu4oYnB4KW', 'Physics', 'Engineering Physics', 'darshantejha@gmail.com', '9652250847', 'HNO:1-9-21/B,Near E-seva,Ramnagar,Hyderabad,Telangana,500044', 'full', 'M-tech', 'active', 'JRF', '2020-12-12 00:00:00', '1', '2021-2022', '2021-12-14 00:00:00', '2021-12-14 00:00:00', '19PR0599', NULL, NULL
// '19PR0599', 'C.Rambabu', '$2a$10$/xPnMFyWnDP5n.s6T/U4JeWmTRexu6y1j76D7wlImzzawGyqYUG7a', 'Physics', 'Physics', 'rambabu3@gmail.com', '8525369874', 'HNO:1-6-31/B,Himayatnagar,Gandhinagar,Gujarat,500033', '2021-12-15 18:22:51', '2021-12-15 18:22:51'
// '19PR0600', 'R.Phani Kumar', '$2a$10$/xPnMFyWnDP5n.s6T/U4JeWmTRexu6y1j76D7wlImzzawGyqYUG7a', 'Chemistry', 'Chemistry', 'prk@gmail.com', '7414563298', 'HNO:1-7-31/B,Timayatnagar,Asnagar,Gujarat,500022', '2021-12-15 18:22:51', '2021-12-15 18:22:51'
// '1', 'chairman', 'maths', 'btech', 'btech', '2021-12-15 18:27:57', '2021-12-15 18:27:57', '19PR0599', '19PR0600', NULL, NULL, NULL, NULL
// '1', 'completed', '2021-12-15 00:00:00', '2021-12-30 00:00:00', 'completed', '2022-01-20 00:00:00', '2021-12-30 00:00:00', 'completed', '2022-01-30 00:00:00', '2021-12-30 00:00:00', 'completed', '2022-02-04 00:00:00', '2022-01-02 00:00:00', 'incomplete', '2022-02-13 00:00:00', NULL, 'incomplete', '2022-02-21 00:00:00', NULL, 'incomplete', '2022-02-28 00:00:00', NULL, 'incomplete', '2022-03-10 00:00:00', NULL, 'incomplete', '2022-03-17 00:00:00', NULL, 'completed', '2022-03-25 00:00:00', NULL, 'incomplete', '2022-04-07 00:00:00', NULL, '2021-12-01 00:00:00', '2022-01-02 19:25:58', '19JE0599'
// '1', 'Magnetism and field', '2021-12-12 00:00:00', NULL, '2021-12-01 00:00:00', '', NULL, 'pending', '2021-01-01 00:00:00', '2021-01-01 00:00:00', '1', '19JE0599', '19PR0599', '19PR0600', '1'
// '1', 'Magnetism and field', 'hello', '#field#magnetism', 'hello.txt', '2021-01-01 00:00:00', '1', '1', '2021-01-01 00:00:00', '2021-01-01 00:00:00', '19PR0599'
// '1', 'Magentism and its properties', '2022-01-05 13:48:16', '2022-01-05 13:48:16', NULL, '2021-12-10 00:00:00', 'pending', '2021-12-01 00:00:00', '2022-01-05 13:48:16', '2', '1', '19JE0599', '19PR0599', '19PR0588', '1'
// '2', 'Magnetism and its properties', 'Magnetism is a class of physical attributes that are mediated by magnetic fields. Electric currents and the magnetic moments of elementary particles give rise to a magnetic field, which acts on other currents and magnetic moments. Magnetism is one aspect of the combined phenomenon of electromagnetism.', 'files\\drafts\\theses\\19JE0599.pdf', 'files\\drafts\\synopses\\19JE0599.pdf', '2022-01-05 13:47:43', '2022-01-05 13:48:16', NULL
