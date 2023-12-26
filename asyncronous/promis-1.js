// description: promis use hoy muloto kono ekta asyncronous operation ke handle korar jonno

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Metting",
      location: "Google Meet",
      time: "10:00 Pm",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("meeting already scheduled!"));
  }
});

// const addToCalender = (meetingDetails) => {
//   return new Promise((resolve, reject) => {
//     const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     resolve(calender);
//   });
// };

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

meeting
  .then(addToCalender)
  .then((res) => {
    //resolved data
    console.log(JSON.stringify(res));
  })

  .catch((err) => {
    console.log(err.message);
  });
