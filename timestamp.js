function timeStamp(req, res) {
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var input = req.params.input;

  input = /^\d+$/.test(input) ? parseInt(input) * 1000 : input;
  
  var date = new Date(input);

  if(isNaN(date) === false && date != null){
    res.json({
      unix   : Date.parse(date) / 1000,
      natural: days[date.getDay() - 1] + ' ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getUTCFullYear()
    });
  } else { 
    res.json({
      unix   : null,
      natural: null
    })
  }
}

module.exports = timeStamp;