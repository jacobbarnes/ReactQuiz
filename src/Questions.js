const questions = [
    {
        id: "1",
        question: "Which of the following did Lehi not predict?",
        choices: ["The Jews will be taken captive by the Babylonians","The coming of the Messiah","The coming of John the Baptist","The restoration through Joseph Smith"],
        reference: "1 Nephi 10",
        answer: "The restoration through Joseph Smith"
    },

    {
        id: "2",
        question: "Which of the following describes the contents of the large plates?",
        choices: ["Wars and contentions","Secular history","A & B","Spiritual history"],
        reference: "2 Nephi 5:33",
        answer: "A & B"
    },

    {
        id: "3",
        question: "What did Lehi see  (that we know of) in the book that the angel showed him at the start of the Book of Mormon?",
        choices: ["The destruction of Jerusalem","The land of promise","The restoration of the Priesthood","His families future struggles in the wilderness"],
        reference: "1 Nephi 1:13",
        answer: "The destruction of Jerusalem"
    },

    {
        id: "4",
        question: "Why was Jesus Christ baptized?",
        choices: ["To wash away his sins","To fulfill all righteousness","To prove that John the Baptist was worthy","Because Mary and Joseph had instructed him to do say and he was following the commandment to honor thy mother and thy father."],
        reference: "2 Nephi 31:5",
        answer: "To fulfill all righteousness"
    },

    {
        id: "5",
        question: "How did Jesus' baptism 'fulfill all righteousness'?",
        choices: ["Since he was already perfect, the baptism acted as a proxy for people that will never get the chance to be baptized.","Jesus let John perform the baptism, even though John wanted Jesus to baptize John.","By being obedient to the Father and showing the people the way.","All of the above"],
        reference: "2 Nephi 31:7, 9",
        answer: "By being obedient to the Father and showing the people the way."
    },

    {
        id: "6",
        question: "When did Nephi pass the plates on to Jacob?",
        choices: ["30 years after Lehi left Jerusalem.","50 years after Lehi left Jerusalem.","25 years after Lehi left Jerusalem.","55 years after Lehi left Jerusalem."],
        reference: "Jacob 1:1",
        answer: "55 years after Lehi left Jerusalem."
    },

    {
        id: "7",
        question: "What does the allegory of the olive trees represent?",
        choices: ["The scattering and gathering of Israel.","The apostacy and restoration","The trials that Jacob's family experienced in the wilderness and how they could grow from them.","None of the above"],
        reference: "Jacob 5",
        answer: "The scattering and gathering of Israel."
    },

    {
        id: "8",
        question: "How did Enos describe his prayer to the Lord?",
        choices: ["A Wrestle","A Plea","A Struggle","A & C"],
        reference: "Enos 1:2, 10",
        answer: "A & C"
    },

    {
        id: "9",
        question: "Who is Jarom's father?",
        choices: ["Jacob","Enos","Omni","Joseph"],
        reference: "Jarom 1:1",
        answer: "Enos"
    },

    {
        id: "10",
        question: "Who was king of Judah when the people of Zarahemla left Jerusalem?",
        choices: ["Judah","Josiah","Manasseh","Zedekiah"],
        reference: "Omni 1:15",
        answer: "Zedekiah"
    },

    {
        id: "11",
        question: "Which of the following did King Benjamin not teach about in his famous speech?",
        choices: ["Baptism","Repentance","Service","Giving to the poor"],
        reference: "Mosiah 2-5",
        answer: "Baptism"
    },

    {
        id: "12",
        question: "Who was a priest of the wicked King Noah, repented, and preached the words of Abinadi?",
        choices: ["Alma the Younger","Mosiah","Alma the Elder","Shib"],
        reference: "Mosiah 17-18",
        answer: "Alma the Elder"
    },

    {
        id: "13",
        question: "Which of the following describes Zeezrom?",
        choices: ["A man that argued against Alma and was later converted","The antichrist that contended against Mosiah","The priest that joined the sons of Mosiah in their missionary efforts","Alma the Younger's missionary companion"],
        reference: "Alma 11",
        answer: "A man that argued against Alma and was later converted"
    },

    {
        id: "14",
        question: "Which of the following is not one of the ways that Moroni strengthened his fort?",
        choices: ["Trenches","Picket walls","Watch towers","Archers"],
        reference: "Alma 50",
        answer: "Archers"
    },

    {
        id: "15",
        question: "Who were the two sons of Helaman, the son of Helaman?",
        choices: ["Samuel and Nephi","Pahoran and Pacumeni","Nephi and Lehi","Coriantumr and Pahoran"],
        reference: "Helaman 3:21",
        answer: "Nephi and Lehi"
    },

    {
        id: "16",
        question: "What did the Lord command Samuel the Lamanite to preach to the people?",
        choices: ["Faith","Whatever the spirit told him","Baptism","Repentance"],
        reference: "Helaman 13:3",
        answer: "Whatever the spirit told him"
    },

    {
        id: "17",
        question: "What was the sign that was fulfilled in 3 Nephi 1 that signaled the birth of Christ to the Nephites?",
        choices: ["The sky went dark for 3 days","The Nephites were loosed from their bonds","The earth shook","The sky stayed light during the night"],
        reference: "3 Nephi 1:15",
        answer: "The sky stayed light during the night"
    },

    {
        id: "18",
        question: "How did Jesus start his appearance to the Nephites?",
        choices: ["By testifying of the Atonement","By healing their sick","By teaching the children","By letting everyone feel the nail prints"],
        reference: "3 Nephi 11:10-11",
        answer: "By testifying of the Atonement"
    },

    {
        id: "19",
        question: "Roughly how long after Jesus came to the Americas did the Nephites and Lamanites start to be prideful and disobedient again?",
        choices: ["2 years","15 years","150 years","200 years"],
        reference: "4 Nephi 1:35",
        answer: "200 years"
    },

    {
        id: "20",
        question: "Who instructed Mormon to find the plates?",
        choices: ["Helaman","Ammaron","The angel Gabriel","Moroni"],
        reference: "Mormon 1:3",
        answer: "Ammaron"
    },

    {
        id: "21",
        question: "Why does Moroni say we would be more miserable to dwell with a holy God in our filthiness than we would to be in hell?",
        choices: ["We would be caused to have a remembrance of our sins before God.",'We would "feel in our heart and in our souls" that we are not worthy to be in His presence',"The holiness of Jesus Christ would kindle a flame of unquenchable fire upon us","Our natural appetites and desires would make us want to be with the sinners because our nature will not change."],
        reference: "Mormon 9:5",
        answer: "The holiness of Jesus Christ would kindle a flame of unquenchable fire upon us"
    },

    {
        id: "22",
        question: "Who received the Urim and Thummim first?",
        choices: ["Joseph Smith","Moses","Moroni","The Brother of Jared"],
        reference: "Ether 3:23",
        answer: "The Brother of Jared"
    },

    {
        id: "23",
        question: "Why was the Brother of Jared able to see God's finger?",
        choices: ["His Faith","His obedience","His diligence","His works"],
        reference: "Ether 12:20",
        answer: "His Faith"
    },

    {
        id: "24",
        question: "Where can the sacramental prayers be found in the Book of Mormon?",
        choices: ["Ether 6-7","Moroni 4-5","3 Nephi 12-13","Mosiah 5-6"],
        reference: "Moroni 4-5",
        answer: "Moroni 4-5"
    },

    {
        id: "25",
        question: "Which of the following are not included in Moroni's promise?",
        choices: ["Sincere heart","Faith in Christ","Obedience","Real intent"],
        reference: "Moroni 10:5",
        answer: "Obedience"
    },
]

export default (n = 10) => {
    return questions.sort(() => 0.5 - Math.random()).slice(0,n);
}